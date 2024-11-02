// come back to this one too. could not do without the solution

let text = "Hello, World!";
let operations = [
  function (text) {
    return text.split("").reverse().join("");
  },
  function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
];
let ranges = [
  [6, 6],
  [8, 11],
];

function processText(text, operations, ranges) {
  let segments = [];

  // in case the ranges don't cover the beginning of the text
  if (ranges[0][0] > 0) {
    segments.push(text.substring(0, ranges[0][0]));
  }

  for (let i = 0; i < ranges.length; i++) {
    let currentSegment = text.substring(ranges[i][0], ranges[i][1] + 1);

    for (let operation of operations) {
      currentSegment = operation(currentSegment);
    }
    segments.push(currentSegment);

    let beginningNextRange =
      i < ranges.length - 1 ? ranges[i + 1][0] : text.length;
    let innerSegment = text.substring(ranges[i][1] + 1, beginningNextRange);
    segments.push(innerSegment);
  }
  console.log(segments.join(""));
}

processText(text, operations, ranges);
