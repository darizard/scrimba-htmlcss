let light = true;

// Pull elements from DOM for simple property overwrites
const avatarEl = document.getElementById("avatar");
const eyeIconEl = document.getElementById("img-eye");
const nameEl = document.getElementById("name");
const contactEl = document.getElementById("contact");

// Set up for <ul> contents replacement
const normalList = document.getElementById("info-list");
const eyeList = document.createElement("ul");
const eyeStrs = ["40 years old", "Friend to many birds", "Hobbyist 3d artist", "Replaces HTML elements"];
for(var str of eyeStrs) eyeList.appendChild(createLI(str));

// Set up event listeners, and change mouseover behavior when eye icon is clicked
eyeIconEl.addEventListener("mouseover", darkMode);
eyeIconEl.addEventListener("mouseleave", lightMode);
eyeIconEl.addEventListener("click", function() {
    if(light) {
        eyeIconEl.src = "images/eye-icon-50px.png";
        eyeIconEl.removeEventListener("mouseover",darkMode);
        eyeIconEl.removeEventListener("mouseleave",lightMode);
        light = false;
    } else {
        eyeIconEl.src = "images/eye-icon-closed-50px.png";
        eyeIconEl.addEventListener("mouseover",darkMode);
        eyeIconEl.addEventListener("mouseleave",lightMode);
        light = true;
    }
});

// Create an <li> element with the text passed in as argument.
// Helper for populating the replacement list.
function createLI(text) {
    let li = document.createElement("li");
    li.textContent = text;
    return li;
}

// Change identity to Dari
function darkMode() {
    avatarEl.src = "images/pfp.png";
    nameEl.textContent = "Dari";
    document.getElementById("main-content").replaceChild(eyeList, normalList);
    contactEl.innerHTML = "<a id=\"contact-link\" href=\"https://discord.gg\" target=\"_blank\">Discord</a> as <span id=\"username\">darizard</span>.";
}

// Change identity to Jon
function lightMode() {
    avatarEl.src = "images/me400.png";
    nameEl.textContent = "Jon";
    document.getElementById("main-content").replaceChild(normalList, eyeList);
    contactEl.innerHTML = "<a id=\"contact-link\" href=\"https://www.linkedin.com/in/jonathan-strode-803aa3a2/\" target=\"_blank\">LinkedIn</a>."
}

// ***********All of the below code was provided by Scrimba.com***********

// Challenge 2:
// Replace the arguments below according to your preference.

// space, scary, military, romantic, cowboy, fantasy, superhero
favouriteMovieGenre("fantasy")

// watermelon, tomato, banana, orange, avocado, blueberry
favouriteFruit("orange")

// light, dark
favouriteMode("dark")

// sharp, soft, round
favouriteEdgeStyle("soft")



////////////////////////////////////
// IGONE THE CODE BELOW THIS LINE //
////////////////////////////////////

function setProp(prop, value) {
    document.documentElement.style.setProperty(prop, value)
}

function favouriteEdgeStyle(style) {
    setProp("--image", "var(--" + style + ")");
}

function favouriteMovieGenre(font) {
    if (font) {
        setProp("--font", "var(--" + font + ")");    
    }
}

function favouriteMode(mode) {
    if (mode === "light" || !mode) {
        setProp('--background', "var(--light)");
        setProp('--text', "var(--dark)");
    } else if (mode === "dark") {
        setProp('--background', "var(--dark)");
        setProp('--text', "var(--light)");
    }
}

function favouriteFruit(theme) {
    if (theme === "pastel") {
        setProp('--light', "#f2f6c3")
        setProp('--dark', "#68c4af")
    } else if (theme === "muted") {
        setProp('--light', "#4c5b64")
        setProp('--dark', "#45241c")
    } else if (theme === "love") {
        setProp('--light', "#f06836")
        setProp('--dark', "#ba0001")
    } else if (theme === "sky") {
        setProp('--light', "#99ccff")
        setProp('--dark', "#3366ff")
    } else if (theme === "forrest") {
        setProp('--light', "#91B247")
        setProp('--dark', "#597C2B")
    }  else if (theme === "shiny") {
        setProp('--light', "#2e9afe")
        setProp('--dark', "#02197c")
    } else if (theme === "banana") {
        setProp('--light', "#fbec5d")
        setProp('--dark', "#6b3e26")
    } else if (theme === "watermelon") {
        setProp('--light', "#75b855")
        setProp('--dark', "#ad3838")
    } else if (theme === "tomato") {
        setProp('--light', "#d62e2e")
        setProp('--dark', "#600000")
    } else if (theme === "avocado") {
        setProp('--light', "#6b8c21")
        setProp('--dark', "#704012")
    } else if (theme === "orange") {
        setProp('--light', "#ffca16")
        setProp('--dark', "#f97300")
    } else if (theme === "blueberry") {
        setProp('--light', "#41a8f9")
        setProp('--dark', "#064490")
    } else  {
        setProp('--light', "#f5f5f5")
        setProp('--dark', "#222222")
    } 
}


