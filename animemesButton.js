
var audio = new Array (27);

for (i = 0; i < 27; i++){
  audio[i] = new Audio();
}

audio[0].src = "Audio/animemes/GodAnime.mp3";
audio[1].src = "Audio/animemes/90s.mp3";
audio[2].src = "Audio/animemes/9000.mp3";
audio[3].src = "Audio/animemes/AOT.mp3";
audio[4].src = "Audio/animemes/Ara.mp3";
audio[5].src = "Audio/animemes/Bakurestu.mp3";
audio[6].src = "Audio/animemes/BANG.mp3";
audio[7].src = "Audio/animemes/BlendS.mp3";
audio[8].src = "Audio/animemes/CHIKA.mp3";
audio[9].src = "Audio/animemes/DEJA VU.mp3";
audio[10].src = "Audio/animemes/EXPLOSION.mp3";
audio[11].src = "Audio/animemes/Gender Equality.mp3";
audio[12].src = "Audio/animemes/GO BEYOND.mp3";
audio[13].src = "Audio/animemes/Longest Name.mp3";
audio[14].src = "Audio/animemes/Nichijou AHH.mp3";
audio[15].src = "Audio/animemes/NICO.mp3";
audio[16].src = "Audio/animemes/OMAE.mp3";
audio[17].src = "Audio/animemes/ONE PUNCH.mp3";
audio[18].src = "Audio/animemes/P5.mp3";
audio[19].src = "Audio/animemes/PLATINUM DISCO.mp3";
audio[20].src = "Audio/animemes/SAO.mp3";
audio[21].src = "Audio/animemes/SASAGEYO.mp3";
audio[22].src = "Audio/animemes/SeNo.mp3";
audio[23].src = "Audio/animemes/tadaima.mp3";
audio[24].src = "Audio/animemes/Unravel.mp3";
audio[25].src = "Audio/animemes/WOW.mp3";
audio[26].src = "Audio/animemes/YOU ARE MY FRIEND.mp3";


function PlaySound(x) {
  audio[x].play();
}