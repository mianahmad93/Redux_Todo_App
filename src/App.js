import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './components/appbar/appbar';
import Home from './components/home/home';


function App() {
  return <>
    <div className='App'>
      <Appbar/>
      <Home/>
    </div>
  </>;
}

export default App;
