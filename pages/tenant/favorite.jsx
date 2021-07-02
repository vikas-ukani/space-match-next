import HomePageSpaceMultipleSlides from "@/Components/Common/Sliders/Home/HomePageSpaceMultipleSlides";
import SpaceImageSlider from "@/Components/Common/Sliders/Home/HomePageSpaceMultipleSlides/SpaceImageSlider";
import FavoriteImageSlider from "@/Components/Common/Sliders/Tenant/Favorite/FavoriteImageSlider";
import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav";
import { useSWRAxios } from "@/lib/useSWRAxios";
import { getFavoritesAPI } from "@/services/tenant/favorits";
import { getUser } from "@/utils/cookies";
import { getSmallImageUrl } from "@/utils/image_path";
import { redirectToLogin } from "@/utils/route";
import { useEffect, useState } from "react";

export const getServerSideProps = async ({ req}) => {
    const { token } = req.cookies 
    /** checking for login token authentication... */
    if (!token) return redirectToLogin()

    return {
        props:{
            
        }
    }
}


const Favorite = () => {
    const [favorites, setFavorites] = useState(null)
    const user = getUser()

    const { getSWR } = useSWRAxios()

    useEffect(async () => {
        const { data: { data }, success, error } = await getSWR(getFavoritesAPI())
        setFavorites(data)
        console.log("Final data, success, error", data, success, error);
    }, []);


    return (
        <div>
            <DashboardSideNav />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title border-bottom d-flex align-items-center pb-3 mb-4 ">
                                <h4 className="title-sm">My Favorites</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row" >
                        {!favorites && <div className="col-lg-6">You do not have any space in favorite list.</div>}
                        {favorites && favorites.map((list, idx) => {
                            return (
                                <div className="col-lg-6" key={idx}>
                                    <div className="space-item mt-4">
                                        <div className="mb-5 space-item ">
                                            <div className="">
                                                <FavoriteImageSlider setting={{ dots: true}} favoriteImages={list.spacePropertyImages}   />
                                                {/* <SpaceImageSlider spaceDetail={list} /> */}
                                            </div>
                                        </div>
                                        {/* removeFromFavoriteList({{$space->id}},this */}
                                        {/* {(user.is_staff == 0) || (user.is_staff == 1 && user.permission_name == 'write') && */}
                                            <a className="space-delete" title="Remove as Favourite" >
                                                <i className="icon icon-circle-delete"></i>
                                            </a>
                                        {/* } */}

                                        <a className="space-title text-truncate" href="/space/{{$space->slug}}">
                                            {list?.name}
                                        </a>
                                        <div className="d-md-flex justify-content-between">
                                            <p className="space-address text-truncate">
                                                {list?.full_address}
                                            </p>
                                            <p className="space-size">
                                                {list?.property_size} m²
                                            </p>
                                        </div>
                                        <div className="d-md-flex justify-content-between align-items-center">
                                            {list?.daily_rate &&
                                                <p className="space-price">
                                                    R <span className="space-size d-block">per day</span>
                                                </p>
                                            }
                                            {
                                                list?.weekly_rate &&
                                                <p className="space-price">
                                                    R {list?.weekly_rate}
                                                    <span className="space-size d-block">per week</span>
                                                </p>
                                            }
                                            {list.monthly_rate &&
                                                <p className="space-price">
                                                    R {list.monthly_rate}
                                                    <span className="space-size d-block">per month</span>
                                                </p>
                                            }
                                        </div>
                                        <div className="border-bottom border-top mt-3 mb-4 py-3 d-lg-flex justify-content-between">
                                            <p className="w-lg-50 mb-1">
                                                {list?.portfolio?.portfolio_name}
                                            </p>
                                            <p className="w-lg-50 mb-1 text-lg-right">
                                                {list?.company?.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </div>

        </div>
    );
}

export default Favorite;