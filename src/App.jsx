import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Portfolio from './components/Portfolio/Portfolio'

let routers = createBrowserRouter([
  {
    path: '/react-task1/', element: <Layout />, children: [
      { path: '*', element: <ErrorPage /> },
      { index: true, element: <About /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> }
    ]
  }

])

function App() {
  return <RouterProvider router={routers} ></RouterProvider>
}

export default App
