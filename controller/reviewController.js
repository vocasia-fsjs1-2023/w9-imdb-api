const { Review } = require("../models");

class Controller {
  static postReview(req, res) {
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
  static async getReview(req, res) {
    const movieId = Number(req.query["movieId"]);

    let respon;
    try {
      const review = await Review.findAll();
      respon = review;
    } catch (error) {
      console.log(error);
      respon = JSON.stringify(error);
    }
    res.status(200).json(respon);
  }
  static async delReview(req, res) {
    const id = Number(req.params["id"]);
    await Review.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(`Review dengan id ${id} telah di hapus!`);
  }
  static async putReview(req, res) {
    try {
      const { id } = req.params;
      const { title, description, rating } = req.body;

      const review = await Review.findByPk(id);
      if (review) {
        await review.update({ title, description, rating });
        res.status(200).json(`Review dengan id ${id} berhasil di update!`);
      } else {
        res.status(404).json("Review dengan id tersebut tidak ditemukan!");
      }
    } catch (error) {
      res.status(500).json("Terjadi kesalahan saat mengupdate data Movie");
    }
  }
}

module.exports = Controller;
