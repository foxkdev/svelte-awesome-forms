export function maxLength(max) {
  return (v) => {
    if (v && v.length > max) {
      return `maxLength.${max}`;
    }
    return true;
  };
}
