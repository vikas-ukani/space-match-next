import Link from "next/link";
import { useForm } from "react-hook-form";

import { LOGIN_ROUTE } from "@/constants/routes";
import { ForgotPasswordAPI } from "@/services/auth";
import { useSWRAxios } from "@/lib/useSWRAxios";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";

const ForgotPasswordPage = () => {
    const { addToast } = useToasts()
    const { register, watch, handleSubmit, formState: { errors } } = useForm()
    const { postSWR } = useSWRAxios()

    const [errorsRes, setErrorsRes] = useState([])

    const onSubmit = async input => {
        const { success, data, message } = await postSWR(ForgotPasswordAPI(input))
        if (success) {
        } else {
            setErrorsRes(message)
        }
    }
    return (
        <div>
            <div className="col-4 offset-4 my-5">
                <div className="container my-5 py-5">
                    <div className="row py-5">
                        <div className="col-lg-12">
                           
                            <div className="section-title mb-4">
                                <h1 className="title-sm text-center">Forgot Password</h1>
                            </div>

                            <form >
                                {errorsRes &&
                                    <div className="row" >
                                        <div className="col-lg-12">
                                            {Object.keys(errorsRes).map((key, idx) => {
                                                return (
                                                    <p className="text-danger text-left font-weight-medium lead mb-3">
                                                        {errorsRes[key]}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                }
                                <div className="form-group">
                                    <input type="text" name="email" placeholder="Email"
                                        className={`form-control ${errors.email?.message && 'is-invalid'}`}
                                        {...register('email', {
                                            required: "Enter email address."
                                        })} />
                                </div>
                                {errors.email && <span className="text-danger">{errors.email?.message} </span>}
                                <div className="form-group">
                                    <button type="button" id="forgot-pwd" className="btn btn-primary btn-block"
                                        onClick={handleSubmit(onSubmit)}>
                                        submit
                                    </button>
                                </div>

                                <Link href={LOGIN_ROUTE} className="font-weight-bold text-dark text-uppercase">
                                        <i className="icon icon-chevron-small-right align-sub pl-3"></i>
                                            Back to login.
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;