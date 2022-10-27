import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  // this looks like a conventional / readable way to display parameter in React
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  // This expression declares a default setting as "buttonStyle", if it's not buttonStyle it's the class option becomes the first option in the styles variable / array

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0]

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children} 
        {/* when i type txt into the component tag, it is the "children" of the conponent. Example <Button>this txt is "children"</Button> */}
      </button>
    </Link>
  )
}
