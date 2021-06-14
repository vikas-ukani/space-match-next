import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav";
import { getCookie } from "@/utils/cookies";
import { useEffect, useState } from "react";
import Footer from "./Footer"
import FooterBottom from "./FooterBottom"
import HeadScript from "./HeadScript"
import Navigation from "./Navigation";
const Layout = ({ children }) => {
    const [isShowingHeaderNav, setIsShowingHeaderNav] = useState(null)
    useEffect(() => {
        setIsShowingHeaderNav(getCookie('isShowingHeaderNav') == "false" ? false : true )
    })

    return (
        <div>
            {console.log('isShowingHeaderNav', isShowingHeaderNav)}
            <HeadScript />
            {isShowingHeaderNav == null || isShowingHeaderNav == true}
            {(isShowingHeaderNav == null || isShowingHeaderNav === true) && <Navigation />}
            {{ ...children }}
            {(isShowingHeaderNav == null || isShowingHeaderNav == true) && <FooterBottom />}
            <Footer />
        </div>
    );
}

export default Layout;