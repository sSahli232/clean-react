import { ValidationComposite } from './validation-composite'
import { ValidationSpy } from '../test/mock-field-validation'

describe('ValidationComposite', () => {
  test('should return error if any validaton fails', () => {
    const validationSpy = new ValidationSpy('any_field')
    const validationSpy2 = new ValidationSpy('any_field')
    validationSpy2.error = new Error('any_error_message')
    const sut = new ValidationComposite([
      validationSpy,
      validationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('any_error_message')
  })
})
