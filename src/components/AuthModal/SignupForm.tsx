import {FormEvent, useRef} from 'react'
import { Form } from './AuthModal.style'
import axios from 'axios'
import { FormModeProps } from '.'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/user/userSlice'

const SignupForm = ({ setIsModalOpen }: FormModeProps) => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const user = {
      first_name: firstName.current?.value,
      last_name: lastName.current?.value,
      email: email.current?.value,
      password: password.current?.value,
    }

    axios.post(`${process.env.REACT_APP_API_URL}/users`,{ user })
    .then(response => {
      console.log(response)
        const data = {
          token: response.data.token,
          email: response.data.user.email,
          first_name: response.data.user.first_name,
          last_name: response.data.user.last_name,
          is_admin: response.data.user.is_admin,
          id: response.data.user.id
        }
        dispatch(setUser(data))
        setIsModalOpen(false)
      }
    )
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