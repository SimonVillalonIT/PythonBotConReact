export const vocesDisponibles = speechSynthesis.getVoices();

export const vozAlice = (text) => {
  const msg = new SpeechSynthesisUtterance();
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;
  msg.voiceURI = "Paulina";
  msg.lang = "es-MX";
  msg.text = text;
  return speechSynthesis.speak(msg);
};

export const vozMark = (text) => {
  const msg = new SpeechSynthesisUtterance();
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;
  msg.voiceURI = "Google español de Estados Unidos";
  msg.lang = "es-US";
  msg.text = text;
  return speechSynthesis.speak(msg);
};
