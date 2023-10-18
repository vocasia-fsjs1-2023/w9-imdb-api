const { movie } = require("../models");

class Controller {
    static addMovie(req, res) {
        const { title, description} = req.body;
        movie.create({
            title,
            description,
        }).then((data) => {
            res.status(201).json(data);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    static async getMovie(req, res) {
        try {
            const movies = await movie.findAll(); 
            res.status(200).json({movies});
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data movie' });
          }
    }

    static async getId_Movie(req, res) {
        try{
        let id = Number(req.params.id);
        const findId = await movie.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Movie dengan id: ${id} tidak ditemukan` });
        }
        res.status(200).json(findId);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data movie' });
        }
    }

    static async updateMovie(req, res) {
        const { title, description} = req.body;
        let id = Number(req.params.id);
        const findId = await movie.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Movie dengan id: ${id} tidak ditemukan` });
        }
        try {
            await movie.update(
            {
                title,
                description,
            },
            {
                where: {
                id: id,
                },
            }
            );
            res.status(200).json(findId);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data movie' });
        }  
    }
    
    static async deleteMovie(req, res) {
        let id = Number(req.params["id"]);
        const findId = await movie.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Movie dengan id: ${id}  tidak ditemukan` });
        }
        await movie.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(`Movie dengan id ${id} berhasil dihapus`);
    }
}

module.exports=Controller;