import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Modal from './components/Modal.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/birthdayCard/:id' element={<Modal onClose={() => {}} onSave={(gift) => {}}/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
