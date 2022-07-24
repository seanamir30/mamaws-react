import {FormEvent, useRef} from 'react'
import { Form } from './AuthModal.style'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/user/userSlice'
import axios from 'axios'
import { AuthModalProps } from '.'

const LoginForm = ({ setIsModalOpen }: AuthModalProps) => {
  const dispatch = useDispatch()
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const user = {
      email: email.current?.value,
      password: password.current?.value,
    }
    axios.post(`http://${process.env.REACT_APP_API_URL}/users/sign_in`,{ user })
    .then(response => {
      if (!response.data.error){
        const user = {
          token: response.data.token,
          email: response.data.user.email,
          first_name: response.data.user.first_name,
          last_name: response.data.user.last_name,
          is_admin: response.data.user.is_admin,
        }
        dispatch(setUser(user))
        setIsModalOpen(false)
      }
    })
  }

  return (
    <Form onSubmit={(e)=>{handleSubmit(e)}}>
      <input placeholder='Email Address*' ref={email} type='email' />
      <input placeholder='Password*' ref={password} type='password' />
      <div className='button-container'>
        <button type='submit'>CONTINUE</button>
      </div>
    </Form>
  )
}

export default LoginForm