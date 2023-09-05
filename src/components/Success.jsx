import './Success.css'
import success from "../assets/images/icon-success.svg";
import { useNavigate } from 'react-router-dom';

const Success = ({email, setEmail}) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        setEmail('')
        navigate("/")
    }

    return (
        <div className='success-container'>
        <img src={success} alt="" className='check'/>
        <h1 className='title'>Thanks for subscribing!</h1>
        <p className='confirm-msg'>A confirmation email has been sent to <span className='email'>{email}</span>. Please open it and click the button inside to confirm you subscription</p>
        <button className='btn' onClick={()=>clickHandler()}>Dismiss message</button>
        </div>
    )
}

export default Success