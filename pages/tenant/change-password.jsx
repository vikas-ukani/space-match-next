import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav";
import { useSWRAxios } from "@/lib/useSWRAxios";
import { userChangePasswordAPI } from "@/services/auth";
import { redirectToLogin } from "@/utils/route";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";


export const getServerSideProps = async ({ req}) => {
    const { token } = req.cookies 
    /** checking for login token authentication... */
    if (!token) return redirectToLogin()

    return {
        props:{
            
        }
    }
}


const ChangePassword = () => {
    const { postSWR } = useSWRAxios()
    const { register, watch, handleSubmit, formState: { errors, isSubmitted, isSubmitting } } = useForm()
    const { addToast } = useToasts()

    const newpassword = useRef({});
    newpassword.current = watch("newpassword", "");

    /** Submitting Form */
    const onSubmit = async input => {
        const { success, data, message } = await postSWR(userChangePasswordAPI(input))
        if (success) {
            addToast(message, { appearance: "success", autoDismiss: true })
        } else {
            addToast(message, { appearance: "error", autoDismiss: false })
        }
        console.log("success, data, message", success, data, message);
    }

    return (
        <div>
            <DashboardSideNav />
            <div className="content-wrapper">
                <div className="container-fluid row">
                    <div className="section-title border-bottom d-flex align-items-center pb-3 mb-4 col-lg-12">
                        <h4 className="title-sm">Change Password</h4>
                    </div>

                    <form className="col-lg-12 form-dashboard" method="POST">
                        <div className="row justify-content-center">
                            <div className="col-xl-4">
                                <div className="form-group">
                                    <label>Old Password</label>
                                    <input type="password" className="form-control" id="oldpassword" name="oldpassword"
                                        className={`form-control ${errors.oldpassword?.message && 'is-invalid'}`}
                                        {...register('oldpassword', { required: "Please enter old password" })}
                                    />
                                    {errors.oldpassword && <p className="error invalid-feedback">{errors.oldpassword.message}</p>}
                                </div>

                                <div className="form-group">
                                    <label>New Password</label>
                                    <input type="password" className="form-control" id="newpassword" name="newpassword"
                                        className={`form-control ${errors.newpassword?.message && 'is-invalid'}`}
                                        {...register('newpassword', {
                                            required: "Please enter password",
                                            minLength: {
                                                value: 8, message: "Your password must be at least 8 characters long"
                                            }
                                        })}
                                    />
                                    {errors.newpassword && <p className="error invalid-feedback">{errors.newpassword.message}</p>}
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmpassword" name="confirmpassword"
                                        className={`form-control ${errors.confirmpassword?.message && 'is-invalid'}`}

                                        {...register('confirmpassword', {
                                            required: "Please enter confirm password",
                                            minLength: {
                                                value: 8, message: "Your confirm password must be at least 8 characters long"
                                            },
                                            validate: value =>
                                                value === newpassword.current || "Please enter the same password as new password"
                                        })}
                                    />
                                    {errors.confirmpassword && <p className="error invalid-feedback">{errors.confirmpassword.message}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="spinner-border text-warning"  >
                            <span className="sr-only">Loading...</span>
                        </div>

                        <div className="row border-top pt-4">
                            <div className="col-xl-4 ml-auto form-group">
                                <button type="button" className="btn btn-primary btn-block"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit(onSubmit)}>
                                    Add/Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;