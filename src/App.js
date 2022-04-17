import './App.css';
import Routing from './routing/Routing';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Header/Navbar';
function App() {
  return (
    <>
      <Navbar/>
     <Routing/>
    </>
  );
}

export default App;
