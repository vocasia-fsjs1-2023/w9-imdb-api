const { movie } = require("../models");

class MovieController {
    static async createMovie(req, res) {
        const { title, description } = req.body;

        try {
            const newMovie = await movie.create({
                title,
                description
            });
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({ error: "Gagal membuat movie baru." });
        }
    }

    static async getAllMovies(req, res) {
        try {
            const movies = await movie.findAll();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ error: "Gagal mengambil data movie." });
        }
    }

    static async getMovieById(req, res) {
        const id = Number(req.params.id);

        try {
            const foundMovie = await movie.findByPk(id);
            if (!foundMovie) {
                return res.status(404).json({ error: "Movie tidak ditemukan." });
            }
            res.status(200).json(foundMovie);
        } catch (error) {
            res.status(500).json({ error: "Gagal mengambil data movie." });
        }
    }

    static async updateMovie(req, res) {
        const { title, description } = req.body;
        const id = Number(req.params.id);

        try {
            const foundMovie = await movie.findByPk(id);
            if (!foundMovie) {
                return res.status(404).json({ error: "Movie tidak ditemukan." });
            }

            await foundMovie.update({ title, description });
            res.status(200).json({ message: `Movie dengan id ${id} berhasil diupdate.` });
        } catch (error) {
            res.status(500).json({ error: "Gagal mengupdate movie." });
        }
    }

    static async deleteMovie(req, res) {
        const id = Number(req.params.id);

        try {
            const foundMovie = await movie.findByPk(id);
            if (!foundMovie) {
                return res.status(404).json({ error: "Movie tidak ditemukan." });
            }

            await foundMovie.destroy();
            res.status(200).json({ message: `Movie dengan id ${id} berhasil dihapus.` });
        } catch (error) {
            res.status(500).json({ error: "Gagal menghapus movie." });
        }
    }
}

module.exports = MovieController;
