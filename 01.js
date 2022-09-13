document.addEventListener("DOMContentLoaded", function () {

    const Target = document.querySelector('#ARTarget');

    Target.addEventListener("targetFound", event => {
        console.log("target found");
        window.location.href='./weatherchange.html';

    });

    Target.addEventListener("targetLost", event => {
        console.log("target lost");
    });

});