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
    border: solid var(--gray-50) 1px;
  }

  table {
    width: 100%;
    font-size: 12px;
    vertical-align: baseline;
    border-collapse: collapse;

    thead {
      color: var(--gray-500);
      background: var(--gray-200);

      th {
        background: var(--gray-50);
      }
    }

    tbody {
      border-bottom: solid var(--gray-200) 1px;
      border-top: solid var(--gray-200) 1px;

      tr {
        text-align: left;
        color: var(--gray-500);
      }

      td {
        padding-left: 0.45rem;
      }

      td:first-child {
        color: var(--gray-900);
      }
    }

    th {
      padding: 0.5rem;
      text-align: left;
    }

    button {
      border: 0;
      color: var(--indigo-600);
      background-color: transparent;
    }

    tr:nth-child(odd) {
      background-color: var(--white);
    }

    tr:nth-child(even) {
      background-color: var(--gray-50);
    }
  }

  hr {
    color: var(--gray-300);
    height: 1px;
  }

  > div > div {
    display: block;
    background-color: var(--white);
    width: 100%;
  }

  > div > div > div {
    padding: 0.5rem 0 0.5rem 0.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin: 0 1rem;
    align-items: center;
  }

  button {
    padding: 0.3rem;
    border: 1px solid var(--gray-300);
    border-radius: 6px;
    color: var(--gray-700);
    font-size: 13px;
    background-color: var(--white);
    margin-right: 0.35rem;
  }
`
