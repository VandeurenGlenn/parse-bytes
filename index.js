export default function parseBytes(input) {
  const byteFormats = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const regex = /^(\d+(?:\.\d+)?)\s?([a-zA-Z]+)$/;
  const matches = input.match(regex);

  if (!matches) {
    throw new Error('Invalid input format');
  }

  const value = parseFloat(matches[1]);
  const unit = matches[2];

  const index = byteFormats.indexOf(unit);
  if (index === -1) {
    throw new Error('Invalid unit');
  }

  return value * Math.pow(1024, index);
}
