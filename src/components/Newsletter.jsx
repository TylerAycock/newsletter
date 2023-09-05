import "./Newsletter.css";
import bullets from "../assets/images/icon-list.svg";
import success from "../assets/images/icon-success.svg";
import illustration from "../assets/images/illustration-sign-up-desktop.svg";
import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState('')

    const submtitHandler = (e) => {
        e.preventDefault()
        setEmail('')
    }

  return (
    <div className="main-container">
      <div className="container input">
        <h1 className="title">Stay Updated!</h1>
        <p>Join 60,000+ managers recieving monthly updates on:</p>
        <span className="bullet">
            <img src={bullets} alt="check mark"/>
            <p>Product discovery and bulding what matters</p>
        </span>
        <span className="bullet">
            <img src={bullets} alt="check mark"/>
            <p>Measuring to ensure updates are a success</p>
        </span>
        <span className="bullet">
            <img src={bullets} alt="check mark"/>
            <p>And much more!</p>
        </span>
        <form onSubmit={submtitHandler} className="form">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="email@company.com" onChange={e=> setEmail(e.target.value)} value={email}/>
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="container img">
        <img src={illustration} alt="business picture" className="illustration"/>
      </div>
    </div>
  );
};

export default Newsletter;
