import { /* createBrowserRouter, */ createHashRouter } from "react-router";
import MainPage from '../pages/main/Page'
import ErrorPage from '../pages/error/Page'
// import AuthPage from '../pages/auth/Page'

// import MainPage from '../pages/main/Page'
import HomePage from '../pages/home/Page'
import DeskPage from '../pages/desk/Page'
import UserPage from '../pages/user_page/Page'
// import ErrorPage from '../pages/error/Page'
/* export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />
    }
]) */
export const router = createHashRouter([
    {
        path: '/',
        element: <MainPage/>,
        errorElement: <ErrorPage />
    },
     {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/desk',
    element: <DeskPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
    
])