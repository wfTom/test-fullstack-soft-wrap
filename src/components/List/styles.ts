import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 6.5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    width: 63%;
    margin: auto;
    border-radius: 6px;
  }

  table {
    width: 100%;
    font-size: 12px;

    thead {
      color: var(--gray-500);
    }

    tr:nth-child(even) {
      background-color: var(--gray-50);
    }
    // TODO Arrumar depois com os registros carregados

    button {
      border: 0;
      color: var(--indigo-600);
    }
  }

  > div > div {
    display: block;
    width: 100%;
  }

  > div > div > div {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin: 0 1rem;
  }

  button {
    padding: 0.3rem;
    border: 1px solid var(--gray-300);
    border-radius: 6px;
    color: var(--gray-700);
    font-size: 13px;
    background-color: var(--white);
    margin-right: 0.2rem;
  }
`
