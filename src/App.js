import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './containers/About'
import ScrollArrow from './components/Scroll'
import Particles from 'react-particles-js'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles:{
            number:{
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }
           
          }
      }} 
      />
      
     <Navbar></Navbar>
     <Header></Header>
     <About></About>
     <ScrollArrow></ScrollArrow>
    </div>
  );
}

export default App;
