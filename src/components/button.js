import PropTypes from 'prop-types'

const button = ({color, text, onClick}) => {
  return (
  <button onClick={onClick} 
  style={{background: color}}
  className='btn'
  >
    {text}
  </button>
  )
}

button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default button