import React, { useState } from 'react'
import Head from 'next/head'
import { ActionProvider } from '../contexts/ActionContext'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Div from '../components/Div'

export default function Home() {
  const [users, setUsers] = useState([])

  return (
    <ActionProvider users={users}>
      <Head>
        <title>Teste Soft Wrap</title>
      </Head>
      <SubHeader />
      <Header />
      <Div />
    </ActionProvider>
  )
}
