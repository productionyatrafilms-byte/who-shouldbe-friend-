// Plays the Pranam sound once when the page opens. Browsers can refuse sound
// before the visitor has touched the page, so if it is blocked it starts on
// the first click, key press or touch instead.
(function () {
    var pranamSound = new Audio("./assets/audio/pranam.mp3");
    pranamSound.preload = "auto";

    var hasPlayed = false;

    function playPranamOnce() {
        if (hasPlayed) {
            return;
        }
        hasPlayed = true;

        var playPromise = pranamSound.play();
        if (playPromise !== undefined) {
            playPromise.catch(function () {
                hasPlayed = false;
                var retry = function () {
                    document.removeEventListener("click", retry);
                    document.removeEventListener("keydown", retry);
                    document.removeEventListener("touchstart", retry);
                    playPranamOnce();
                };
                document.addEventListener("click", retry, { once: true });
                document.addEventListener("keydown", retry, { once: true });
                document.addEventListener("touchstart", retry, { once: true });
            });
        }
    }

    playPranamOnce();
})();
