import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Error from './components/404/Error.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import ChefRecipe from './components/pages/ChefRecipe.jsx'
import AuthProvider from './auth/AuthProvider.jsx'
import PrivetRoute from './components/pages/PrivetRoute.jsx'
import Blog from './components/pages/Blog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/chef-recipe/:id',
        element: <PrivetRoute><ChefRecipe></ChefRecipe></PrivetRoute>,
        loader: ({params})=> fetch(`https://chef-server-ashaansojib.vercel.app/allchef/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
)
