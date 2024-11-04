let text = "Hello, World!";
let operations = [
  function (text) {
    return text.toUpperCase();
  },
  function (text) {
    return text.replace(/o/g, "0");
  },
];
let ranges = [
  [2, 4],
  [7, 12],
];

function processText(text, operations, ranges) {
  let result = [];

  if (ranges[0][0] > 0) {
    result.push(text.substring(0, ranges[0][0]));
  }

  for (let i = 0; i < ranges.length; i++) {
    let currentSegment = text.substring(ranges[i][0], ranges[i][1] + 1);

    for (let operation of operations) {
      currentSegment = operation(currentSegment);
    }
    result.push(currentSegment);

    let beginningNextSegment =
      i < ranges.length - 1 ? ranges[i + 1][0] : text.length;

    let inBetweenSegment = text.substring(
      ranges[i][1] + 1,
      beginningNextSegment
    );
    result.push(inBetweenSegment);
  }
  console.log(result.join(""));
}

processText(text, operations, ranges);
