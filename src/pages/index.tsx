import React, { useContext } from 'react'
import Head from 'next/head'
import { ActionContext, ActionProvider } from '../contexts/ActionContext'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Div from '../components/Div'

export default function Home() {
  const { action } = useContext(ActionContext)

  return (
    <ActionProvider>
      <Head>
        <title>Teste Soft Wrap</title>
      </Head>
      <SubHeader />
      <Header />
      <Div />
    </ActionProvider>
  )
}
