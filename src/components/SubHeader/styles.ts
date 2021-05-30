import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-background);

  > div {
    width: 63%;
    display: flex;
    margin: auto;

    > button {
      margin-right: 1rem;
    }
  }

  button {
    font-size: 1rem;
    border: 0;
    padding: 0.35rem;
  }
`

export const ActiveButton = styled.button`
  background: var(--gray-900);
  color: var(--white);
  border-radius: 6px;
`

export const NotActiveButton = styled.button`
  background: var(--dark-background);
  color: var(--gray-300);
`
