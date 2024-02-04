
import './App.css';
import About from './Components/About';




import {BrowserRouter } from 'react-router-dom'
import Homes from './Components/Homes';

import FirstPage from './Components/FIRSTPAGE/FirstPage';



function App() {
  return (
    <div >
       

       
       <FirstPage/>
       <About/> 
       <Homes/>
       

        
       <BrowserRouter>
        
              
       
       
       </BrowserRouter>

      
    </div>
  );
}

export default App;
