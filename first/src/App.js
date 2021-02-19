import logo from './logo.svg';
import './App.css';
import Mycomponent from './Mycomponent/Mycomponent';
import Mycomponent2 from './Mycomponent2/Mycomponent2';
import Mycomponent3 from './Mycomponent3/Mycomponent3';
import Footer from './Footer/Footer'
import './mycustom.css'

function App() {
  return (
    <div className="App">
        <Mycomponent firstname="Suman" age="20"></Mycomponent>
        <Mycomponent firstname="Hari" age="22"></Mycomponent>
        <Mycomponent2 address="Dillibazar"></Mycomponent2>
        <Mycomponent2 address="Some address"></Mycomponent2>
        <Mycomponent3></Mycomponent3>
        <Footer></Footer>
    </div>
  );
}

export default App;
