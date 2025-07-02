function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot kosong");
      return;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        this.penumpang.splice(i, 1);
        this.kas += bayar;
        console.log(this.penumpang, this.kas);
        return;
      }
    }

    console.log("Penumpang tidak ditemukan");
  };
}

const angkot1 = new Angkot("Sopir1", ["A1", "A2"], [], 0);
const angkot2 = new Angkot("Sopir2", ["B1", "B2"], [], 0);
