import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, FormStatus, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '../../protocols/validation'

type Props = {
  validation?: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    emailError: 'Field mandatory',
    passwordError: 'Field mandatory',
    mainError: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="email" />
          <Input type="password" name="password" placeholder="password" />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Login</button>
          <span className={Styles.link}>Create an account</span>
          <FormStatus />
        </form>
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default Login
