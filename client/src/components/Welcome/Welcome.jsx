import { Link } from 'react-router-dom'
import './Welcome.css'

export function Welcome () {
  return (
    <div className='container'>
      <Link to="/explore" className='button'> <span> EXPLORAR </span> </Link>
      <div className='title'> PI - Yaileen Manjarrés</div>
    </div>
  )
}
