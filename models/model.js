const mongoose = require("mongoose");

const siswaSchema = new mongoose.Schema({
  NISN: {
    type: String,
    required: [true, "Silahkan isikan Nomor Induk Siswa"],
    unique: true,
  },
  NIS: {
    type: String,
    required: [true, "Silahkan isikan Nomor Induk Siswa"],
    unique: true,
  },
  NamaLengkap: {
    type: String,
    required: [true, "Silahkan isikan nama siswa"],
    unique: true,
  },
  Kelas: {
    type: String,
    required: [true, "Silahkan isikan kelas siswa"],
  },
  NoHP: {
    type: String,
    required: [true, "Silahkan isikan tanggal lahir siswa"],
    unique: true,
  },
});

module.exports = mongoose.model("siswa", siswaSchema);