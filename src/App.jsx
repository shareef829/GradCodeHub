import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import PrivateRoute from './components/auth/PrivateRoute';
import AdminRoute from './components/auth/AdminRoute';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Practice from './pages/Practice';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Protected routes */}
                <Route path="/dashboard" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } />
                
                <Route path="/courses" element={
                  <PrivateRoute>
                    <Courses />
                  </PrivateRoute>
                } />
                
                <Route path="/practice" element={
                  <PrivateRoute>
                    <Practice />
                  </PrivateRoute>
                } />
                
                <Route path="/projects" element={
                  <PrivateRoute>
                    <Projects />
                  </PrivateRoute>
                } />
                
                <Route path="/pricing" element={<Pricing />} />
                
                {/* Admin-only route */}
                <Route path="/admin" element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                } />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}