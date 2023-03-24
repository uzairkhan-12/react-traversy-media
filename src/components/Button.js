import React from 'react'

const Button = ({bgColor, text, onClick}) => {
  return <button style={{backgroundColor:bgColor}} className='btn' onClick={onClick}>{text}</button>
}

export default Button


Button.defaultProps = {
    color:'steelblue'
}

// Button.propTypes = {
//   text:PropTypes.string,
//   color:PropTypes.string,
//   onClick:propTypes.fun
// }