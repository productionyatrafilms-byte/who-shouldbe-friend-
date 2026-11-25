
// language change js
let currentLang = sessionStorage.getItem("lang");
if (!currentLang) {
    val("English");
} else {
    val(currentLang);
}

function val(selectedLang) {
    sessionStorage.setItem("lang", selectedLang);

    let English = document.getElementById("en");
    let Hindi = document.getElementById("hi");
    let Gujrati = document.getElementById("gu");

    if (selectedLang === "English") {

        document.getElementById("body");
        $(".english").show();
        $(".hindi, .gujrati").hide();

        English.checked = true;
        Hindi.checked = false;
        Gujrati.checked = false;
    }

    if (selectedLang === "Hindi") {
        document.getElementById("body");
        $(".hindi").show();
        $(".english, .gujrati").hide();
        English.checked = false;
        Hindi.checked = true;
        Gujrati.checked = false;
    }

    if (selectedLang === "Gujrati") {
        document.getElementById("body");
        $(".gujrati").show();
        $(".english, .hindi").hide();
        English.checked = false;
        Hindi.checked = false;
        Gujrati.checked = true;
    }

    fallbackEnglish(selectedLang);
}


// Hindi / Gujarati are empty until translations arrive: show English instead of blank text
function fallbackEnglish(lang) {
    var key = lang === "Hindi" ? ".hindi" : lang === "Gujrati" ? ".gujrati" : null;
    if (!key) return;
    $(".english").each(function () {
        // a text block (title, label, slide text) falls back to English only when that language has no text at all,
        // so a translation with fewer lines than English simply shows fewer lines
        var group = $(this).closest("[data-lines], [data-text], .slide-text");
        if (!group.length) { group = $(this).parent(); }
        var hasText = group.find(key).filter(function () { return $.trim($(this).text()) !== ""; }).length > 0;
        if (!hasText) { $(this).show(); }
    });
}

// vertical image + text slider shared by types.html and virtues.html
function createPanelSlider(panel) {
    var image = new Swiper(panel.querySelector(".image-swiper"), {
        direction: "vertical",
        slidesPerView: 1,
        speed: 600,
        grabCursor: true,
        resistance: true,
        resistanceRatio: 0.85,
        controller: {}
    });
    var text = new Swiper(panel.querySelector(".text-swiper"), {
        direction: "vertical",
        slidesPerView: 1,
        speed: 600,
        allowTouchMove: false,
        controller: {}
    });
    // swiper sound on every slide change (arrow buttons, keys and swipes)
    image.on("slideChange", function () { playSound(swiperAudio); });

    image.controller.control = text;
    text.controller.control = image;
    return { image: image, text: text };
}

function bindArrows(getSlider) {
    var up = document.querySelector(".arrow-up");
    var down = document.querySelector(".arrow-down");

    function refresh() {
        var s = getSlider();
        up.classList.toggle("is-disabled", s.image.isBeginning);
        down.classList.toggle("is-disabled", s.image.isEnd);
    }

    up.addEventListener("click", function () { getSlider().image.slidePrev(); });
    down.addEventListener("click", function () { getSlider().image.slideNext(); });
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp") { getSlider().image.slidePrev(); }
        if (e.key === "ArrowDown") { getSlider().image.slideNext(); }
    });
    return refresh;
}


// ---------------------------------------------------------------------------
// data.js renderer: every visible text comes from SITE_DATA (en / hi / gj)
// ---------------------------------------------------------------------------
function dataGet(path) {
    return path.split(".").reduce(function (obj, key) { return obj == null ? obj : obj[key]; }, SITE_DATA);
}

function dataEsc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// string with \n or array of lines -> html with <br>
function dataJoin(v) {
    if (Array.isArray(v)) { return v.map(dataEsc).join("<br>"); }
    return dataEsc(v).replace(/\n/g, "<br>");
}

function dataTrio(en, hi, gj, accent) {
    accent = accent || {};
    function cls(name, key) { return name + (accent[key] ? " " + accent[key] : ""); }
    return '<span class="' + cls("english", "en") + '">' + en + '</span><span class="' + cls("hindi", "hi") + '">' + hi +
        '</span><span class="' + cls("gujrati", "gj") + '">' + gj + "</span>";
}

function dataText(obj) {
    return dataTrio(dataJoin(obj.en), dataJoin(obj.hi), dataJoin(obj.gj));
}

// text may be a string (a backslash-n inside it is a line break) or an array of lines
function dataSplit(v) {
    if (Array.isArray(v)) { return v; }
    return v == null || v === "" ? [] : String(v).split(String.fromCharCode(10));
}

// last word of a line wrapped in the accent class (the yellow word of a title)
function dataAccentLast(text, accentClass) {
    text = String(text).trim();
    var cut = text.lastIndexOf(" ");
    return dataEsc(text.slice(0, cut + 1)) + '<span class="' + accentClass + '">' + dataEsc(text.slice(cut + 1)) + "</span>";
}

// one block per visual line. Each language may have a different number of lines: a language with fewer lines
// leaves empty (zero height) blocks, so its text stays vertically centred in the container.
// With an accent class, the LAST WORD of the last non-empty line of each language gets it.
function dataLines(obj, lineClass, accentClass) {
    var langs = ["en", "hi", "gj"];
    var lines = {};
    var count = 0;
    var last = {};
    langs.forEach(function (l) {
        lines[l] = dataSplit(obj[l]);
        count = Math.max(count, lines[l].length);
        last[l] = -1;
        lines[l].forEach(function (text, i) { if (text) { last[l] = i; } });
    });
    var out = "";
    for (var i = 0; i < count; i++) {
        var cell = langs.map(function (l) {
            var text = lines[l][i] || "";
            return accentClass && last[l] === i ? dataAccentLast(text, accentClass) : dataEsc(text);
        });
        out += '<span class="' + lineClass + '">' + dataTrio(cell[0], cell[1], cell[2]) + "</span>";
    }
    return out;
}

function renderData(root) {
    root = root || document;
    root.querySelectorAll("[data-lines]").forEach(function (el) {
        var obj = dataGet(el.getAttribute("data-lines"));
        if (obj) { el.innerHTML = dataLines(obj, el.getAttribute("data-line-class") || "", el.getAttribute("data-accent")); }
    });
    root.querySelectorAll("[data-text]").forEach(function (el) {
        var obj = dataGet(el.getAttribute("data-text"));
        if (obj) { el.innerHTML = dataText(obj); }
    });
    root.querySelectorAll("[data-image]").forEach(function (el) {
        var path = dataGet(el.getAttribute("data-image"));
        if (path) { el.setAttribute("src", "./assets/images/" + path); }
    });
}

// wide photos fill the box by width x 126%; images already shaped like the box are shown at 100%
function fitSlideImage(img) {
    function mark() {
        if (img.naturalWidth && img.naturalWidth / img.naturalHeight < 1.6) { img.classList.add("slide-image-fit"); }
    }
    if (img.complete) { mark(); } else { img.addEventListener("load", mark); }
}

// builds the slider panels of a page from SITE_DATA ("types" = one panel per type, "virtues" = one panel)
function buildPanels(container) {
    var key = container.getAttribute("data-panels");
    var panels = [];
    if (key === "types") {
        SITE_DATA.types.items.forEach(function (item) {
            panels.push({ label: item.label.en, slides: item.slides, center: false });
        });
    } else {
        panels.push({ label: dataSplit(SITE_DATA.virtues.title.en).join(" "), slides: SITE_DATA.virtues.slides, center: true });
    }

    var html = "";
    panels.forEach(function (p, n) {
        var slides = p.slides.filter(function (s) { return s.image; });
        var images = "";
        var texts = "";
        slides.forEach(function (s) {
            images += '<div class="swiper-slide"><img class="slide-image" src="./assets/images/' + s.image + '" alt=""></div>';
            texts += '<div class="swiper-slide"><p class="slide-text' + (p.center ? " slide-text-center" : "") + '">' + dataText(s.text) + "</p></div>";
        });
        html += '<div class="slide-panel' + (n === 0 ? " is-active" : "") + '" aria-label="' + dataEsc(p.label) + '">' +
            '<div class="slide-box"><div class="swiper image-swiper"><div class="swiper-wrapper">' + images + "</div></div></div>" +
            '<div class="text-box"><div class="swiper text-swiper"><div class="swiper-wrapper">' + texts + "</div></div></div></div>";
    });
    container.innerHTML = html;
    container.querySelectorAll(".slide-image").forEach(fitSlideImage);
    val(sessionStorage.getItem("lang") || "English");
}

renderData(document);
val(sessionStorage.getItem("lang") || "English");


// ---------------------------------------------------------------------------
// Sounds (same set and wiring as the Aparigrah project)
//   swiper.mp3  slide change      pop.mp3    home / back buttons      topic.mp3  points (cards, pills, tabs, nav)
//   Eng / Hin / Guj .mpeg  language toggle      pranam.mp3  plays on the Pranam page (pranam.js)
// ---------------------------------------------------------------------------

// One Audio object per sound, restarted on every play.
function playSound(audio) {
    try {
        audio.currentTime = 0;
        var attempt = audio.play();
        if (attempt !== undefined) {
            attempt.catch(function () { });
        }
    } catch (error) { }
}

// Leaving the page on the click would cut the sound off, so navigation waits a moment.
function playSoundThenNavigate(audio, href, delayMs) {
    playSound(audio);
    setTimeout(function () {
        window.location.href = href;
    }, delayMs || 150);
}

var topicAudio = new Audio("./assets/audio/topic.mp3");
var popAudio = new Audio("./assets/audio/pop.mp3");
var swiperAudio = new Audio("./assets/audio/swiper.mp3");

// Language toggle: only on a real click of E / H / G.
var langAudio = {
    English: new Audio("./assets/audio/Eng.mpeg"),
    Hindi: new Audio("./assets/audio/Hin.mpeg"),
    Gujrati: new Audio("./assets/audio/Guj.mpeg")
};
document.querySelectorAll('#language input[type="radio"]').forEach(function (input) {
    input.addEventListener("click", function () {
        playSound(langAudio[input.value]);
    });
});

// A page that runs its own exit animation (home, types) sets data-exit-handled on <body>:
// there the sound only plays and the page's own script does the leaving.
function pageHandlesExit() {
    return document.body.hasAttribute("data-exit-handled");
}

// Home and back buttons: pop, then follow the link.
document.querySelectorAll(".back-btn, .back-button, .home-pill, .who-back, .detail-back").forEach(function (button) {
    button.addEventListener("click", function (event) {
        var href = button.getAttribute("href");
        if (href && !pageHandlesExit() && !(event.ctrlKey || event.metaKey || event.shiftKey)) {
            event.preventDefault();
            playSoundThenNavigate(popAudio, href);
        } else {
            playSound(popAudio);
        }
    });
});

// Bottom navigation pills (the points) on pages without an exit animation: topic sound, then open the point.
document.querySelectorAll(".nav-pill").forEach(function (pill) {
    pill.addEventListener("click", function (event) {
        if (pageHandlesExit() || event.ctrlKey || event.metaKey || event.shiftKey) { return; }
        var href = pill.getAttribute("href");
        if (href) {
            event.preventDefault();
            playSoundThenNavigate(topicAudio, href, 850);
        }
    });
});
