
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
    <Routes>
      <Route element={<MainLayout/>} path='/'>
      <Route element={<Home/>} path='/'/>

      </Route>
    </Routes>
      <h1>Hello</h1>
    </>
  )
}

export default App
