// DOM elementlerini seçme
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");
var vizyondakiFilmlerBtn = document.getElementById("vizyondakiFilmlerBtn");
var gelecekFilmlerBtn = document.getElementById("gelecekFilmlerBtn");
var filmListesi = document.getElementById("filmListesi");
var filmData;
// Sayfa yüklendiğinde vizyondaki filmler butonu aktif olsun ve vizyondaki filmleri listele
window.onload = function () {
  fetch("filmler.json")
    .then(response => response.json())
    .then(data => {
      filmData = data.filmler;
      vizyondakiFilmlerBtn.classList.add("aktif"); // Vizyondaki filmler butonunu aktif yap
      vizyondakiFilmlerBtn.style.backgroundColor = "#ff0000"; // Set the background color to red
      vizyondakiFilmlerBtn.style.color = "#ffffff"; // Set the text color to white
      listeleVizyondakiFilmler(); // Vizyondaki filmleri listele
      resetImage(); // Pass the event as a parameter
      renderMovieList();
    })
    .catch(error => {
      console.error("Error fetching film data:", error);
    });
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
  filmData.forEach(function (film) {
    if (!film.vizyonda) {
      var a = document.createElement("a");
      var div = document.createElement("div");
      var img = document.createElement("img");
      img.src = film.resim;
      img.alt = film.ad;
      div.appendChild(img);
      var h2 = document.createElement("h2");
      h2.textContent = film.ad;
      div.appendChild(h2);
      a.appendChild(div);
      filmListesi.appendChild(a);
      div.addEventListener("mouseover", darkenImage);
      div.addEventListener("mouseout", resetImage);
    }
  });
}
// Vizyondaki filmleri listeleme fonksiyonu
function listeleVizyondakiFilmler() {
  filmListesi.innerHTML = ""; // Film listesini temizle
  // filmData dizisindeki vizyonda olan filmleri filmListesi elementine ekle
  filmData.forEach(function (film) {
    if (film.vizyonda) {
      var a = document.createElement("a");
      var div = document.createElement("div");
      var img = document.createElement("img");
      img.src = film.resim;
      img.alt = film.ad;
      div.appendChild(img);
      var h2 = document.createElement("h2");
      h2.textContent = film.ad;
      div.appendChild(h2);
      a.appendChild(div);
      filmListesi.appendChild(a);
      div.addEventListener("mouseover", darkenImage);
      div.addEventListener("mouseout", resetImage);
    }
  });
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
  filmListesi.innerHTML = ""; // Clear the filmListesi element
  moviesToRender.forEach(movie => {
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image-card");

    let img = document.createElement("img");
    img.src = movie.resim;
    img.alt = movie.ad;
    img.style.width = "100%";

    let movieName = document.createElement("p");
    movieName.classList.add("movie-name");
    movieName.textContent = movie.ad;

    let rollOverDiv = document.createElement("div");
    rollOverDiv.classList.add("roll-over");

    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button");

    let button = document.createElement("a");
    button.classList.add("btn", "btn-reverse");
    button.textContent = "Bilet Al";
    
    let url = `/pages/buy-ticket.html?movie_name=${encodeURIComponent(movie.ad)}&movie_eng_name=${encodeURIComponent(movie.ing_ad)}&movie_image=${encodeURIComponent(movie.resim)}&movie_release=${encodeURIComponent(movie.release)}&movie_desc=${encodeURIComponent(movie.desc)}&movie_director=${encodeURIComponent(movie.director)}&movie_cast=${encodeURIComponent(movie.cast)}&movie_time=${encodeURIComponent(movie.time)}&movie_type=${encodeURIComponent(movie.type)}&vizyonda=${encodeURIComponent(movie.vizyonda)}`;
    
    button.setAttribute("href", url);
    button.addEventListener("click", function() {
      window.location.href = url;
    });

    buttonDiv.appendChild(button);
    rollOverDiv.appendChild(buttonDiv);

    imageDiv.appendChild(img);
    imageDiv.appendChild(movieName);
    imageDiv.appendChild(rollOverDiv);

    filmListesi.appendChild(imageDiv);

    imageDiv.addEventListener("mouseover", function(event) {
      darkenImage(event);
    });
    imageDiv.addEventListener("mouseout", function(event) {
      resetImage(event);
    });
    
  });
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
