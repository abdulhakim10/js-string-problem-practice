const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomay bolte parini.kala kala sada sada.';

const sarchString = 'PAkhi';
// const doseExit = lyrics.includes('pakhi');
// const doseExit = lyrics.includes(sarchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doseExit = lyricsLowerCase.includes(sarchString);

const sarchStringLower = sarchString.toLowerCase();
const doseExit = lyricsLowerCase.includes(sarchStringLower);

// oneline declare
const doseExitOneLine = lyrics.toLowerCase().includes(sarchString.toLowerCase());


// console.log(doseExit);
// console.log(doseExitOneLine);

// ......................
// .............indexOf

console.log(lyrics.indexOf('Tumi'));
console.log(lyrics.indexOf('kailla'));

if (lyrics.indexOf('sada') !== -1) {
    console.log('exits inside the string');
}
else {
    console.log('can not found it');
}

// starstwith
console.log(lyrics.startsWith('Tumi'));

// endswith
const fileName = 'tusar.pdf';
const otherfile = 'tusar.png';

console.log(fileName.endsWith('png'));