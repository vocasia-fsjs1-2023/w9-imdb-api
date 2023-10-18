const { review } = require("../models");

class ReviewController {
    static async createReview(req, res) {
        const { title, description, movieId, rating, comment } = req.body;

        try {
            const newReview = await review.create({
                title,
                description,
                movieId,
                rating,
                comment
            });
            res.status(201).json(newReview);
        } catch (error) {
            res.status(500).json({ error: "Gagal membuat review baru." });
        }
    }

    static async getAllReviews(req, res) {
        try {
            const reviews = await review.findAll();
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ error: "Gagal mengambil data review." });
        }
    }

    static async getReviewById(req, res) {
        const id = Number(req.params.id);

        try {
            const foundReview = await review.findByPk(id);
            if (!foundReview) {
                return res.status(404).json({ error: "Review tidak ditemukan." });
            }
            res.status(200).json(foundReview);
        } catch (error) {
            res.status(500).json({ error: "Gagal mengambil data review." });
        }
    }

    static async updateReview(req, res) {
        const { rating, comment } = req.body;
        const id = Number(req.params.id);

        try {
            const foundReview = await review.findByPk(id);
            if (!foundReview) {
                return res.status(404).json({ error: "Review tidak ditemukan." });
            }

            await foundReview.update({ rating, comment });
            res.status(200).json({ message: `Review dengan id ${id} berhasil diupdate.` });
        } catch (error) {
            res.status(500).json({ error: "Gagal mengupdate review." });
        }
    }

    static async deleteReview(req, res) {
        const id = Number(req.params.id);

        try {
            const foundReview = await review.findByPk(id);
            if (!foundReview) {
                return res.status(404).json({ error: "Review tidak ditemukan." });
            }

            await foundReview.destroy();
            res.status(200).json({ message: `Review dengan id ${id} berhasil dihapus.` });
        } catch (error) {
            res.status(500).json({ error: "Gagal menghapus review." });
        }
    }
}

module.exports = ReviewController;
