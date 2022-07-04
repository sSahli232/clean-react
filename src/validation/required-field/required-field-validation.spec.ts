import { RequiredFieldValidation } from './required-field-validation'
import { ExtendedFieldError } from '@/validation/errors'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('should return error is field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new ExtendedFieldError())
  })

  test('should return falsy is field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
