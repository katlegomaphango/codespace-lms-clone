import { Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"

function App() {

  return (
    <>
      <h1>App</h1>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        
      </Routes>
    </>
  )
}

export default App
