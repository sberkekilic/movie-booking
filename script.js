// script.js dosyası

// Vizyondaki filmler
const vizyondakiFilmler = [
    { ad: 'Film 1', tur: 'Aksiyon' },
    { ad: 'Film 2', tur: 'Drama' },
    { ad: 'Film 3', tur: 'Komedi' },
    // Diğer filmler buraya eklenecek
];

// Gelecek filmler
const gelecekFilmler = [
    { ad: 'Film 4', tur: 'Bilim Kurgu' },
    { ad: 'Film 5', tur: 'Romantik' },
    { ad: 'Film 6', tur: 'Gerilim' },
    // Diğer filmler buraya eklenecek
];

const filmListesi = document.getElementById('filmListesi');
const gelecekFilmlerBtn = document.getElementById('gelecekFilmlerBtn');
const vizyondakiFilmlerBaslik = document.getElementById('vizyondakiFilmlerBaslik');

let basilmaDurumu = 0;

// Vizyondaki filmleri listele
function vizyondakiFilmleriListele() {
    vizyondakiFilmlerBaslik.textContent = 'Vizyondaki Filmler';
    filmListesi.innerHTML = '';
    for (let i = 0; i < vizyondakiFilmler.length; i++) {
        const film = vizyondakiFilmler[i];
        const filmLi = document.createElement('li');
        filmLi.textContent = `${film.ad} (${film.tur})`;
        filmListesi.appendChild(filmLi);
    }
    // Gelecek filmler butonunu güncelle
    gelecekFilmlerBtn.textContent = 'Gelecek Filmler';
    basilmaDurumu = 1;
}

// Gelecek filmleri listele
function gelecekFilmleriListele() {
    vizyondakiFilmlerBaslik.textContent = 'Gelecek Filmler';
    filmListesi.innerHTML = '';
    for (let i = 0; i < gelecekFilmler.length; i++) {
        const film = gelecekFilmler[i];
        const filmLi = document.createElement('li');
        filmLi.textContent = `${film.ad} (${film.tur})`;
        filmListesi.appendChild(filmLi);
    }
    // Gelecek filmler butonunu güncelle
    gelecekFilmlerBtn.textContent = 'Vizyondaki Filmler';
    basilmaDurumu = 0;
}

// Gelecek filmler butonuna tıklandığında duruma göre fonksiyonları çağır
gelecekFilmlerBtn.addEventListener('click', function() {
    if (basilmaDurumu === 0) {
        vizyondakiFilmleriListele();
    } else {
        gelecekFilmleriListele();
    }
});

// Sayfa yüklendiğinde vizyondaki filmleri listele
document.addEventListener('DOMContentLoaded', vizyondakiFilmleriListele);
