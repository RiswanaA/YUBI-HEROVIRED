import logo from './logo.svg';
import './App.css';
import Firstsec from './components/Firstsec';
import Secondsec from './components/Secondsec';
import Thirdsec from './components/Thirdsec';
function App() {
  return (
    <div className='colorclass'>
      <h1 style={{color: "red",textAlign:"center"} }>MY FIRST BLOG ON HEALTHY WAY OF LIFE</h1>
    <div className='rowC'>
      
      <Firstsec />
      <Secondsec />
        </div>

        <br></br><br></br><br></br>
        <h3></h3>
       <Thirdsec></Thirdsec>
        <div>
          
        </div>
    </div>
  );
}

export default App;
