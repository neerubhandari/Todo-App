import {Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { fetchUser } from "../../Redux/actions"
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { toast,ToastContainer } from "react-toastify";
import axios from 'axios'
import "./Login.css"
import { User } from '../../typesInterface'
function Signup() {
    const user = useSelector((state: RootStateOrAny) => state.UserReducer.user)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:User) => {
        const User={
            text:data.text,
            email:data.email,
            password:data.password,
            id:data.id
        }
        const userExist= user.find((user:User) =>(data.text===user.text && data.email===user.email))
       { userExist?
        toast.warn("This user is already registered")
        :
        axios.post("http://localhost:3007/user", User, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            dispatch(fetchUser());
            toast.success("User Registered Successfully")
        }).catch((error) => console.log(error))
       }
    }
    return (
        <div>
            <ToastContainer/>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group login" >
                <h4 className="login-header">Sign-Up</h4>
                <p className="top">Already an Existing User?<span className="signup"><Link to="/login"><p>Login</p></Link></span></p>
                <div className="form">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        {...register("text", { required: "This is required please fill." })}
                    />
                    <div style={{ color: "red" }}>
                        <ErrorMessage errors={errors} name="text" />
                    </div>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        {...register("email", { required: "This is required please fill." })}
                    />
                    <div style={{ color: "red" }}>
                        <ErrorMessage errors={errors} name="email" />
                    </div>
                </div>
                <div className="form">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        {...register('password', { pattern: { value: /(?=.*[0-9])/, message: 'must contain some number' } })}
                    />
                    <div style={{ color: "red" }}>
                        <ErrorMessage errors={errors} name="password" />
                    </div>
                </div>
                <div className="form">
                    <button type="submit" >Sign Up</button>
                </div>

            </form>
        </div>
    )
}

export default Signup;

