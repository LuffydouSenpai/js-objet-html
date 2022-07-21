const maDiv = document.getElementById("maDiv");
console.log(maDiv);
console.dir(maDiv);
// modifier le style css d'un element HTML
maDiv.style.backgroundColor = "green";
maDiv.style.color = "red";
// utilisation des events
maDiv.addEventListener(
    "contextmenu",
    function (event) {
        //click event
        console.dir(event);
        const mp3 = new Audio("./assets/audio/Tsukimichi op.mp3");
        /* mp3.play(); */
        maDiv.style.backgroundColor = "pink";
    }
);
document.body.addEventListener(
    "keyup",
    function (e) {
        console.dir(e);
        if (e.code === "KeyF"){
            alert("Votre ordinateur est infecté envoyer moi 50£ par mandat postal!!!!!!");
        }
    }
);