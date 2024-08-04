import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <ErrorPage /> }
    ]
  }

])

function App() {
  return <RouterProvider router={routers} ></RouterProvider>
}

export default App
