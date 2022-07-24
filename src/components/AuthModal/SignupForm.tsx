import {FormEvent, useRef} from 'react'
import { Form } from './AuthModal.style'
import axios from 'axios'
import { AuthModalProps } from '.'

const SignupForm = ({ setIsModalOpen }: AuthModalProps) => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const data = {
      firstName: firstName.current?.value,
      lastName: lastName.current?.value,
      email: email.current?.value,
      password: password.current?.value,
    }
    setIsModalOpen(false)
  }

  return (
    <Form onSubmit={(e)=>{handleSubmit(e)}}>
      <input placeholder='First Name*' ref={firstName} type='name' />
      <input placeholder='Last Name*' ref={lastName} type='name' />
      <input placeholder='Email Address*' ref={email} type='email' />
      <input placeholder='Password*' ref={password} type='password' />
      <div className='button-container'>
        <button type='submit'>CONTINUE</button>
      </div>
    </Form>
  )
}

export default SignupForm