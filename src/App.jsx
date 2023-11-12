import { Link, Route, Routes } from "react-router-dom"
import Container from "./components/container/container"
import Home from "./pages/home/home"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"



function App() {

  return (
    <div>

    <Container>
    <Header />
     <Routes>
     <Route path="/" element = { <Home />} />
     <Route path="/login" element = { <h1>hello</h1> } />
    </Routes>
  </Container>
    <Footer />
    </div>
  )
}

export default App
