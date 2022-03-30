import { useContext } from 'react'
//Context
import { UserContext } from './contexts/UserContext'
//Pages
import LoginPage from './Pages/LoginPage'
import InnerApp from './Pages/InnerApp'

function App() {
  const { user } = useContext(UserContext)
  if (user) {
    return <InnerApp />
  } else {
    return <LoginPage />
  }
}

export default App
