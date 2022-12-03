export function pattern(regex) {
  return v => {
    if (v && !regex.test(v)) {
      return 'pattern'
    }
    return true
  }
}
//# sourceMappingURL=pattern.js.map