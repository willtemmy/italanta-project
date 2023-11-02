import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Invest from './components/invest/Invest'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Invest/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
