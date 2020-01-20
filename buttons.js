/*God and anime*/
var audio = "Audio/animemes/GodAnime.mp3";
var GodAnime = new Audio();
GodAnime.src = "Audio/animemes/GodAnime.mp3";

var audio = new Array(27);
for (i = 0; i < 27; i++) {
  audio[i] = new Audio();
}

audio[0].src = "Audio/animemes/GodAnime.mp3";
audio[1].src = "Audio/animemes/AOT.mp3";

function PlaySound(x) {
  audio[x].play();
}
