document.addEventListener("DOMContentLoaded", function() {
    const takeMeButton = document.getElementById("takeMeButton");
    const moreButton = document.getElementById("moreButton");
    const secondDiv = document.querySelector(".second");
    const thirdDiv = document.querySelector(".third");
    const firstDiv = document.getElementById("first");

    takeMeButton.addEventListener("click", function() {
        secondDiv.classList.add("show");
        firstDiv.classList.add("hidden");
    });

    moreButton.addEventListener("click", function() {
        thirdDiv.classList.add("show");
        firstDiv.classList.add("hidden");
        secondDiv.classList.add("hidden");
    });
});