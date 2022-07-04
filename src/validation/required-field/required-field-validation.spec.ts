import { RequiredFieldValidation } from './required-field-validation'
import { ExtendedFieldError } from '@/validation/errors'

describe('RequiredFieldValidation', () => {
  test('should return error is field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new ExtendedFieldError())
  })
})
