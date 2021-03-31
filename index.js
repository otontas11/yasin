
let listQuran = [];
let listMeal = [];

//url den id yi cek
const queryString = window.location.href;
let getId = queryString.split("/").pop().split('.')[0];
 
//kuran sesleri verisi
let dataSoundArray = [
  { id: 1, name: "Ahmad bin Ali Al-Ajmi", file: "ahmed" },
  { id: 2, name: "Bünyamin Topçuoğlu", file: "bunyamin" },
  { id: 3, name: "Fatih Çollak", file: "fatih" },
  { id: 4, name: "İshak Danış", file: "ishak" },
  { id: 5, name: "Nasser Al Qatimi", file: "nasser" },
  { id: 6, name: "Saad Ghamidi", file: "saad" },
];

//meal verisi
let dataMealArray = [{ id: 6, name: "Türkçe", file: "meal" }];

//kuran sesleri ekleme
for (let i = 0; i < dataSoundArray.length; i++) {
  var data = dataSoundArray[i];
  listQuran.push(`
  <br/>
  <tr class="mb-2">
  <td class="col-md-1">${data.name}</td>
  <td>
      <audio controls="" controlslist="nodownload">
          <source src="../ses/${data.file}/${getId}.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
      </audio> 
  </td>
</tr>`);

} 

 //array içerisindeki virgğlleri sil
document.getElementById("quranSound").innerHTML =  listQuran.slice(Math.max(0, 0)).join(" ");

//meal sesleri ekleme
for (let i = 0; i < dataMealArray.length; i++) {
  var data = dataMealArray[i];
  listMeal.push(`
  <br/>
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

document.getElementById("mealSound").innerHTML = listMeal.slice(Math.max(0, 0)).join(" ");


//biri çalarken diğerini durdur
document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, true);
