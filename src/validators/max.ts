export function max(max) {
  return v => {
    if (v && v > max) {
      return `max.${max}`
    }
    return true
  }
}