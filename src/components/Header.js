import PropTypes from 'prop-types'
import Button from './Button'

export default function Header({title}) {
  const onClick = () => {
     console.log("click")
  }
 
 
  return (
    <header onClick={onClick} className='header'>
    <h1>{title}</h1>
    <Button color='green' text='Add'/>
    
    </header>
  )
}
Header.defaultProps={
  title:"Task Tracker",
}
Header.propTypes={
  title:PropTypes.string.isRequired,
}
