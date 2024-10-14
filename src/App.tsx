import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FirstArticle from './components/FirstArticle'
import HeartSigns from './components/HeartSigns'
import HeartScore from './components/HeartScore'
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/first' element={<FirstArticle />} />
        <Route path='/second' element={<HeartScore />} />
        <Route path='/third' element={<HeartSigns />} />
      </Routes>
    </Router>
  )
}

export default App
