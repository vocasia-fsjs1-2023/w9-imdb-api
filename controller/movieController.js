const { Movie, Review } = require("../models");

class Controller {
  static addMovie(req, res) {
    const body = req.body;
    const { title, description } = body;

    Movie.create({
      title,
      description,
    })
      .then((movie) => {
        res.status(201).json(movie);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static async getUser(req, res) {
    let respon;
    try {
      const movie = await Movie.findAll({ include: Review });
      respon = movie;
    } catch (error) {
      respon = "Error";
    }
    res.status(200).json(respon);
  }
  static async delUser(req, res) {
    const id = Number(req.params["id"]);
    await Movie.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(`Data Movie dengan id ${id} telah di hapus!`);
  }
  static async putUser(req, res) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;

      const movie = await Movie.findByPk(id);
      if (movie) {
        await movie.update({ title, description });
        res.status(200).json(`Movie dengan id ${id} berhasil di update!`);
      } else {
        res.status(404).json("Movie dengan id tersebut tidak ditemukan!");
      }
    } catch (error) {
      res.status(500).json("Terjadi kesalahan saat mengupdate data Movie");
    }
  }
}

module.exports = Controller;
