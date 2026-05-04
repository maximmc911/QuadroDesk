import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/index.tsx'
import { ThemeProvider } from './utils/theme/ThemeProviders.tsx'

createRoot(document.getElementById('root')!).render(
<ThemeProvider>

  <RouterProvider router={router}/>
</ThemeProvider>
)
