import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BooksPage from "./pages/BooksPage/BooksPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BookSinglePage from "./pages/BookSinglePage/BookSinglePage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import ContestPage from "./pages/ContestPage/ContestPage";
import TraningVideoPage from "./pages/TraningVideoPage/TraningVideoPage";
import ContestVideoPage from "./pages/ContestVideoPage/ContestVideoPage";
import MasterclassPage from "./pages/MasterclassPage/MasterclassPage";
import MasterclassSinglePage from "./pages/MasterclassSinglePage/MasterclassSinglePage";
import CopyPage from "./pages/CopyPage/CopyPage";
import CopySinglePage from "./pages/CopySinglePage/CopySinglePage";

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
              <Route path="/books/:id" element={<BookSinglePage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/training/:id" element={<TraningVideoPage />} />
              <Route path="/contests" element={<ContestPage />} />
              <Route path="/contests/:id" element={<ContestVideoPage />} />
              <Route path="/masterclass" element={<MasterclassPage />} />
              <Route
                path="/masterclass/:id"
                element={<MasterclassSinglePage />}
              />

              <Route path="/copies" element={<CopyPage />} />
              <Route path="/copies/:id" element={<CopySinglePage />} />
            </Routes>
          </>
        }
      />
    </Routes>
  );
}

export default App;
