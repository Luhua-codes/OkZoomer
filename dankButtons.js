var audio = new Array(21);

for (i = 0; i < 25; i++) {
  audio[i] = new Audio();
}

audio[0].src = "Audio/dank/a knife.mp3";
audio[1].src = "Audio/dank/am or fm.mp3";
audio[2].src = "Audio/dank/Burger King Foot lettuce.mp3";
audio[3].src = "Audio/dank/creeper aw man.mp3";
audio[4].src = "Audio/dank/crunchyroll take me home.mp3";
audio[5].src = "Audio/dank/discustang.mp3";
audio[6].src = "Audio/dank/do u remember.mp3";
audio[7].src = "Audio/dank/fuck bbygirl dont kill urself.mp3";
audio[8].src = "Audio/dank/heya.mp3";
audio[9].src =
  "Audio/dank/I love you bitch I ain't never gonna stop loving you bitch vine.mp3";
audio[10].src = "Audio/dank/i want it that way.mp3";
audio[11].src = "Audio/dank/its high noon.mp3";
audio[12].src = "Audio/dank/kanye west fingers.mp3";
audio[13].src = "Audio/dank/megalovania.mp3";
audio[14].src = "Audio/dank/mii.mp3";
audio[15].src = "Audio/dank/moto moto.mp3";
audio[16].src = "Audio/dank/soup.mp3";
audio[17].src = "Audio/dank/stonks.mp3";
audio[18].src = "Audio/dank/u touch my tralalala.mp3";
audio[19].src = "Audio/dank/we are number 1.mp3";
audio[20].src = "Audio/dank/why the fuck u lyin.mp3";

function PlaySound(x) {
  audio[x].play();
}
