import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Route from './Router/Route.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import GetInTouch from './Pages/GetInTouch.jsx'
import Projects from './Pages/Projects.jsx'



const router = createBrowserRouter(

  [
    {
      path: '/',
      element: <Route />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/getInTouch',
          element: <GetInTouch />
        },
        {
          path: '/projects',
          element: <Projects />
        },
      ]
    }
  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
