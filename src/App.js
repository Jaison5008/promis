import { Link, Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Api1 from '../src/components/apione';
import Api2 from '../src/components/apitwo';
import Api3 from '../src/components/apithree';


function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api1' element={<Api1 />} />
        <Route path='/api2' element={<Api2 />} />
        <Route path='/api3' element={<Api3 />} />
        
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>API Learning Task</h1>
      <p>Please click below links for appropriate API's</p>
      <br />
      <div className='links'>
        <Link to={'/api1'} target='_blank'>API 1 - Drink Data API</Link>
        <Link to={'/api2'} target='_blank'>API 2 - Fake Store API</Link>
        <Link to={'/api3'} target='_blank'>API 3 - Users Data API</Link>
        
      </div>
    </div>
  )
}

export default App;