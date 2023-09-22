import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../commons/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../commons/FormsControls/FormsControls.module.css"

const maxLength25 = maxLengthCreator(25)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={"email"}
                    component={Input}
                    validate={[required, maxLength25]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    type={"password"}
                    name={"password"}
                    component={Input}
                    validate={[required, maxLength25]}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={"rememberMe"}
                    component={Input}
                /> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate replace to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)