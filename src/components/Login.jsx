import React from "react";
import styled from "styled-components";
import loginImg from "../images/surprised-girl-pink-culottes-posing-with-trolley-full-multi-colored-packages-with-new-clothes.jpg";
import {MdCheckCircle, MdEmail, MdLock} from "react-icons/md";

const Login = () => {
    return (
        <>
            <LoginPage>
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/>
                <LoginForm>
                    <InputFields>
                        <MdEmail for="inp_email" className="btn-icon" />
                        <input
                            type="email"
                            id="inp_email"
                            placeholder="Email"
                        />
                    </InputFields>
                    <InputFields>
                        <MdLock for="inp_password" className="btn-icon" />

                        <input
                            type="password"
                            id="inp_password"
                            placeholder="Password"
                        />
                    </InputFields>
                    <RememberMe>
                        <div>
                            <span>
                                <MdCheckCircle size="10px" />
                            </span>
                            Remember Me
                        </div>
                        <div>Forgot password?</div>
                    </RememberMe>
                    <SubmitBtn>
                        <input type="submit" value="Login" />
                        <p>
                            Don’t have an account? <span>Sign up</span>
                        </p>
                    </SubmitBtn>
                </LoginForm>
            </LoginPage>
        </>
    );
};
export default Login;

const LoginPage = styled.div`
img{
    top:20px;
    right:20px;
    position: absolute;
}
    background-image: url(${loginImg});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoginForm = styled.form`
    width: 288px;
    height: 271px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 45px;
`;
const InputFields = styled.div`
    position: relative;
    .btn-icon {
        color: rgba(71, 71, 71, 0.7);
        display: inline-block;
        position: absolute;
        top: 5px;
    }

    input {
        padding: 5px 20px;
        border: none;
        border-bottom: 2px solid #3c3c3c;
        background-color: transparent;
        :focus {
            outline: none;
        }
    }
`;
const RememberMe = styled.div`
    color: rgb(71, 71, 71);
    padding-left: 10px;
    position: relative;
    margin-top: -18px;
    width: 65%;
    font-size: 10px;font-style: normal;
font-weight: 400;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    span {
        left: 0;
        position: absolute;
    }
`;
const SubmitBtn = styled.div`
    input {
        color:white;
        font-weight: bolder;
        font-size: 18px;
        margin-top: 10px;
        width: 178px;
        height: 39px;
        background: #db4700;
        box-shadow: 0px 18px 25px -15px rgb(196, 196, 196);
        border-radius: 15px;
        border: none;
        
    }
    p{
        position: absolute;
        left:50%;
        transform: translateX(-50%);
        font-size: 9px;font-style: normal;
font-weight: 400;
    }
`;
