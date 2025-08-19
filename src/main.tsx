// Think of main.tsx as the glue between static HTML and your dynamic React components.

import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './config/routes'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
