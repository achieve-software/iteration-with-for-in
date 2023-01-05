//*             FOR-IN LOOP
//* =========================================

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "feyza",
  "ahmet",
  "feyza",
  "can",
  "mehmet",
  "cem",
];

const findStudent = (name) => {
  let counter = 0;
  for (let i in students) {
    if (name.toLowerCase() === students[i]) {
      counter++;
    }
  }

  if (counter === 0) {
    return `${name} can not be found`;
  } else {
    return `${name} found ${counter} times`;
  }
};

console.log(findStudent("MehMet"));
console.log(findStudent("ismet"));
console.log(findStudent("feyza"));
