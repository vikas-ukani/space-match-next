import router from "next/router";
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = inputData => {
        console.log('Final Inpu t', inputData);

        /** Call Contact US API. and then redirect. */

        router.push('/contact-us/thank-you')
    }

    return (
        <section className="section-contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb-5">
                            <h1 className="title-sm text-center">
                                Contact Info
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4 mr-auto">
                            <div className="contact-box contact-box2 clearfix">
                                <div className="contact-box-circle">
                                    <img src="https://spacematch.mydevsite.co.za/images/icon-email.png" />
                                </div>

                                <h5>Email Us</h5>
                                <a href="mailto:info@spacematch.co.za">info@spacematch.co.za</a>
                            </div>

                            <div className="contact-box contact-box2 clearfix">
                                <div className="contact-box-circle">
                                    <img src="https://spacematch.mydevsite.co.za/images/icon-phone.png" />
                                </div>
                                <h5>Call Us</h5>
                                <a href="tel:270871333883">+27 087 133 3883</a>
                            </div>

                            <div className="contact-box contact-box2 clearfix">
                                <div className="contact-box-circle">
                                    <img src="https://spacematch.mydevsite.co.za/images/icon-hours.png" />
                                </div>
                                <h5>Opening Hours</h5>
                                <p>Monday to Friday - 9am to 5pm</p>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form id="contact-us-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="contact_first_name" id="contact_first_name"
                                                placeholder="First Name"
                                                className={`form-control ${errors.contact_first_name?.message && 'is-invalid'}`}
                                                {...register('contact_first_name', { required: "Please enter First Name." })}
                                            />
                                            {errors.contact_first_name && <em className="error text-danger"> {errors.contact_first_name?.message}</em>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="contact_last_name" id="contact_last_name"
                                                className="form-control" placeholder="Last Name"
                                                className={`form-control ${errors.contact_last_name?.message && 'is-invalid'}`}
                                                {...register('contact_last_name', { required: 'Please enter Last Name.' })}
                                            />
                                            {errors.contact_last_name && <em className="error text-danger"> {errors.contact_last_name?.message}</em>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="contact_email" id="contact_email" 
                                                placeholder="Email"
                                                className={`form-control ${errors.contact_email?.message && 'is-invalid'}`}
                                                {...register('contact_email', { required: "Please enter Email." })}
                                            />
                                            {errors.contact_email && <em className="error text-danger"> {errors.contact_email?.message}</em>}

                                        </div>

                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="contact_phone" id="contact_phone" className="form-control"
                                                placeholder="Phone" maxlength="10"
                                                className={`form-control ${errors.contact_phone?.message && 'is-invalid'}`}
                                                {...register('contact_phone', { required: "Please enter Phone." })}
                                            />
                                            {errors.contact_phone && <em className="error text-danger"> {errors.contact_phone?.message}</em>}


                                        </div>
                                         
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Desciption"
                                                name="contact_desciption" id="contact_desciption"
                                                className={`form-control ${errors.contact_desciption?.message && 'is-invalid'}`}
                                                {...register('contact_desciption', { required: "Please enter Description." })}
                                            >
                                            </textarea>
                                            {errors.contact_desciption && <em className="error text-danger"> {errors.contact_desciption?.message}</em>}

                                        </div>
                                     </div>

                                    <div className="col-lg-12">
                                        <button className="btn btn-primary" id="send_message" type="button"
                                            onClick={handleSubmit(onSubmit)}>
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;