// Film verilerini içeren bir dizi
var filmData = [
  { ad: "Film 1", vizyonda: true, resim: "/images/jw4_small.jpg" },
  { ad: "Film 2", vizyonda: false, resim: "/images/galaksinin-koruyuculari-small.png" },
  { ad: "Film 3", vizyonda: true, resim: "/images/super-mario-small.png" },
  { ad: "Film 4", vizyonda: false, resim: "/images/askin-saati-1903-small.png" },
  { ad: "Film 5", vizyonda: true, resim: "/images/hava-muhalefeti_small.png" },
  { ad: "Film 6", vizyonda: false, resim: "/images/belle-ve-sebastian-cesur-dostum-small.png" },
  { ad: "Film 7", vizyonda: true, resim: "/images/jw4_small.jpg" },
  { ad: "Film 8", vizyonda: false, resim: "/images/galaksinin-koruyuculari-small.png" },
  { ad: "Film 9", vizyonda: true, resim: "/images/super-mario-small.png" },
  { ad: "Film 10", vizyonda: false, resim: "/images/askin-saati-1903-small.png" },
  { ad: "Film 11", vizyonda: true, resim: "/images/hava-muhalefeti_small.png" },
  { ad: "Film 12", vizyonda: false, resim: "/images/belle-ve-sebastian-cesur-dostum-small.png" }
];
// DOM elementlerini seçme
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");
var vizyondakiFilmlerBtn = document.getElementById("vizyondakiFilmlerBtn");
var gelecekFilmlerBtn = document.getElementById("gelecekFilmlerBtn");
var filmListesi = document.getElementById("filmListesi");
// Sayfa yüklendiğinde vizyondaki filmler butonu aktif olsun ve vizyondaki filmleri listele
window.onload = function () {
  vizyondakiFilmlerBtn.classList.add("aktif"); // Vizyondaki filmler butonunu aktif yap
  vizyondakiFilmlerBtn.style.backgroundColor = "#ff0000"; // Set the background color to red
  vizyondakiFilmlerBtn.style.color = "#ffffff"; // Set the text color to white
  listeleVizyondakiFilmler(); // Vizyondaki filmleri listele
  resetImage(); // Pass the event as a parameter
  renderMovieList();
};
// Vizyondaki filmler butonuna tıklandığında
vizyondakiFilmlerBtn.addEventListener("click", function () {
  if (!vizyondakiFilmlerBtn.classList.contains("aktif")) {
    vizyondakiFilmlerBtn.classList.add("aktif"); // Vizyondaki filmler butonunu aktif yap
    vizyondakiFilmlerBtn.style.backgroundColor = "#ff0000"; // Set the background color to red
    vizyondakiFilmlerBtn.style.color = "#ffffff"; // Set the text color to white
    gelecekFilmlerBtn.classList.remove("aktif"); // Gelecek filmler butonunu pasif yap
    gelecekFilmlerBtn.style.backgroundColor = ""; // Remove the background color
    gelecekFilmlerBtn.style.color = ""; // Remove the text color
    listeleVizyondakiFilmler(); // Vizyondaki filmleri listele
    resetImage(); // Pass the event as a parameter
    renderMovieList();
  }
});
// Gelecek filmler butonuna tıklandığında
gelecekFilmlerBtn.addEventListener("click", function () {
  if (!gelecekFilmlerBtn.classList.contains("aktif")) {
    gelecekFilmlerBtn.classList.add("aktif"); // Gelecek filmler butonunu aktif yap
    gelecekFilmlerBtn.style.backgroundColor = "#ff0000"; // Set the background color to red
    gelecekFilmlerBtn.style.color = "#ffffff"; // Set the text color to white
    vizyondakiFilmlerBtn.classList.remove("aktif"); // Vizyondaki filmler butonunu pasif yap
    vizyondakiFilmlerBtn.style.backgroundColor = ""; // Remove the background color
    vizyondakiFilmlerBtn.style.color = ""; // Remove the text color
    listeleGelecekFilmler(); // Gelecek filmleri listele
    resetImage(); // Pass the event as a parameter
    renderMovieList();
  }
});
// Gelecek filmleri listeleme fonksiyonu
function listeleGelecekFilmler() {
  filmListesi.innerHTML = ""; // Film listesini temizle
  // filmData dizisindeki vizyonda olmayan filmleri filmListesi elementine ekle
  for (var i = 0; i < filmData.length; i++) {
    if (!filmData[i].vizyonda) {
      var a = document.createElement("a");
      var div = document.createElement("div");
      var img = document.createElement("img");
      img.src = filmData[i].resim;
      img.alt = filmData[i].ad;
      div.appendChild(img);
      var h2 = document.createElement("h2");
      h2.textContent = filmData[i].ad;
      div.appendChild(h2);
      a.appendChild(div);
      filmListesi.appendChild(a);
      div.addEventListener("mouseover", darkenImage);
      div.addEventListener("mouseout", resetImage);
    }
  }
}
// Vizyondaki filmleri listeleme fonksiyonu
function listeleVizyondakiFilmler() {
  filmListesi.innerHTML = ""; // Film listesini temizle
  // filmData dizisindeki vizyonda olan filmleri filmListesi elementine ekle
  for (var i = 0; i < filmData.length; i++) {
    if (filmData[i].vizyonda) {
      var a = document.createElement("a");
      var div = document.createElement("div");
      var img = document.createElement("img");
      img.src = filmData[i].resim;
      img.alt = filmData[i].ad;
      div.appendChild(img);
      var h2 = document.createElement("h2");
      h2.textContent = filmData[i].ad;
      div.appendChild(h2);
      a.appendChild(div);
      filmListesi.appendChild(a);
      div.addEventListener("mouseover", darkenImage);
      div.addEventListener("mouseout", resetImage);
    }
  }
}
const movieListWrapper = document.querySelector(".movie-list-wrapper");
const movieListContainer = document.querySelector(".movie-list-container");
const visibleMovies = 7.5;
let currentIndexVizyondaki = 0;
let currentIndexGelecek = 0;


// Next Button Event Listener
nextButton.addEventListener("click", handleNextButton);

// Prev Button Event Listener
prevButton.addEventListener("click", handlePrevButton);

function handlePrevButton(event) {
  movieListContainer.scrollLeft -= 220;
}

function handleNextButton(event) {
  movieListContainer.scrollLeft += 220;
}


function darkenImage(event) {
  const container = event.currentTarget;
  const img = container.querySelector("img");
  img.style.filter = "brightness(70%)";
  const rollOverDiv = container.querySelector(".roll-over");
  if (rollOverDiv) {
    rollOverDiv.style.display = "block";
  }
}

function resetImage(event) {
  const container = event ? event.currentTarget : null;
  if (container) {
    const img = container.querySelector("img");
    img.style.filter = "none";
    const rollOverDiv = container.querySelector(".roll-over");
    if (rollOverDiv) {
      rollOverDiv.style.display = "none";
    }
  }
}

function renderMovieList() {
  let moviesToRender = getMoviesToRender();
  filmListesi.innerHTML = ""; // filmListesi elementini temizle
  moviesToRender.forEach(movie => {
    // Resim divini oluştur
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    // Resmi oluştur
    let img = document.createElement("img");
    img.src = movie.resim;
    img.alt = movie.ad;
    // Create the movie name (ad) element
    let movieName = document.createElement("p");
    movieName.classList.add("movie-name");
    movieName.textContent = movie.ad;
    // Roll-over divini oluştur
    let rollOverDiv = document.createElement("div");
    rollOverDiv.classList.add("roll-over");
    // Buton divini oluştur
    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button");
    // Butonu oluştur
    let button = document.createElement("a");
    button.classList.add("btn", "btn-reverse");
    button.href = "login.html";
    button.textContent = "Bilet Al";
    // Buton divine butonu ekle
    buttonDiv.appendChild(button);
    // Roll-over divine buton divini ekle
    rollOverDiv.appendChild(buttonDiv);
    // Resim divine resmi ve roll-over divini ekle
    imageDiv.appendChild(img);
    imageDiv.appendChild(movieName);
    imageDiv.appendChild(rollOverDiv);
    // filmListesi elementine resim divini ekle
    filmListesi.appendChild(imageDiv);
    // Event dinleyicilerini ekle
    imageDiv.addEventListener("mouseover", function(event) {
      darkenImage(event);
    });
    imageDiv.addEventListener("mouseout", function(event) {
      resetImage(event);
    });
  });
  // Sayfa ilk açıldığında bilet al butonunu göstermek için resetImage fonksiyonunu çağır
  resetImage();
}

function getMoviesToRender() {
  let moviesToRender = [];
  if (vizyondakiFilmlerBtn.classList.contains("aktif")) {
    const visibleVizyondakiMovies = filmData.filter(movie => movie.vizyonda);
    for (let i = 0; i < visibleMovies; i++) {
      let index = (currentIndexVizyondaki + i) % visibleVizyondakiMovies.length;
      moviesToRender.push(visibleVizyondakiMovies[index]);
    }
  } else if (gelecekFilmlerBtn.classList.contains("aktif")) {
    const visibleGelecekMovies = filmData.filter(movie => !movie.vizyonda);
    for (let i = 0; i < visibleMovies; i++) {
      let index = (currentIndexGelecek + i) % visibleGelecekMovies.length;
      moviesToRender.push(visibleGelecekMovies[index]);
    }
  }
  return moviesToRender;
}

function handlePrevButton(event) {
  if (vizyondakiFilmlerBtn.classList.contains("aktif")) {
    currentIndexVizyondaki -= 1;
    const visibleVizyondakiMovies = filmData.filter(movie => movie.vizyonda);
    if (currentIndexVizyondaki < 0) {
      currentIndexVizyondaki = visibleVizyondakiMovies.length - 1;
    }
  } else if (gelecekFilmlerBtn.classList.contains("aktif")) {
    currentIndexGelecek -= 1;
    const visibleGelecekMovies = filmData.filter(movie => !movie.vizyonda);
    if (currentIndexGelecek < 0) {
      currentIndexGelecek = visibleGelecekMovies.length - 1;
    }
  }
  resetImage();
  renderMovieList();
}

function handleNextButton(event) {
  if (vizyondakiFilmlerBtn.classList.contains("aktif")) {
    currentIndexVizyondaki += 1;
    const visibleVizyondakiMovies = filmData.filter(movie => movie.vizyonda);
    if (currentIndexVizyondaki >= visibleVizyondakiMovies.length) {
      currentIndexVizyondaki = 0;
    }
  } else if (gelecekFilmlerBtn.classList.contains("aktif")) {
    currentIndexGelecek += 1;
    const visibleGelecekMovies = filmData.filter(movie => !movie.vizyonda);
    if (currentIndexGelecek >= visibleGelecekMovies.length) {
      currentIndexGelecek = 0;
    }
  }
  resetImage();
  renderMovieList();
}
