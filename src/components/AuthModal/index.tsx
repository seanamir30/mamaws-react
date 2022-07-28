import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Login from './LoginForm'
import Signup from './SignupForm'


export type Mode = 'signup' | 'login';

export type FormModeProps = {
  setIsModalOpen: (value: boolean) => void,
}

type AuthModalProps = {
  setIsModalOpen: (value: boolean) => void,
  authMode: Mode
}

type ButtonProps = {
  mode: Mode;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 2px;
  width: 31rem;
  height: 41.5rem;
  border-radius: 3.125rem;
  padding: 2.125rem 5rem 6rem 5rem;

  .close-button{
    cursor: pointer;
    position: absolute;
    top:1.563rem;
    right:1.563rem;
  }
`;

const ModeSwitchContainer = styled.div<ButtonProps>`
  display: flex;
  margin-top: 0.7rem;
  button {
    width: 10.625rem;
    height: 3.188rem;
    border: 2px solid #181818; 

    &.login{
      color: ${({mode})=>mode === 'login' ? 'white' : 'black'};
      background: ${({mode})=>mode === 'login' ? 'black' : 'white'};
    }
    &.signup{
      color: ${({mode})=>mode === 'signup' ? 'white' : 'black'};
      background: ${({mode})=>mode === 'signup' ? 'black' : 'white'};
    }

  }

`;

const Outside = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const AuthModal = ({setIsModalOpen, authMode}: AuthModalProps) => {
  const [mode, setMode] = useState<Mode>('signup')

  useEffect(() => {
    setMode(authMode)
  }, [authMode])
  

  return (
    <Container>
      <Content>
          <div><img role={'button'} src={'/close.svg'} alt="close button"  className='close-button' onClick={()=>{setIsModalOpen(false)}}/></div>
          <div><img src={'/logo-title.svg'} alt="logo with title"/></div>
        <ModeSwitchContainer mode={mode}>
          <button onClick={()=>{setMode('login')}} className='login'>LOG IN</button>
          <button onClick={()=>{setMode('signup')}} className='signup'>SIGN UP</button>
        </ModeSwitchContainer>
        {mode === 'signup'?<Signup setIsModalOpen={setIsModalOpen}/>:<Login setIsModalOpen={setIsModalOpen}/>}
      </Content>
      <Outside onClick={()=>{setIsModalOpen(false)}}/>
    </Container>
  )
}

export default AuthModal