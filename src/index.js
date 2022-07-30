const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': ' ',
};

function decode(expr) {
    const divided = []
    let step = 10;
    for (let i = 0; i < expr.length; i += 10) {
        divided.push(expr.slice(i, step));
        step += 10;
    }

    const decodeArray = [];
    for (let elem of divided) {
        let decode = elem.replaceAll('10', '.').replaceAll('11', '-').replaceAll('0', '').replaceAll('**********', ' ');
        decodeArray.push(decode);
    }

    let ready = '';
    for (let elem of decodeArray) {
        ready += MORSE_TABLE[elem];
    }

    return ready;
}

module.exports = {
    decode
}