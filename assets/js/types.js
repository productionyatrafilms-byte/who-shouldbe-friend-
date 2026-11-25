document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-panels]").forEach(buildPanels);
    var stage = document.querySelector(".stage");
    var panels = Array.prototype.slice.call(document.querySelectorAll(".slide-panel"));
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".type-tab"));
    var titles = Array.prototype.slice.call(document.querySelectorAll(".title-slide"));
    var sliders = panels.map(createPanelSlider);
    var current = 0;
    var refresh;

    function showTitle(key) {
        titles.forEach(function (el) { el.classList.toggle("is-active", el.getAttribute("data-title") === key); });
    }

    function setType(i) {
        current = i;
        panels.forEach(function (p, n) {
            p.classList.toggle("is-active", n === i);
            p.setAttribute("aria-hidden", n === i ? "false" : "true");
        });
        tabs.forEach(function (tb, n) { tb.classList.toggle("is-active", n === i); });
        sliders[i].image.update();
        sliders[i].text.update();
        showTitle(String(i));
        refresh();
    }

    function openType(i) {
        setType(i);
        stage.classList.add("is-detail");
    }

    function playFan() {
        stage.classList.add("is-gathered");
        setTimeout(function () {
            stage.classList.add("is-fanning");
            stage.classList.remove("is-gathered");
            setTimeout(function () { stage.classList.remove("is-fanning"); }, 1600);
        }, 60);
    }

    function showList(replay) {
        stage.classList.remove("is-detail");
        showTitle("list");
        if (replay === true) { playFan(); }
    }

    refresh = bindArrows(function () { return sliders[current]; });
    sliders.forEach(function (s) {
        s.image.on("slideChange", function () { refresh(); });
    });

    // clicking a card or pill: cards fan in and slide down with the pills, then the detail view opens
    document.querySelectorAll("[data-open-type]").forEach(function (el) {
        el.addEventListener("click", function () {
            var index = parseInt(el.getAttribute("data-open-type"), 10);
            var page = document.getElementById("body");
            if (page.classList.contains("is-leaving")) { return; }
            playSound(topicAudio);
            page.classList.add("is-leaving");
            setTimeout(function () {
                openType(index);
                // keep the exit pose until the list has finished fading, so the cards never snap back in view
                setTimeout(function () { page.classList.remove("is-leaving"); }, 700);
            }, 850);
        });
    });
    tabs.forEach(function (tb, n) {
        tb.addEventListener("click", function () { playSound(topicAudio); setType(n); });
    });
    document.querySelector(".nav-types").addEventListener("click", function (e) {
        if (stage.classList.contains("is-detail")) {
            e.preventDefault();
            showList(true);
        }
    });

    document.querySelector(".detail-back").addEventListener("click", function () { showList(true); });

    setType(0);
    showList();

    setTimeout(function () {
        stage.classList.add("is-fanning");
        stage.classList.remove("is-gathered");
        setTimeout(function () { stage.classList.remove("is-fanning"); }, 1600);
    }, 300);

    // exit animation (list view): cards fan in and slide down with the pills, then the next page opens
    var body = document.getElementById("body");
    document.querySelectorAll("a.back-btn, a.nav-pill").forEach(function (link) {
        link.addEventListener("click", function (e) {
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) { return; }
            var isPoint = link.classList.contains("nav-pill");
            if (isPoint) { playSound(topicAudio); }
            if (stage.classList.contains("is-detail") || link.classList.contains("nav-types")) {
                // no exit animation here: another point opens after the sound has had a moment to play
                if (isPoint && !link.classList.contains("nav-types")) {
                    e.preventDefault();
                    setTimeout(function () { window.location.href = link.href; }, 850);
                }
                return;
            }
            e.preventDefault();
            if (body.classList.contains("is-leaving")) { return; }
            body.classList.add("is-leaving");
            setTimeout(function () { window.location.href = link.href; }, 850);
        });
    });

    window.addEventListener("pageshow", function (e) {
        if (e.persisted) { body.classList.remove("is-leaving"); }
    });

    var deep = /^#type-([1-4])$/.exec(window.location.hash);
    if (deep) {
        openType(parseInt(deep[1], 10) - 1);
    }
});
