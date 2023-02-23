const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // Split the input into an array of 10-character chunks
  const chunks = expr.match(/.{10}/g);

  // Map over the chunks and convert each to Morse code
  const morse = chunks.map((chunk) => {
    // Convert 10s and 11s to dots and dashes, and ignore the padded zeroes
    const code = chunk
      .replace(/10/g, ".")
      .replace(/11/g, "-")
      .replace(/0/g, "");

    // Decode the Morse code using the lookup table
    return MORSE_TABLE[code];
  });

  // Join the Morse code characters into a string and return it
  return morse.join("");
}

module.exports = {
  decode,
};
