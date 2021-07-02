import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useToasts } from "react-toast-notifications";
import { LoginAPI } from "@/services/auth";
import { useSWRAxios } from "@/lib/useSWRAxios";
import { setCookie, setToken, setUser } from "@/utils/cookies";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from 'constants/routes'
import router from 'next/router'

const login = () => {
    const vars = {
        email: 'vikas123@gmail.com',
        password: 'vikas@123'
    }
    const route = useRouter()

    const { addToast } = useToasts()

    const [login, setLogin] = useState(vars)
    const [errors, setErrors] = useState(null)

    const { postSWR } = useSWRAxios();
    const loginProcess = async e => {
        if (login.email && login.password) {
            const { success, data, message } = await postSWR(LoginAPI(login))
            if (success) {
                let { user_data, token, token_type } = data
                setToken(token)
                setCookie('token_type', token_type)
                setUser(user_data)
                addToast(message, { appearance: 'success', autoDismiss: true })
                let redirectRoute = user_data.user_type === 'both' ? '/dashboard' : '/' // '/find-space'
                router.push(redirectRoute)
            } else {
                addToast(message, { appearance: 'error', autoDismiss: true })
            }
        } else {
            setErrors('Enter valid credentials.')
        }
    }

    return (
        <div className="section-signup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb-4">
                            <h1 className="title-sm text-center">Login</h1>
                        </div>
                        {errors && (
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="text-danger text-center font-weight-medium lead mb-3">
                                        {errors}
                                    </p>
                                </div>
                            </div>
                        )}

                        <form id=" " action="">
                            <div className="form-group">
                                <input
                                    defaultValue={login.email}
                                    onChange={(e => setLogin({ ...login, email: e.target.value }))} type="email" name="email"
                                    className={"form-control " + (errors ? 'is-invalid' : '')} placeholder="Email" />
                                <em id="emailerror" className="error invalid-feedback"></em>
                            </div>
                            <div className="form-group">
                                <input
                                    defaultValue={login.password}
                                    onChange={(e => setLogin({ ...login, password: e.target.value }))} type="password" id="password" name="password"
                                    className={"form-control " + (errors ? 'is-invalid' : '')} placeholder="Password" />
                                <em id="password_error" className="error invalid-feedback"></em>
                            </div>
                            <div className="form-group text-right">
                                <Link href={FORGOT_PASSWORD_ROUTE} >
                                    <a className="text-dark-grey font-weight-medium" ><u>Forgot Password ?</u></a>
                                </Link>
                            </div>
                            <div className="form-group pt-3">
                                <button onClick={() => loginProcess()} type="button" id="login-form" className="btn btn-primary btn-block">Login</button>
                            </div>
                            <div className="form-group mt-5">
                                <p className="text-dark-grey text-center font-weight-medium">
                                    I don’t have an account yet? {" "}
                                    <Link href={`${REGISTER_ROUTE}`}>
                                        <a className="text-dark" >Register HERE...</a>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;