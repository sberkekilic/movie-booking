// Film verilerini içeren bir dizi
var filmData = [
  { ad: "Film 1", vizyonda: true, resim: "/images/jw4_small.jpg" },
  { ad: "Film 2", vizyonda: false, resim: "/images/galaksinin-koruyuculari-small.png" },
  { ad: "Film 3", vizyonda: true, resim: "/images/super-mario-small.png" },
  { ad: "Film 4", vizyonda: false, resim: "/images/askin-saati-1903-small.png" },
  { ad: "Film 5", vizyonda: true, resim: "/images/hava-muhalefeti_small.png" },
  { ad: "Film 6", vizyonda: false, resim: "/images/belle-ve-sebastian-cesur-dostum-small.png" }
  ];
// DOM elementlerini seçme
var vizyondakiFilmlerBtn = document.getElementById("vizyondakiFilmlerBtn");
var gelecekFilmlerBtn = document.getElementById("gelecekFilmlerBtn");
var filmListesi = document.getElementById("filmListesi");

// Sayfa yüklendiğinde vizyondaki filmler butonu aktif olsun ve vizyondaki filmleri listele
window.onload = function () {
  vizyondakiFilmlerBtn.classList.add("aktif"); // Vizyondaki filmler butonunu aktif yap
  listeleVizyondakiFilmler(); // Vizyondaki filmleri listele
};

// Vizyondaki filmler butonuna tıklandığında
vizyondakiFilmlerBtn.addEventListener("click", function () {
  vizyondakiFilmlerBtn.classList.add("aktif"); // Vizyondaki filmler butonunu aktif yap
  gelecekFilmlerBtn.classList.remove("aktif"); // Gelecek filmler butonunu pasif yap
  listeleVizyondakiFilmler(); // Vizyondaki filmleri listele
});

// Gelecek filmler butonuna tıklandığında
gelecekFilmlerBtn.addEventListener("click", function () {
  gelecekFilmlerBtn.classList.add("aktif"); // Gelecek filmler butonunu aktif yap
  vizyondakiFilmlerBtn.classList.remove("aktif"); // Vizyondaki filmler butonunu pasif yap
  listeleGelecekFilmler(); // Gelecek filmleri listele
});

// Vizyondaki filmleri listeleme fonksiyonu
function listeleVizyondakiFilmler() {
  filmListesi.innerHTML = ""; // Film listesini temizle

  // filmData dizisindeki vizyonda olan filmleri filmListesi elementine ekle
  for (var i = 0; i < filmData.length; i++) {
    if (filmData[i].vizyonda) {
      var li = document.createElement("li");
      li.classList.add("film-karti");
      
      // Film resmini ekleyen img elementi
      var img = document.createElement("img");
      img.src = filmData[i].resim;
      img.alt = filmData[i].ad;
      li.appendChild(img);

      // Film adını ekleyen span elementi
      var span = document.createElement("span");
      span.classList.add("film-ad");
      span.textContent = filmData[i].ad;
      li.appendChild(span);

      filmListesi.appendChild(li);
    }
  }
}

function listeleGelecekFilmler() {
  filmListesi.innerHTML = ""; // Film listesini temizle

  // filmData dizisindeki vizyonda olmayan filmleri filmListesi elementine ekle
  for (var i = 0; i < filmData.length; i++) {
    if (!filmData[i].vizyonda) {
      var li = document.createElement("li");
      li.classList.add("film-karti");

      // Film resmini ekleyen img elementi
      var img = document.createElement("img");
      img.src = filmData[i].resim;
      img.alt = filmData[i].ad;
      li.appendChild(img);

      // Film adını ekleyen span elementi
      var span = document.createElement("span");
      span.classList.add("film-ad");
      span.textContent = filmData[i].ad;
      li.appendChild(span);

      filmListesi.appendChild(li);
    }
  }
}






