export function matchInput(field: any) {
  return (v: any, form: any) => {
    if(!form[field]) {
      throw new Error(`Field to match ${field} does not exist`)
    }
    if (form[field] && v !== form[field].value) {
      return 'match'
    }
    return true
  }
}