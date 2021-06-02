import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 4.2rem;
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
  padding: 1rem 1rem 0 1rem;
  border-radius: 6px 6px 0 0;
`

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
`

export const Div = styled.div`
  margin-right: 0.8rem;
  width: ${props => (props.dir ? props.dir : 'auto')};
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
  border: 1px solid ${props => (props.color ? props.color : 'var(--gray-300)')};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1.3em;
  font-size: 90%;
  padding: 0.3rem;
`

export const Select = styled.select`
  padding: 0.14em;
  color: var(--gray-900);
  background: var(--white);
  border: 1px solid ${props => (props.color ? props.color : 'var(--gray-300)')};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1.3em;
  font-size: 90%;
  padding: 0.3rem;
`

export const DivSubmitButton = styled.div`
  background: var(--gray-50);
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: left;
  align-items: flex-end;
  border-radius: 0 0 6px 6px;
  padding: 0.6em 1em;
`

export const Button = styled.button`
  padding: 0.75em 1em;
  border: 0;
  border-radius: 6px;
  font-size: 12px;

  :not(:disabled):hover {
    border-radius: 6px;
    border: 1px solid var(--white);
  }
`

export const DarkButton = styled(Button)`
  background: var(--indigo-600);
  color: var(--white);

  :not(:disabled):hover {
    outline: solid var(--indigo-600) 2px;
  }
`

export const LightButton = styled(Button)`
  background: var(--indigo-100);
  color: var(--indigo-700);
  margin-right: 0.5rem;

  :not(:disabled):hover {
    outline: solid var(--indigo-100) 2px;
  }
`

export const Message = styled.div`
  width: 30rem;
  display: flex;
  margin: 0.5rem 0.5rem 0 auto;
  align-self: flex-end;
  border-radius: 6px;
  justify-content: space-between;
  padding: 0 0 0.85rem 1rem;

  h5 {
    font-size: 11px;
  }

  button {
    border: 0;
    background-color: transparent;

    img {
      width: 1.15rem;
      height: 1.15rem;
    }
  }

  div:last-child {
    flex-direction: column-reverse;
  }
`

export const MessageSuccess = styled(Message)`
  color: var(--green-800);
  background: var(--green-50);
  border: var(--green-800) solid 1px;
`

export const MessageError = styled(Message)`
  color: var(--red-800);
  background: var(--red-50);
  border: var(--red-800) solid 1px;

  li {
    margin-left: 0.3rem;
    font-size: 11px;
  }
`
