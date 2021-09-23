import { useState} from 'react'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"
import { toast,ToastContainer } from "react-toastify";
import { Login } from '../../Redux/actions';
import {LUser,User} from '../../typesInterface';

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeslash = <FontAwesomeIcon icon={faEyeSlash} />;
function Loginpage() {
    const user = useSelector((state: RootStateOrAny) => state.UserReducer.user)
    const [show, setShow] = useState(false);
    const handleshowHide = () => { setShow(!show) }
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data:LUser) => {
        const signedUpUsers =user.find((user:User) => ( data.user === user.text && data.password === user.password))
        if(signedUpUsers){
            dispatch(Login());
            localStorage.setItem("user", JSON.stringify(signedUpUsers ))
            history.push("/homepage");
          } 
         else{
           toast.warn("Not a registered user")
         }
    };
    return (
        <div>
            <ToastContainer/>
            <form className="form-group login" onSubmit={handleSubmit(onSubmit)}>
                <h4 className="login-header">Login</h4>
                <p className="top">Are you new to this site?<span className="signup"><Link to="/signup"><p>sign up</p></Link></span></p>
                <div className="form"> 
                    <input type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        {...register("user", {
                            required: "Username is required",
                        })} />
                    <div style={{ color: "red" }}>
                        <ErrorMessage errors={errors} name="user" />
                    </div>
                </div>
                <div className="form">
                    <div className="account__password">
                        <input
                            className="form-control"
                            placeholder="Password" 
                            type={show ? "text" : "password"}
                            {...register("password", {
                                required: "Password must not be empty",
                                pattern: {
                                    value: /(?=.*[0-9])/,
                                    message: "must contain some number",
                                },
                            })}
                        />
                        {show ? (
                            <i onClick={handleshowHide}>{eye}</i>
                        ) : (
                            <i onClick={handleshowHide}>{eyeslash}</i>
                        )}
                    </div>
                    <div style={{ color: "red" }}>
                        <ErrorMessage errors={errors} name="password" />
                    </div>
                </div>
                <div className="form">
                    <button type="submit" >Login</button>
                </div>
            </form>
        </div>
    )
}

export default Loginpage;

