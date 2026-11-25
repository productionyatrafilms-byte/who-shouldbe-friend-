document.addEventListener("DOMContentLoaded", function () {
    var body = document.getElementById("body");
    var zone = document.querySelector(".hover-zone");
    var timer;

    function highFive() {
        clearTimeout(timer);
        body.classList.remove("is-intro");
    }

    // the joining-hands animation plays on every load; hovering the characters starts it early
    timer = setTimeout(highFive, 1200);
    zone.addEventListener("mouseenter", highFive);
    zone.addEventListener("touchstart", highFive, { passive: true });
    zone.addEventListener("click", highFive);

    // exit animation: characters slide right, title and menu slide left, then the page opens
    document.querySelectorAll(".menu-item, .menu-label").forEach(function (link) {
        link.addEventListener("click", function (e) {
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) { return; }
            e.preventDefault();
            if (body.classList.contains("is-leaving")) { return; }
            playSound(topicAudio);
            body.classList.add("is-leaving");
            setTimeout(function () { window.location.href = link.href; }, 850);
        });
    });

    // coming back with the browser's back button must not show the half-exited state
    window.addEventListener("pageshow", function (e) {
        if (e.persisted) { body.classList.remove("is-leaving"); }
    });
});
