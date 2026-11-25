document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-panels]").forEach(buildPanels);
    var panel = document.querySelector(".slide-panel");
    var slider = createPanelSlider(panel);
    var refresh = bindArrows(function () { return slider; });
    slider.image.on("slideChange", function () { refresh(); });
    refresh();

    // the arrow to the Pranam page appears on the last slide only
    var pranamArrow = document.querySelector(".pranam-arrow");
    function updatePranamArrow() {
        if (pranamArrow) { pranamArrow.classList.toggle("is-visible", slider.image.isEnd); }
    }
    slider.image.on("slideChange", updatePranamArrow);
    updatePranamArrow();

    // entrance: content fades in right after load
    setTimeout(function () { document.getElementById("body").classList.remove("is-entering"); }, 80);
});
