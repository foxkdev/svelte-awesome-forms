export function url() {
  return v => {
    if (v && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(v)) {
      return 'url'
    }
    return true
  }
}
//# sourceMappingURL=url.js.map