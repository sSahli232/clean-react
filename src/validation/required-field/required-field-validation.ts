import { FieldValidation } from '@/validation/protocols/field-validation'
import { ExtendedFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    return new ExtendedFieldError()
  }
}
