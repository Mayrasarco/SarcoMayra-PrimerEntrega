
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido"} />
      <Category/>
    </div>
  );
}

export default App;
