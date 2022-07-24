import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  input {
    border-bottom: 1px solid #666464;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 2rem;
  }

  .button-container {
    height: 100%;
    display: flex;
    align-items: end;

    button {
      background: #181818;
      border-radius: 0.625rem;
      color: white;
      height: 3.162rem;
      width: 21.195rem;
    }

  }

`;