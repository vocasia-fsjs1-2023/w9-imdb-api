const { review } = require("../models");

class Controller {
    static addReview(req, res) {
        const { title, description, rating, movieId} = req.body;
        review.create({
            title,
            description,
            rating,
            movieId,
        }).then((reviews) => {
            review.findByPk(reviews.id, {include: 'movie'
        })
        .then((data) => {
          res.status(201).json(data);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
    }

    static async getReview(req, res) {
        try {
            const reviews = await review.findAll({include: 'movie'}); 
            res.status(200).json(reviews);
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data review' });
          }
    }

    static async updateReview(req, res) {
        const { title, description, rating} = req.body;
        let id = Number(req.params.id);
        const findId = await review.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Review dengan id: ${id} tidak ditemukan` });
        }
        try {
            await review.update(
            {
                title,
                description,
                rating,
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
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data review' });
        }  
    }

    static async deleteReview(req, res) {
        let id = Number(req.params["id"]);
        const findId = await review.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Review dengan id: ${id}  tidak ditemukan` });
        }
        await review.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(`Review dengan id ${id} berhasil dihapus`);
    }
}

module.exports=Controller;