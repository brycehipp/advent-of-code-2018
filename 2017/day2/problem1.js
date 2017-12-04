function getChecksum() {
  const spreadsheetRows = document.getElementsByTagName('pre')[0].innerHTML.split(/\r\n|\r|\n/g);

  return spreadsheet.split(/\r\n|\r|\n/g).map(row => row
    .split(/\s+/)
    .map(Number)
  ).map(row => row.sort((a, b) => a - b))
    .map(row => Math.max(...row) - Math.min(...row))
    .reduce((a, b) => a + b);
}

console.log(`Checksum: ${getChecksum()}`);
