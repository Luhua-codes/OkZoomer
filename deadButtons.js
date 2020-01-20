var audio = new Array(23);

for (i = 0; i < 25; i++) {
  audio[i] = new Audio();
}

audio[0].src = "Audio/dead/AND THEY DONT STOP COMING.mp3";
audio[1].src = "Audio/dead/bitch lasagna.mp3";
audio[2].src = "Audio/dead/cathys house.mp3";
audio[3].src = "Audio/dead/darude sandstorm.mp3";
audio[4].src = "Audio/dead/i am inevitable.mp3";
audio[5].src = "Audio/dead/i play pokemon go every day.mp3";
audio[6].src = "Audio/dead/jesus christ is my nga.mp3";
audio[7].src = "Audio/dead/john cena.mp3";
audio[8].src = "Audio/dead/kahoot.mp3";
audio[9].src = "Audio/dead/legs.mp3";
audio[10].src = "Audio/dead/look at this.mp3";
audio[11].src = "Audio/dead/numa numa.mp3";
audio[12].src = "Audio/dead/old town road.mp3";
audio[13].src = "Audio/dead/pika pika bitch.mp3";
audio[14].src = "Audio/dead/queen1.mp3";
audio[15].src = "Audio/dead/queen2.mp3";
audio[16].src = "Audio/dead/rawr x3.mp3";
audio[17].src = "Audio/dead/recorder.mp3";
audio[18].src = "Audio/dead/rick roll.mp3";
audio[19].src = "Audio/dead/shoes.mp3";
audio[20].src = "Audio/dead/shooting star.mp3";
audio[21].src = "Audio/dead/take on me.mp3";
audio[22].src = "Audio/dead/trolololo.mp3";

function PlaySound(x) {
  audio[x].play();
}
