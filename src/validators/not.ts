export function not(cb) {
  return (v, form) => {
    if (cb(v, form) === true) {
      return 'not';
    }
    return true;
  };
}
