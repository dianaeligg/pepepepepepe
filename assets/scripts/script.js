let imagePaths = [];
let howMany = 0;
if (navigator.connection.type === "wifi" || 
    navigator.connection.type === "ethernet" ){
    howMany = 19;
}
else{
    howMany = 7;
}

for (i = 1; i < howMany; i++){
    imagePaths.push(`./assets/images/${i}.gif`);
}

let backgrounds = [
    'rgb(223, 156, 141)',
    'rgb(241, 231, 210)',
    'rgb(0, 0, 0)',
    'rgb(191, 174, 134)',
    'rgb(62,80,94)',
    'rgb(255,255,255)'
]

Progress.init();
Progress.loadAudio("./assets/music/pepepepepepe.mp3");
Progress.loadImages(imagePaths);

let playing = false;
let body = document.body;
let show = document.getElementById("show");
let dance = document.getElementById("dance");
let bigButton = document.getElementById("bigButton");

bigButton.addEventListener("click", () => {
    click();
});

dance.addEventListener("click", () => {
    click();
});

function toggleMusic () {
    if (playing) Progress.song.pause();
    else Progress.song.play();
}

function click (){
    console.log("click")
    show.style["align-items"] = "center";
    if (playing){
        dance.style.display = "none";
        bigButton.style.display = "flex";
    }else{
        let ran = Math.floor(Math.random() * imagePaths.length);
        if (ran < 5){
            dance.style.width = "auto";
            dance.style.height = "auto";
            body.style.backgroundColor = backgrounds[ran];
            if (ran === 2){
                show.style["align-items"] = "flex-end";
            }
        }
        else{
            dance.style.width = "100%";
            dance.style.height = "100%";
        }
        dance.setAttribute("src", imagePaths[ran]);
        dance.style.display = "flex";
        bigButton.style.display = "none";
    }
    toggleMusic();
    playing = !playing;
}

