import { useState } from "react"

import ArticleList from "./components/ArticleList"
import Header from "./components/Header"
import Form from "./components/Form"
import Footer from "./components/Footer"

const App = () => {

  const [ user, setUser ] = useState()
  const hasUser = Boolean(user)

  console.log(user)

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header user={user} />
        {hasUser && <ArticleList /> || <Form onSubmit={setUser} />}
      </div>

      <Footer />

    </div>
  )
}

export default App