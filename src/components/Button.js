import PropTypes from 'prop-types'

export default function Button({color, text , onClick}) {
  return (
   <button 
   onClick={onClick}
   style={{backroundColor: color}} 
   className='btn'>{text}</button>
  )
}
Button.defaultProps = {
    color:"green",
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func,
}