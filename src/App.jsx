import { Route, Routes } from "react-router-dom";
import Container from "./components/ui/Container/Container";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";
import Home from "./pages/home/home";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<h1>hello</h1>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
