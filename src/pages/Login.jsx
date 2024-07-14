import React from 'react'
import { Login as loginComponent } from '../components'

function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-center bg-cover' style={{backgroundImage: `url("https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=800")`}}>
      <div className='flex flex-col sm:flex-row items-center justify-center min-h-screen'>
        <div className='w-full sm:w-1/2 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-l-lg sm:rounded-r-none'>
          <loginComponent />
        </div>
        <div className='w-full sm:w-1/2 bg-cover bg-center' style={{backgroundImage: `url("https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=800")`}} />
      </div>
    </div>
  )
}

export default Login

