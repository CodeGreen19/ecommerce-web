exports.textSlice = (text, size) => {
  if (text.length > size) {
    let newText = `${text.slice(0, size)}...`;
    return newText;
  }

  return text;
};
