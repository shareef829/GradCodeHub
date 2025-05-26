import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

export default function App({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}