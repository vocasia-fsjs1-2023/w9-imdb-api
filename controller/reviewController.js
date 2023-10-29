const { Movie, Review } = require("../models");

class Controller {
  static async createReview(req, res) {
    const body = req.body;
    const { title, description, rating, movieId } = body;
  
    try {
        const reviews = await Review.create({
            title,
            description,
            rating,
            movieId,
    });
    const result = await Review.findAll({
      where: {
        id: reviews.id,
      },
      include: Movie,
    });
    
      res.status(201).json(result);
    } catch(error) {
    res.status(500).json(error);
      console.log(error);
    }
 }

  static async reviewList(req, res) {
    try {
        const reviews = await Review.findAll({ include: Movie });
        res.status(200).json(reviews);
      } catch (error) {
        res.status(500).json(error);
      }
  }

  static async reviewUpdateData(req, res) {
    let id = Number(req.params.id);
    const { title, description, rating } = req.body;
    const body = req.body;
    
    let response;
    try {
      await Review.update(
        {
          title,
          description, 
          rating
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

  static async reviewDelete(req, res) {
    let id = req.params.id;
    
    let response;
    try {
      await Review.destroy({
        where: {
          id: id,
        },
      });
    
      response = `Review dengan id ${id} berhasil dihapus`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
  
    res.status(200).json(response);
  }
}

module.exports = Controller;
