import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav";
import { useSWRAxios } from "@/lib/useSWRAxios";
import { getMe, updateProfileAPI } from "@/services/auth";
import { getCitiesByProvinceId, getCitiesByProvinceIdAPI, getProvinceList } from "@/services/common";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useToasts } from "react-toast-notifications";

const TenantProfile = () => {
    const { getSWR, postSWR } = useSWRAxios()
    const {addToast} = useToasts()

    const [dropdownIds, setDropdownIds] = useState({
        province_id: null,
        city_id: null,
    })
    const [dropdownOptions, setDropdownOptions] = useState({})
    const { register, setValue, handleSubmit, reset, formState: { errors, isSubmitted, isSubmitting } } = useForm({ mode: 'onBlur' })

    useEffect(() => {
        getUserData()
        getProvinceData()
        getCityByProvinceId()
    }, [register]);

    const getUserData = async () => {
        const { data } = await getSWR(getMe())
        if (data?.id) {
            console.log("Check Data", data);
            setDropdownIds({ ...dropdownIds, province_id: data.province_id, city_id: data.city_id })
            reset({
                ...data,
                name: data.firstname,
                mobileno: data.mobile,
                post_code: data.postal_code
            });
        }
    }

    const getProvinceData = async () => {
        const { success: provincesSuccess, data: provinces, message: provincesMessage } = await getSWR(getProvinceList())
        if (provincesSuccess) {
            const options = [...provinces.map(list => { return { "value": list.id, "label": list.name } })];
            setDropdownOptions({ ...dropdownOptions, provinceOptions: options })
        }
    }

    const dropdownChange = key => province_id => {
        setDropdownIds({ ...dropdownIds, [key]: province_id.value })
        if (key == 'province_id') getCityByProvinceId()
    }

    const getCityByProvinceId = async () => {
        const { province_id } = dropdownIds
        if (province_id) {
            const { success, data, message } = await getSWR(getCitiesByProvinceIdAPI(province_id))
            if (data) {
                const options = [...data.map(list => { return { "value": list.id, "label": list.name } })];
                setDropdownOptions({ ...dropdownOptions, citiesOptions: options })
            }
        }
    }

    const onSubmit = async input => {
        console.log("input", input);
        input.provinces = input.province_id
        input.cities = input.city_id
        const { success, data, message } = await postSWR(updateProfileAPI(input))
        if (success) {
            addToast(message, { appearance: "success", autoDismiss: true })
        } else {
            Object.keys(message).map(key => {
                console.log("message[key]", message[key]);
                addToast(message[key], {appearance: "error" , autoDismiss: true})
            })
        }
        console.log("success, data, message", success, data, message);
    }

    return (
        <div>
            <DashboardSideNav />
            <link rel="stylesheet" href="/css/dashboard.css" />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title border-bottom d-flex align-items-center pb-3 mb-4 ">
                                <h4 className="title-sm">Profile Detail</h4>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <form className="form-dashboard" id="updateProfileForm" method="POST">
                                <div className="row" id="success-message">
                                    <div className="col-lg-12">
                                        <p className="text-success text-center font-weight-medium lead mb-3" id="success-message-show"></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="form-group">
                                            <label>Name*</label>
                                            <input type="text" className="form-control" id="name" name="name"
                                                className={`form-control ${errors.name?.message && 'is-invalid'}`}
                                                {...register("name", {
                                                    required: "Name is required."
                                                })}
                                            />
                                            {errors.name && <p className="error invalid-feedback">{errors.name.message}</p>}
                                            <em id="name_error" className="error invalid-feedback"></em>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="form-group">
                                            <label>Surname*</label>
                                            <input type="text" id="surname" name="surname"
                                                className={`form-control ${errors.surname?.message && 'is-invalid'}`}
                                                {...register("surname", {
                                                    required: "Sirname is required."
                                                })}
                                            />
                                            {errors.surname && <p className="text-danger">{errors.surname.message}</p>}
                                            <em id="surname_error" className="error invalid-feedback"></em>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" className="form-control" id="email" name="email" readOnly
                                                className={`form-control ${errors.email?.message && 'is-invalid'}`}
                                                {...register("email", {
                                                    required: "Email is required."
                                                })}
                                            />
                                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                            <em id="email_error" className="error invalid-feedback"></em>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <label>Mobile No*</label>
                                        <div className="input-group form-group input-prefix">
                                            <select className="custom-select form-control" id="mobile_prefix" name="mobile_prefix">
                                                {/* @foreach ($countriesMobilePrefiXList as $item) */}
                                                <option
                                                // @if($user_detail->mobile_prefix == $item->mobile_prefix)
                                                // selected
                                                // @endif
                                                // value="{{ $item-> mobile_prefix}}">
                                                // +{{ $item-> mobile_prefix}}
                                                >
                                                    Mob Prefix
                                                </option>
                                                {/* @endforeach */}
                                            </select>
                                            <div className="input-group-append">
                                                <input type="text" className="form-control" id="mobileno" name="mobileno" maxLength="10"
                                                    className={`form-control ${errors.mobileno?.message && 'is-invalid'}`}
                                                    {...register("mobileno", {
                                                        required: "Mobile is required."
                                                    })}
                                                />
                                            </div>
                                            <em id="mobileno_error" className="error invalid-feedback"></em>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="form-group">
                                            <label>Address1*</label>
                                            <input type="text" id="address1" className="form-control" name="address1"
                                                className={`form-control ${errors.address1?.message && 'is-invalid'}`}
                                                {...register("address1", {
                                                    required: "Address is required."
                                                })}
                                            />
                                            {errors.address1 && <p className="text-danger">{errors.address1.message}</p>}
                                            <em id="address1_error" className="error invalid-feedback"></em>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="form-group">
                                            <label>Address2</label>
                                            <input type="text" id="address2" name="address2"
                                                className={`form-control `}
                                                {...register("address2")}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="form-group">
                                            <label className="mb-1">Province*</label>
                                            <Select
                                                defaultValue={dropdownIds?.province_id}
                                                placeholder={"Select Province"}
                                                clearable={true}
                                                onChange={dropdownChange('province_id')}
                                                options={dropdownOptions?.provinceOptions}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="form-group">
                                            <label className="mb-1">City*</label>
                                            <Select
                                                placeholder={"Select city"}
                                                clearable={true}
                                                defaultValue={dropdownIds?.city_id}
                                                onChange={dropdownChange('city_id')}
                                                options={dropdownOptions?.citiesOptions}
                                            />
                                            {/* <select className="select2" id="cities" name="cities">
                                                <option value="">-Please Select City-</option>
                                            </select> */}
                                            <em id="cities_error" className="error invalid-feedback"></em>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="form-group">
                                            <label>Postal Code*</label>
                                            <input type="text" id="post_code" className="form-control" name="post_code"
                                                className={`form-control ${errors.post_code?.message && 'is-invalid'}`}
                                                {...register("post_code", {
                                                    required: "Post Code is required."
                                                })}
                                            />
                                            {errors.post_code && <p className="text-danger">{errors.post_code.message}</p>}
                                            <em id="post_code_error" className="error invalid-feedback"></em>
                                        </div>
                                    </div>
                                </div>

                                <div className="row border-top pt-4">
                                    <div className="col-xl-4 ml-auto">
                                        <div className="form-group">
                                            <button type="button" className="btn btn-primary btn-block" id="updateProfile"
                                                onClick={handleSubmit(onSubmit)}>Add/Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TenantProfile;