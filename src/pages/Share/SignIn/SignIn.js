import React from "react";
import { NavLink } from "react-router-dom";
import "./SignIn.scss";

export default function SignIn() {
  return (
    <div className="signin-component">
      <div className="sign__content">
            <form>
                <div className="logo text-center">
                    <NavLink 
                            exact 
                            to="/home"
                            > <span>Tix</span>Movie
                    </NavLink>
                </div>
                <div className="sign__group">
                    <input type="text" className="form-control"  placeholder="Tên tài khoản" />
                    <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="sign__group">
                    <input type="password" className="form-control" placeholder="Mật khẩu" />
                </div>
                {/* <div className="form-check signin__group">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                    </label>
                </div> */}
                <button type="submit" className="btn btn-submit">
                    Đăng nhập
                </button>
                <p className="text-center sign__text">Bạn chưa là thành viên? 
                  <span> 
                        <NavLink exact to="/dangky"> 
                             Đăng ký!
                        </NavLink>
                  </span>
                </p>
                <p className="text-center sign__text"><span>Quên mật khẩu?</span></p>
            </form>
        </div>
    </div>
  );
}
