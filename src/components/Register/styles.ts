import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 6.5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: block;
    width: 63%;
  }

  > div > div {
    display: flex;
    justify-content: space-between;
  }

  h5 {
    font-size: 13px;
  }

  p {
    font-size: 10px;
  }
`

export const Form = styled.form`
  width: 100%;
  justify-content: center;
  background: var(--white);
  padding: 1rem;
  border-radius: 6px;
`

export const FormGroup = styled.div`
  display: flex;
  width: 100%;

  /* > div { */
  /* margin-right: 0.8rem; */
  /* } */
`

export const Div = styled.div`
  margin-right: 0.8rem;
  width: ${props => (props.width ? props.width : 'auto')};
`

export const Label = styled.label`
  margin-bottom: 0.3em;
  display: block;
  font-size: 12px;
`

export const Input = styled.input`
  padding: 0.14em;
  color: var(--gray-900);
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1.3em;
  /* width: ${props => (props.width ? props.width : 'auto')}; */
`

export const MessageSuccess = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`

export const MessageError = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`
