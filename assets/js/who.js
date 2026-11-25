// who page: text and image come from data.js; the content fades in right after load
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () { document.getElementById("body").classList.remove("is-entering"); }, 80);
});
