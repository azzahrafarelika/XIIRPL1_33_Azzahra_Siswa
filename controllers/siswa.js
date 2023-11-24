const Siswa = require("../models/model");

module.exports = {
  //get all
  index: async (req, res) => {
    try {
      const siswa = await Siswa.find();
      res.status(200).json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }
  },

  //post data
  store: async (req, res) => {
    try {
      const siswa = await Siswa.create(req.body);
      res.status(200).json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
        message: "data berhasil ditambah",
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  //get by id
  show: async (req, res) => {
    try {
      const siswa = await Siswa.findById(req.params.id);
      res.json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
        message: "data berhasil didapat berdasarkan id",
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }
  },

  //update data by id
  update: async (req, res) => {
    try {
      const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        status: true,
        data: siswa,
        method: req.method,
        url: req.url,
        message: "data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }
  },

  //delete data by id
  delete: async (req, res) => {
    try {
      await Siswa.findByIdAndDelete(req.params.id);
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "data berhasil dihapus",
      });
    } catch (error) {
      res.status(400).json({ succes: false });
    }
  },
};