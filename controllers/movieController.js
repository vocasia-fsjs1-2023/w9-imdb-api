const { Movie, Review } = require("../models"); // Pastikan impor model Movie sesuai dengan struktur folder Anda

// Controller untuk mendapatkan semua film
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      include: Review, // Menambahkan parameter include untuk menggabungkan model Review
    });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Gagal mendapatkan film" });
  }
};

// Controller untuk mendapatkan film berdasarkan ID
const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id, {
      include: Review, // Menambahkan parameter include untuk menggabungkan model Review
    });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "Film tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Gagal mendapatkan film" });
  }
};

// Controller untuk membuat film baru
const createMovie = async (req, res) => {
  const { title, description } = req.body;
  try {
    const movie = await Movie.create({ title, description });
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: "Gagal membuat film" });
  }
};

// Controller untuk memperbarui film berdasarkan ID
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const movie = await Movie.findByPk(id);
    if (movie) {
      movie.title = title;
      movie.description = description;
      await movie.save();
      res.json(movie);
    } else {
      res.status(404).json({ error: "Film tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Gagal memperbarui film" });
  }
};

// Controller untuk menghapus film berdasarkan ID
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id);
    if (movie) {
      await movie.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Film tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Gagal menghapus film" });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
