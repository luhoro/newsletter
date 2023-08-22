import { useState } from "react"

import ArticleList from "./components/ArticleList"
import Header from "./components/Header"
import Form from "./components/Form"

const App = () => {

  const [ user, setUser ] = useState()
  const hasUser = Boolean(user)

  console.log(user)

  return (
    <>
      <Header user={user} />

      { hasUser && <ArticleList /> || <Form onSubmit={setUser} /> }
    </>
  )
}

export default App