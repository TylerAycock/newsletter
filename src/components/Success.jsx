import './Success.css'
import { useNavigate } from 'react-router-dom';

const Success = ({email, setEmail}) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        setEmail('')
        navigate("/")
    }

    return (
        <div className='success__container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stopColor="#FF6A3A"/><stop offset="100%" stopColor="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" strokeWidth="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
        <h2>Thanks for subscribing!</h2>
        <p>A confirmation email has been sent to <span className='email'>{email}</span>. Please open it and click the button inside to confirm you subscription</p>
        <button onClick={()=>clickHandler()}>Dismiss message</button>
        </div>
    )
}

export default Success