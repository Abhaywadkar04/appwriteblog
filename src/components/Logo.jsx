import React from 'react'
import useTheme from '../contexts/theme';

function Logo({width = '100px'}) {
  const { theme } = useTheme();
  return (

    <div className='w-full' style={{width: width}}>
      <img src="https://static.vecteezy.com/system/resources/previews/036/354/770/large_2x/letter-e-s-monogram-logo-design-template-vector.jpg" alt="blog logo" className='w-full' />
      <span className={`text-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>echoes</span>
    </div>
  )
}

export default Logo