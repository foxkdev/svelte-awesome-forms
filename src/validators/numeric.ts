export function numeric() {
  return (v) => {
    if (v && !/^\d+$/.test(v)) {
      return 'numeric';
    }
    return true;
  };
}
