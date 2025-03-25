const avatarEl = document.getElementById("avatar");
const eyeIconEl = document.getElementById("img-eye");
const nameEl = document.getElementById("name");
const titleEl = document.getElementById("title");
const locationEl = document.getElementById("location");

eyeIconEl.addEventListener('mouseover', function() {
    avatarEl.src = "images/pfp.png";
    nameEl.textContent = "Dari Zard";
    titleEl.textContent = "Toothy Creature";
    locationEl.textContent = "The Sky";
});

eyeIconEl.addEventListener('mouseleave', function() {
    avatarEl.src = "images/me400.png";
    nameEl.textContent = "Jon Strode";
    titleEl.textContent = "Aspiring Developer";
    locationEl.textContent = "UT, USA";
});