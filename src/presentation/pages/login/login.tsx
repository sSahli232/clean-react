import React from 'react'
import Styles from './login-styles.scss'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="email" />
        <Input type="password" name="password" placeholder="password" />
        <button className={Styles.submit} type="submit">Login</button>
        <span className={Styles.link}>Create an account</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
