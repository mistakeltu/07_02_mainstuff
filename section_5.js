console.clear();

// const temperaturs = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// function amplitude(arr) {
//   let maxTemp = -Infinity;
//   let minTemp = Infinity;
//   let diff = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//       continue;
//     }
//     if (maxTemp < arr[i]) {
//       maxTemp = arr[i];
//     }
//     if (minTemp > arr[i]) {
//       minTemp = arr[i];
//     }
//   }
//   return (diff = maxTemp - minTemp);
// }

// console.log(amplitude(temperaturs));

//1) Reikia patikrinti kokios reiksmes yra arejuje(for)
//2) Atspausdinti i nauja kintamaji pridedant
//3) ${} naudojant isvesti kintamuosius su indexu
const arr = [17, 21, 23];

function printForecast(arr) {
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    answer += `... ${arr[i]}C in ${i + 1}`;
  }
  return answer + ` ...`;
}

console.log(printForecast(arr));
