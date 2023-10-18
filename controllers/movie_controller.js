const { Movie, Review } = require("../models");

class Controller {
  static addMovie(req, res) {
    const body = req.body;
    const { title, description } = body;

    Movie.create({
      title,
      description,
    })
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static getAllMovie(req, res) {
    Movie.findAll()
      .then((result) => {
        res.status(200).json({ movie: result });
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static async getMovieId(req, res) {
    let id = req.params.id;
    const findId = await Movie.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Movie tidak dapat ditemukan" });
    }

    let response;
    try {
      const movies = await Movie.findAll({
        where: {
          id: id,
        },
        include: Review,
      });
      response = movies;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async updateMovie(req, res) {
    let id = req.params.id;
    const body = req.body;
    const { title, description } = body;

    const findId = await Movie.findByPk(id);
    if (!findId) {
      res.status(404).json({ message: "Movie tidak dapat ditemukan" });
    }

    let response;
    try {
      await Movie.update(
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
      response = `Movie dengan id ${id} berhasil diupdate`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async deleteMovie(req, res) {
    let id = req.params.id;
    const findId = await Movie.findByPk(id);
    if (!findId) {
      res.status(404).json({ message: "Movie tidak dapat ditemukan" });
    }
    await Movie.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "movie Ice Cold telah dihapus" });
  }
}

module.exports = Controller;
