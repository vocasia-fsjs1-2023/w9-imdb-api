const { Review, Movie } = require("../models");

class Controller {
  static addReview(req, res) {
    const body = req.body;
    const { title, description, rating, movieId } = body;
    Review.create({
      title,
      description,
      rating,
      movieId,
    })
      .then((review) => {
        res.status(201).json(review);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static getReview(req, res) {
    Review.findAll({ include: Movie })
      .then((result) => {
        res.status(200).json({ review: result });
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static async updateReview(req, res) {
    let id = req.params.id;
    const body = req.body;
    const { title, description, rating } = body;

    const findId = await Review.findByPk(id);
    if (!findId) {
      res.status(200).json({ message: "Movie tidak dapat ditemukan" });
    }

    let response;
    try {
      await Review.update(
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
      response = `Review dengan id ${id} berhasil diupdate`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async deleteReview(req, res) {
    let id = req.params.id;
    const findId = await Review.findByPk(id);
    if (!findId) {
      res.status(404).json({ message: "Review tidak dapat ditemukan" });
    }
    await Review.destroy({
      where: {
        id: id,
      },
    });
    res
      .status(200)
      .json({ message: `Review dengan id ${id} berhasil dihapus` });
  }
}

module.exports = Controller;
