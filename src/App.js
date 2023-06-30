import imageRickMorty from "./img/rick-morty.png";
import './App.css';

function App() {


  const reqApi =  async () => {
    const api = await fetch('localhost:8080/api/dictamen/idc/getIdc');
    console.log(api);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty</h1>
        <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
        <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
