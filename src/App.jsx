import { Route, Routes } from "react-router-dom";
import Container from "./components/ui/Container/Container";
import Header from "./components/ui/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BooksPage from "./pages/BooksPage/BooksPage";

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/login" element={<h1>hello</h1>} />
        </Routes>
    </div>
  );
}

export default App;
