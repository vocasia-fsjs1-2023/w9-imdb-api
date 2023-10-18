const { Movie, review } = require("../models");

class Controller {
    static async addMovie(req, res) {
        const { title, description } = req.body;
        let response;
        try {
            const movies = await Movie.create(
                { 
                    title, 
                    description
                }
            );
            response = movies;
        } catch (error) {
            response = "ERROR";
        }
        res.status(200).json(response);
    }
    static async getMovie(req, res) {
        let response;
        try {
            const movies = await Movie.findAll({ include: review });
            response = movies;
        } catch (error) {
            response = "ERROR";
        }
        res.status(200).json(response);
    }
    static async getMovieId(req, res) {
        let id = Number(req.params["id"]);
        const findId = await Movie.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Id Movie tidak ditemukan" });
        }
        let response;
        try {
            const movies = await Movie.findAll({
                where: {
                    id: id
                },
                include: review
            });
            response = movies;
        } catch (error) {
            response = "ERROR";
        }
        res.status(200).json(response);
    }
    static async updateMovie(req, res) {
        const { title, description } = req.body;
        let id = Number(req.params["id"]);
        const findId = await Movie.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Id Movie tidak ditemukan" });
        }
        let response;
        try {
            await Movie.update({
                title,
                description
            }, {
                where: {
                    id: id
                }
            });
            response = `Movie dengan id ${id} berhasil diupdate`;
        } catch (error) {
            response = "ERROR";
        }
        res.status(200).json(response);
    }
    static async deleteMovie(req, res) {
        let id = Number(req.params["id"]);
        const findId = await Movie.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Id Movie tidak ditemukan" });
        }
        await Movie.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(`Movie dengan id ${id} berhasil dihapus`);
    }
}

module.exports = Controller;