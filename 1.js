const a = 10;
console.log(a); //10
a = 12;
console.log(a); //error

const angka1 = 1;
const angka2 = 1;
const total = parseInt(angka1) + parseInt(angka2);

const depan = "Budi";
const belakang = "Sudarsono";
const nama_lengkap = depan + " " + belakang;
console.log(total);

let teksUmur = "25"; // string
let angkaUmur = parseInt(teksUmur); // int

console.log(teksUmur + 5); // 225
console.log(angkaUmur + 5); // 25 + 5 = 30

// JSON.parse
// JSON : Javascript object notation
// Server akan ngirim data bertipe string lalu js client/fe nangkep dan di ubah jadi json (object)
// obj json/js/fe : (.) dataServerTeks.nama
let dataServerTeks = '{"nama": "Budi", "umur": 25, "kota":"Jakarta"}';

console.log(dataServerTeks.nama);
let dataUser = JSON.parse(dataServerTeks)
console.log(dataUser.nama);

// ES(Ecma Script) 6
let budi = "tes";
let Sudarsono = "tes Sudarsono";
let gabungin = budi + " " + Sudarsono;
// '': "": ``:
console.log("Selamat datang," + gabungin + ", Pemain sepak bola"); // budi Sudarsono
console.log(`Selamat datang, ${budi} ${Sudarsono}, Pemain sepak bola`); // budi Sudarsono
console.log(budi); // budi Sudarsono
console.log(Sudarsono); // budi Sudarsono