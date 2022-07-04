export class ExtendedFieldError extends Error {
  constructor () {
    super('Required field')
    this.name = 'ExtendedFieldError'
  }
}
