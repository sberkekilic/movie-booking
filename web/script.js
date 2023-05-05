// Film verilerini içeren bir dizi
var filmData = [
  { ad: "Film 1", vizyonda: true, resim: "/images/jw4_small.jpg" },
  { ad: "Film 2", vizyonda: false, resim: "/images/galaksinin-koruyuculari-small.png" },
  { ad: "Film 3", vizyonda: true, resim: "/images/super-mario-small.png" },
  { ad: "Film 4", vizyonda: false, resim: "/images/askin-saati-1903-small.png" },
  { ad: "Film 5", vizyonda: true, resim: "/images/hava-muhalefeti_small.png" },
  { ad: "Film 6", vizyonda: false, resim: "/images/belle-ve-sebastian-cesur-dostum-small.png" },
  { ad: "Film 7", vizyonda: true, resim: "/images/jw4_small.jpg" },
  { ad: "Film 8", vizyonda: true, resim: "/images/galaksinin-koruyuculari-small.png" },
  { ad: "Film 9", vizyonda: true, resim: "/images/super-mario-small.png" },
  { ad: "Film 10", vizyonda: true, resim: "/images/askin-saati-1903-small.png" },
  { ad: "Film 11", vizyonda: true, resim: "/images/hava-muhalefeti_small.png" },
  { ad: "Film 12", vizyonda: true, resim: "/images/belle-ve-sebastian-cesur-dostum-small.png" }
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
  movieListContainer.innerHTML = ""; // Movie list containeri temizle

  // filmData dizisindeki vizyonda olan filmleri movieListContainer elementine ekle
  for (var i = 0; i < filmData.length; i++) {
    if (filmData[i].vizyonda) {
      var a = document.createElement("a");
      a.href = "#";

      var div = document.createElement("div");

      var img = document.createElement("img");
      img.src = filmData[i].resim;
      img.alt = filmData[i].ad;
      div.appendChild(img);

      var h2 = document.createElement("h2");
      h2.textContent = filmData[i].ad;
      div.appendChild(h2);

      a.appendChild(div);

      movieListContainer.appendChild(a);
    }
  }
}


function listeleGelecekFilmler() {
  movieListContainer.innerHTML = ""; // Movie list containeri temizle

  // filmData dizisindeki vizyonda olmayan filmleri movieListContainer elementine ekle
  for (var i = 0; i < filmData.length; i++) {
    if (!filmData[i].vizyonda) {
      var a = document.createElement("a");
      a.href = "#";

      var div = document.createElement("div");

      var img = document.createElement("img");
      img.src = filmData[i].resim;
      img.alt = filmData[i].ad;
      div.appendChild(img);

      var h2 = document.createElement("h2");
      h2.textContent = filmData[i].ad;
      div.appendChild(h2);

      a.appendChild(div);

      movieListContainer.appendChild(a);
    }
 

  }
}

const movieListWrapper = document.querySelector('.movie-list-wrapper');
const movieListContainer = document.querySelector('.movie-list-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const movieItemWidth = document.querySelector('.movie-item').offsetWidth;
const containerWidth = movieListWrapper.offsetWidth;

let scrollPosition = 0;

prevButton.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - containerWidth, 0);
  movieListContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

nextButton.addEventListener('click', () => {
  scrollPosition = Math.min(scrollPosition + containerWidth, movieListContainer.scrollWidth - containerWidth);
  movieListContainer.style.transform = `translateX(-${scrollPosition}px)`;
});







