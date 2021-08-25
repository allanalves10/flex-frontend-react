import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/routes';
import { GlobalStyles } from './styles/global';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersonProvider } from './contexts/usePerson';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <PersonProvider>
        <Header />
        <Routes />
        <Footer />
      </PersonProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
