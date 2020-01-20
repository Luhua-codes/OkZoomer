var audio = new Array(45);

for (i = 0; i < 45; i++) {
  audio[i] = new Audio();
}

audio[0].src = "Audio/JoJo/ZA WARUDO.wav";
audio[1].src = "Audio/JoJo/Time Stops.wav";
audio[2].src = "Audio/JoJo/TOKIO TOMARE.wav";
audio[3].src = "Audio/JoJo/ICHI-BI O KEKA.wav";
audio[4].src = "Audio/JoJo/NI-BI O KEKA.wav";
audio[5].src = "Audio/JoJo/SAN-BI O KEKA.wav";
audio[6].src = "Audio/JoJo/YIOM-BI O KEKA.wav";
audio[7].src = "Audio/JoJo/GO KEKA.wav";
audio[8].src = "Audio/JoJo/ROKU-BI O KEKA.wav";
audio[9].src = "Audio/JoJo/NANA KEKA.mp3";
audio[10].src = "Audio/JoJo/HACHI KEKA.mp3";
audio[11].src = "Audio/JoJo/KYU KEKA.mp3";
audio[12].src = "Audio/JoJo/TIME WILL FLOW.wav";
audio[13].src = "Audio/JoJo/WRYYYY.wav";
audio[14].src = "Audio/JoJo/YARE YARE DAZE.wav";
audio[15].src = "Audio/JoJo/YES I AM.wav";
audio[16].src = "Audio/JoJo/VERY NICU.wav";
audio[17].src = "Audio/JoJo/SPEEDWAGON.mp3";
audio[18].src = "Audio/JoJo/Sono Chi No Sadame.wav";
audio[19].src = "Audio/JoJo/RODO ROLLA-GA.wav";
audio[20].src = "Audio/JoJo/APPROACHING.mp3";
audio[21].src = "Audio/JoJo/BITES ZA DUSTO.wav";
audio[22].src = "Audio/JoJo/DIO.wav";
audio[23].src = "Audio/JoJo/DO YOU UNDERSTAND.wav";
audio[24].src = "Audio/JoJo/DORARARARA.wav";
audio[25].src = "Audio/JoJo/EMERARDO SPLASH.wav";
audio[26].src = "Audio/JoJo/GIORNO'S THEME.mp3";
audio[27].src = "Audio/JoJo/GO AHEAD.wav";
audio[28].src = "Audio/JoJo/GURETO DESU-YO.wav";
audio[29].src = "Audio/JoJo/HAIL 2 U.mp3";
audio[30].src = "Audio/JoJo/HAPPY UREPY.wav";
audio[31].src = "Audio/JoJo/HEY BABY!.wav";
audio[32].src = "Audio/JoJo/HINJAKU HINJAKU.wav";
audio[33].src = "Audio/JoJo/Kars Laugh.wav";
audio[34].src = "Audio/JoJo/KIRA QUEEN.wav";
audio[35].src = "Audio/JoJo/KONO DIO DA.wav";
audio[36].src = "Audio/JoJo/KONO DIO GA.wav";
audio[37].src = "Audio/JoJo/LERO.mp3";
audio[38].src = "Audio/JoJo/MORIO-CHO RADIO.wav";
audio[39].src = "Audio/JoJo/MUDA-MUDa.wav";
audio[40].src = "Audio/JoJo/NIGERUNDAYO!.wav";
audio[41].src = "Audio/JoJo/NIIIICE.wav";
audio[42].src = "Audio/JoJo/OH MY GOD!!!.wav";
audio[43].src = "Audio/JoJo/OH NO!.wav";
audio[44].src = "Audio/JoJo/ORA-ORA-ORA.wav";

function PlaySound(x) {
  audio[x].play();
}
