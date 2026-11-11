export const Grid = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4 text-center'>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 1</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 2</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 3</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 4</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 5</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 6</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 7</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 8</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 9</div>
      <div className='bg-gray-200 p-4 rounded-lg'>Elemento 10</div>
    </div>
  )
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)