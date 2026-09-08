import PropTypes from 'prop-types'
import Button from './button'
import { useLocation } from 'react-router'

// Updated version to set a default 
const Header = ({title = 'Task Tracker', onAdd, showAdd }) => {
  const location = useLocation()
  
  return (
    <header className='header'> 
        <h1>{title}</h1>
        {location.pathname === '/' && (<Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
        />
      )}
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'blue', 
//     backgroundColor: 'black'
// }

export default Header