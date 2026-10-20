import { createBrowserRouter } from "react-router";
import MainPage from '../pages/main/Page'
import ErrorPage from '../pages/error/Page'
// import AuthPage from '../pages/auth/Page'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />
    }
])