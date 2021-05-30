import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
    --white:#fff;
    --light-background:#F3F4F6;
    --dark-background:#1F2937;
    --indigo-100:#E0E7FF;
    --indigo-600:#4F46E5;
    --indigo-700:#4338CA;
    --gray-50:#F9FAFB;
    --gray-200:#E5E7EB;
    --gray-300:#D1D5DB;
    --gray-500:#6B7280;
    --gray-700:#374151;
    --gray-900:#111827;
    --red-50:#FEF2F2;
    --red-400:#F87171;
    --red-500:#EF4444;
    --red-700:#B91C1C;
    --red-800:#991B1B;
    --green-50:#ECFDF5;
    --green-400:#34D399;
    --green-500:#10B981;
    --green-800:#065F46;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--light-background);
  }

  body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor:pointer;
  }

  a {
    color:inherit;
    text-decoration:none;
  }

  @media(max-width: 1080px){
    html{
      font-size:93.75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size:87.5%;
    }
  }
`
