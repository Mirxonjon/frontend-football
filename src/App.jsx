import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BooksPage from "./pages/BooksPage/BooksPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BookSinglePage from "./pages/BookSinglePage/BookSinglePage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import ContestPage from "./pages/ContestPage/ContestPage";

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
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/contests" element={<ContestPage />} />
              <Route path="/books/:id" element={<BookSinglePage />} />
            </Routes>
          </>
        }
      />
    </Routes>
  );
}

export default App;
