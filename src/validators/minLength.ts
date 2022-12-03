export function minLength(min) {
  return v => {
    if (v && v.length < min) {
      return `minLength.${min}`
    }
    return true
  }
}