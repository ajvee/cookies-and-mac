import './App.css';
import Nav from "./Components/Nav";
import Container from './Container';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Container />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
