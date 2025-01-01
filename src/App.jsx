import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ArticleSection from './pages/ArticleSection/ArticleSection';
import Scholarships from './pages/Scholarships/Scholarships';
import MentorPage from './pages/MentorPage/MentorPage';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/articles"
                element={
                  <PrivateRoute>
                    <ArticleSection />
                  </PrivateRoute>
                }
              />
              <Route
                path="/scholarships"
                element={
                  <PrivateRoute>
                    <Scholarships />
                  </PrivateRoute>
                }
              />
              <Route
                path="/mentors"
                element={
                  <PrivateRoute>
                    <MentorPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
