import React from 'react'

import CV from '../assets/Maiwand_Zazai_updated_Cv.pdf';
const CTA = () => {
  return (
      <div className='cta'>
          <a href={CV} download className='btn'>Download My CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>    
      </div>
  )
}

export default CTA