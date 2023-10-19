import "./Newsletter.css";
import { useNavigate } from "react-router-dom";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";
import { useState } from "react";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";

const Newsletter = ({ email, setEmail }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError(!error);
    }
  };

  const submtitHandler = (e) => {
    e.preventDefault();
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      navigate("/success");
    } else {
      setError(!error);
    }
  };

  return (
    <div className="main__container">
      <div className="input__container">
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ managers recieving monthly updates on:</p>
        <span className="bullet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
          >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p>Product discovery and bulding what matters</p>
        </span>
        <span className="bullet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
          >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p>Measuring to ensure updates are a success</p>
        </span>
        <span className="bullet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
          >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p>And much more!</p>
        </span>
        <form onSubmit={submtitHandler} className="form">
          <div className="msg-group">
            <label htmlFor="email">Email Address</label>
            <span className={!error ? "msg" : "error-msg"}>
              Valid email required
            </span>
          </div>
          <input
            type="text"
            placeholder="email@company.com"
            onChange={changeHandler}
            className={!error ? "email-input" : "email-input error"}
          />
          <button type="submit" className="btn">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <img src={desktop} alt="business picture" className="desktop" />
      <img src={mobile} className="mobile" />
    </div>
  );
};

export default Newsletter;
