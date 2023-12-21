// Dobijanje referenci na elemente
var otvoriModalBtn = document.getElementById("otvoriModalBtn");
var modalniProzor = document.getElementById("modalniProzor");

// Dodavanje event listener-a za otvaranje modalnog prozora
otvoriModalBtn.addEventListener("click", otvoriModal);

// Funkcija za otvaranje modalnog prozora
function otvoriModal() {
    modalniProzor.style.display = "block";
}

// Funkcija za zatvaranje modalnog prozora
function zatvoriModal() {
    modalniProzor.style.display = "none";
}

// Zatvori modalni prozor klikom van njega
window.addEventListener("click", function(event) {
    if (event.target === modalniProzor) {
        zatvoriModal();
    }
});

// Zatvori modalni prozor prilikom učitavanja stranice
window.addEventListener("load", function() {
    zatvoriModal();
});



var otvoriModalDrugiBtn = document.getElementById("otvoriModalDrugiBtn");
var modalniProzorDrugi = document.getElementById("modalniProzorDrugi");

// Dodavanje event listener-a za otvaranje modalnog prozora
otvoriModalDrugiBtn.addEventListener("click", otvoriModalDrugi);

// Funkcija za otvaranje modalnog prozora
function otvoriModalDrugi() {
    modalniProzorDrugi.style.display = "block";
}

// Funkcija za zatvaranje modalnog prozora
function zatvoriModalDrugi() {
    modalniProzorDrugi.style.display = "none";
}

// Zatvori modalni prozor klikom van njega
window.addEventListener("click", function(event) {
    if (event.target === modalniProzorDrugi) {
        zatvoriModalDrugi();
    }
});

// Zatvori modalni prozor prilikom učitavanja stranice
window.addEventListener("load", function() {
    zatvoriModalDrugi();
});



var otvoriModalTreciBtn = document.getElementById("otvoriModalTreciBtn");
var modalniProzorTreci = document.getElementById("modalniProzorTreci");

// Dodavanje event listener-a za otvaranje modalnog prozora
otvoriModalTreciBtn.addEventListener("click", otvoriModalTreci);

// Funkcija za otvaranje modalnog prozora
function otvoriModalTreci() {
    modalniProzorTreci.style.display = "block";
}

// Funkcija za zatvaranje modalnog prozora
function zatvoriModalTreci() {
    modalniProzorTreci.style.display = "none";
}

// Zatvori modalni prozor klikom van njega
window.addEventListener("click", function(event) {
    if (event.target === modalniProzorTreci) {
        zatvoriModalTreci();
    }
});

// Zatvori modalni prozor prilikom učitavanja stranice
window.addEventListener("load", function() {
    zatvoriModalTreci();
});