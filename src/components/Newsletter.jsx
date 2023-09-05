import "./Newsletter.css";
import bullets from "../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";
import illustration from "../assets/images/illustration-sign-up-desktop.svg";
import { useState } from "react";

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
    <div className="main-container">
      <div className="container input">
        <h1 className="title">Stay Updated!</h1>
        <p>Join 60,000+ managers recieving monthly updates on:</p>
        <span className="bullet">
          <img src={bullets} alt="check mark" />
          <p>Product discovery and bulding what matters</p>
        </span>
        <span className="bullet">
          <img src={bullets} alt="check mark" />
          <p>Measuring to ensure updates are a success</p>
        </span>
        <span className="bullet">
          <img src={bullets} alt="check mark" />
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
      <div className="container img">
        <img
          src={illustration}
          alt="business picture"
          className="illustration"
        />
      </div>
    </div>
  );
};

export default Newsletter;
