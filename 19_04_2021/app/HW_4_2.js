//10.0.0.0", "10.0.0.50"
//10.0.0.0", "10.0.1.0
//
  function Morza(){
    var morza = ".... . -.--   .--- ..- -.. ."; 
    var morza_alphabet = { 
      '.-':     'A', '-...':   'B', '-.-.':   'C',
      '-..':    'D', '.':      'E', '..-.':   'F',
      '--.':    'G', '....':   'H','..':     'I',
      '.---':   'J', '-.-':    'K', '.-..':   'L',
      '--':     'M', '-.':     'N', '---':    'O',
      '.--.':   'P', '--.-':   'Q', '.-.':    'R',
      '...':    'S', '-':      'T', '..-':    'U',
      '...-':   'V', '.--':    'W', '-..-':   'X',
      '-.--':   'Y', '--..':   'Z', '.----':  '1',
      '..---':  '2', '...--':  '3','....-':  '4',
      '.....':  '5', '-....':  '6',  '--...':  '7',
      '---..':  '8', '----.':  '9',  '-----':  '0',
    };
    var alphabetConverted = [];

    morza.split("   ").map(function (el) {
        el.split(" ").map(function (i) {
            alphabetConverted.push(morza_alphabet[i]);
        });
        alphabetConverted.push(" ");
    });
    console.log(alphabetConverted.join(""));
}