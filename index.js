
let listQuran = [];
let listMeal = [];

//url den id yi cek
const queryString = window.location.href;
let getId = queryString.split("/").pop().split('.')[0];

console.log("html",queryString,getId);

//kuran sesleri verisi
let dataSoundArray = [
  { id: 1, name: "Ahmad bin Ali Al-Ajmi", file: "ahmed" },
  { id: 2, name: "Bünyamin Topçuoğlu", file: "bunyamin" },
  { id: 2, name: "Fatih Çollak", file: "fatih" },
  { id: 3, name: "İshak Danış", file: "ishak" },
  { id: 4, name: "Nasser Al Qatimi", file: "nasser" },
  { id: 5, name: "Saad Ghamidi", file: "saad" },
];

//meal verisi
let dataMealArray = [{ id: 6, name: "Türkçe", file: "meal" }];

//kuran sesleri ekleme
for (let i = 0; i < dataSoundArray.length; i++) {
  var data = dataSoundArray[i];
  listQuran.push(`
  <tr>
  <td class="col-md-1">${data.name}</td>
  <td>
      <audio controls="" controlslist="nodownload">
          <source src="../ses/${data.file}/${getId}.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
      </audio> 
  </td>
</tr>`);
}

document.getElementById("quranSound").innerHTML = listQuran;

//meal sesleri ekleme
for (let i = 0; i < dataMealArray.length; i++) {
  var data = dataMealArray[i];
  listMeal.push(`
    <tr>
    <td class="col-md-1">${data.name}</td>
    <td>
        <audio controls="" controlslist="nodownload">
            <source src="/ses/${data.file}/${getId}.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio> 
    </td>
  </tr>`);
}

document.getElementById("mealSound").innerHTML = listMeal;
