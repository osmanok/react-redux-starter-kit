import React from 'react';
import { Link } from 'react-router';

const LoginForm = () => {
  return(
    <div className="home-container">
      <div className="container">
        <form>
          <div className="form-group row">
            <div className="col-md-6 ml-auto mr-auto">
              <input type="text" className="form-control" id="staticEmail" placeholder="E-Mail"/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6 ml-auto mr-auto">
              <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-2 ml-auto mr-auto">
              <button className="btn" type="button">Giris Yap</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
