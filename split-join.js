const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomay bolte parini.kala kala sada sada.';

// split
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const char = lyrics.split('');
// console.log(char);

// slice

const partial = lyrics.slice(5, 9);

console.log(partial);

// substring
const partial2 = lyrics.substring(5, 9);

console.log(partial2);

// join

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomay bolte parini',
    'kala kala sada sada',
    'rong jomeche sada kala.'
]

const newSong = lines.join('. ');

console.log(newSong);