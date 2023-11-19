import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BooksPage from "./pages/BooksPage/BooksPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="*"
        element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
            </Routes>
          </>
        }
      />
    </Routes>
  );
}

export default App;
