import { useContext } from 'react';
import './App.css';
import  { Theme } from './contexts/Theme';
import Router  from './routes';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  
    const notify = () => toast("Bienvenido !");

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    );

  const {themeColor} = useContext(Theme)
  return (
    <div
    className= {themeColor === 'dark' ? 'container-dark' : null}>
  
   
    <Router/>
    
      

      </div>
      
  
  );
}

export default App;
