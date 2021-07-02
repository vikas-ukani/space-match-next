import { getData, postData } from "@/lib/callAPI/call";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useToasts } from "react-toast-notifications";


const RegisterPage = () => {

    const {addToast} = useToasts()


    const [isTenantUser, setIsTenantUser] = useState(false)
    const [isSpaceOwnerUser, setIsSpaceOwnerUser] = useState(false)

    const [provinceList, setProvinceList] = useState([])
    const [selectedProvince, setSelectedProvince] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    const [citiesList, setCitiesList] = useState([])

    const [mobileCountries, setMobileCountries] = useState([])
    const [mobileCountry, setMobileCountry] = useState("")

    const { register, handleSubmit, formState: { errors }, watch } = useForm()



    useEffect(async () => {
        await getProvinceData()
        await getCountriesMobilePrefix()

    }, [])
    const getProvinceData = async () => {
        var response = await getData('/getProvinceList');
        let data = response.data
        var newData = [...data.map(dat => { return { value: dat.id, label: dat.name } })]
        setProvinceList(newData)
    }

    const getCountriesMobilePrefix = async () => {
        var response = await getData('/getCountriesMobilePrefix');
        if (response?.success) {
            let data = response.data
            setMobileCountries([...data.map(dat => { return { value: dat.id, label: dat.name } })])
        }
        // setProvince(response.data) 
    }


    /** GET Cities by Province */
    const getCitiesByProvince = async provinceId => {
        setSelectedProvince(provinceId)
        if (provinceId) {
            var response = await getData('/getCitiesListOfProvince/' + provinceId);
            let data = response.data
            setCitiesList([...data.map(dat => { return { value: dat.id, label: dat.name } })])
        }
    }

    const onSubmit = async input => {
        if (!(isSpaceOwnerUser || isTenantUser)) return
        let space_user_type = ""
        if (isTenantUser == true)
            space_user_type = space_user_type + 'tenant'
        if (isSpaceOwnerUser == true)
            space_user_type = space_user_type + 'landlord'
        if ((isSpaceOwnerUser && isTenantUser))
            space_user_type = "tenant,landlord"
        let inputData = {
            ...input,
            mobile_prefix: mobileCountry,
            provinces: selectedProvince,
            cities: selectedCity,
            termsandcondition: 1,
            space_user_type
        }

        let response = await postData('/register', inputData)
        if (response.success) {
            addToast(response.message, )
        } else {
            addToast(response.message[0][0])
        }
    }

    return (
        <div className="section-signup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5 pt-4">
                        <div className="section-title mb-4 ">
                            <h1 className="title-sm text-center">Register</h1>
                        </div>
                        <form autoComplete="off" >
                            <div className="form-group text-center mb-4">
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" name="tenant_user_types" value="tenant"
                                        checked={isTenantUser} className={`custom-control-input`}
                                    />
                                    <label className="custom-control-label" htmlFor="space_user_types"
                                        onClick={() => setIsTenantUser(!isTenantUser)}
                                    >Space User</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" name="landlord_user_types" value="landlord"
                                        checked={isSpaceOwnerUser} className={`custom-control-input`}
                                    />
                                    <label className="custom-control-label" htmlFor="spaceowner"
                                        onClick={() => setIsSpaceOwnerUser(!isSpaceOwnerUser)}
                                    >Space Owner</label>
                                </div>
                                {!(isSpaceOwnerUser || isTenantUser) && (<em className="text-danger">Please choose any user type as Space User or Space Owner</em>)}
                            </div>

                            <div className="form-group">
                                <input type="text" className={`form-control ${errors.firstname?.message && 'is-invalid'}`} name="firstname" placeholder="Name"
                                    {...register('firstname', {
                                        required: "Please enter name."
                                    })}
                                />
                                {errors.firstname && <span className="text-danger">{errors.firstname?.message} </span>}
                            </div>

                            <div className="form-group">
                                <input type="text" className={`form-control ${errors.surname?.message && 'is-invalid'}`}
                                    name="surname" placeholder="Surname"
                                    {...register('surname', {
                                        required: "Please enter surname."
                                    })}
                                />
                                {errors.surname && <span className="text-danger">{errors.surname?.message} </span>}
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Email"
                                    className={`form-control ${errors.email?.message && 'is-invalid'}`}
                                    {...register('email', {
                                        required: "Please enter email."
                                    })}
                                />
                                {errors.email && <span className="text-danger">{errors.email?.message} </span>}
                            </div>

                            <div className="form-group">
                                <input type="password" name="password" placeholder="Password"
                                    className={`form-control ${errors.password?.message && 'is-invalid'}`}
                                    {...register('password', {
                                        required: "Please enter password."
                                    })}
                                />
                                {errors.password && <span className="text-danger">{errors.password?.message} </span>}

                            </div>

                            <div className="input-group form-group input-prefix">
                                <Select placeholder="Please select mobile prefix" className="custom-select col-md-4" name="mobile_prefix"
                                    defaultValue={mobileCountry} options={mobileCountries} onChange={selected => setMobileCountry(selected?.value)}
                                />
                                <div className="input-group-append col-md-8">
                                    <input type="text" name="mobile" placeholder="Mobile No" maxLength="10"
                                        className={`form-control ${errors.mobile?.message && 'is-invalid'}`}
                                        {...register('mobile', {
                                            required: "Please enter mobile."
                                        })}
                                    />
                                </div>
                                <em className="form-text text-secondary">Format should include 0 after +27 0836012345</em>
                                {errors.mobile && <span className="text-danger"><em > {errors.mobile?.message} </em></span>}
                            </div>

                            <div className="form-group">
                                <input type="text" name="address1" placeholder="Address1"
                                    className={`form-control ${errors.address1?.message && 'is-invalid'}`}
                                    {...register('address1', {
                                        required: "Please enter address1."
                                    })}
                                />
                                {errors.address1 && <span className="text-danger">{errors.address1?.message} </span>}
                                <em className="form-text text-secondary">Please use physical address only</em>
                            </div>

                            <div className="form-group">
                                <input type="text" name="address2" placeholder="Address2"
                                    className={`form-control ${errors.Address2?.message && 'is-invalid'}`}
                                />
                                {errors.Address2 && <span className="text-danger">{errors.Address2?.message} </span>}
                                <em className="form-text text-secondary">Please use physical address only</em>
                            </div>

                            <div className="form-group">
                                <Select placeholder="Please select province" name="provinces"
                                    defaultValue={selectedProvince} options={provinceList} onChange={selected => getCitiesByProvince(selected?.value)}
                                />
                                {/* {errors.provinces && <span className="text-danger">{errors.provinces?.message} </span>} */}
                            </div>

                            <div className="form-group">
                                <Select placeholder="Please select cities" name="cities" className="select22"
                                    defaultValue={selectedCity} options={citiesList} onChange={selected => setSelectedCity(selected.value)}
                                />
                                {/* <select className="select2"  name="cities"
                                    {...register("cities", {
                                        required: "Please select cities"
                                    })}
                                >
                                    <option value="">-Please Select City-</option>
                                </select> */}
                                {errors.cities && <span className="text-danger">{errors.cities?.message} </span>}

                            </div>

                            <div className="form-group">
                                <input type="text" name="post_code" placeholder="Postal Code"
                                    className={`form-control ${errors.post_code?.message && 'is-invalid'}`}
                                    {...register('post_code', {
                                        required: "Please enter post_code."
                                    })}
                                />
                                {errors.post_code && <span className="text-danger">{errors.post_code?.message} </span>}
                            </div>

                            <div className="form-group" >
                                <input type="text" className="form-control" name="entity_name" placeholder="Company name"
                                    className={`form-control ${errors.entity_name?.message && 'is-invalid'}`}
                                    {...register('entity_name', {
                                        required: "Please enter postal code."
                                    })}
                                />
                                {errors.entity_name && <span className="text-danger">{errors.entity_name?.message} </span>}

                            </div>

                            <div className="form-group" >
                                <input type="text" name="vat_number" placeholder="Vat number"
                                    className={`form-control ${errors.vat_number?.message && 'is-invalid'}`}
                                    {...register('vat_number', {
                                        required: "Please enter company name."
                                    })}
                                />
                                {errors.vat_number && <span className="text-danger">{errors.vat_number?.message} </span>}
                                <span className="form-text text-secondary pl-27">Please enter VAT number. If you don’t have a VAT number, enter na.</span>
                            </div>

                            <div className="form-group" >
                                <input type="text" name="registration_number" placeholder="Registration Number"
                                    className={`form-control ${errors.registration_number?.message && 'is-invalid'}`}
                                    {...register('registration_number', {
                                        required: "Please enter registration number."
                                    })}
                                />
                                {errors.registration_number && <span className="text-danger">{errors.registration_number?.message} </span>}

                                <span className="form-text text-secondary pl-27">Please enter registration number. If you don’t have a registration number, enter na.</span>
                                <em className="error invalid-feedback"></em>
                            </div>


                            <div className="form-group px-lg-4 pt-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" name="termsandcondition"
                                        className={`custom-control-input ${errors.termsandcondition?.message && 'is-invalid'}`}
                                    />
                                    <label className="custom-control-label font-weight-normal text-dark-grey" htmlFor="termsandcondition">I agree to the <a className="text-dark-grey" href="{{url('/terms-and-condition')}}" target="_blank"><u>Terms and Conditions</u></a></label>
                                </div>
                                {errors.termsandcondition && <em className="error invalid-feedback">{errors.termsandcondition?.message} </em>}
                            </div>

                            <div className="form-group px-lg-4 mb-4">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" name="subscribed" value="1" />
                                    <label className="custom-control-label font-weight-normal text-dark-grey" htmlFor="subscribed">
                                        Yes please, I would like to receive notifications and information from SpaceMatch.
                                </label>
                                </div>
                            </div>

                            <div className="form-group pt-3">
                                <button type="button" className="btn btn-primary btn-block"
                                    onClick={handleSubmit(onSubmit)}>Register</button>
                            </div>

                            <div className="form-group mt-5">
                                <p className="text-dark-grey text-center font-weight-medium">
                                    I already have an account? Login
                                     <Link href="/auth/login"><a className="text-dark" href="{{ url('/login') }}">HERE</a></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RegisterPage;