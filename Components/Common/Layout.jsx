import { getCookie } from "@/utils/cookies";
import { useEffect, useState } from "react";
import Footer from "./Footer"
import FooterBottom from "./FooterBottom"
import HeadScript from "./HeadScript"
import Navigation from "./Navigation";
const Layout = ({ children }) => {
    const [isShowingHeaderNav, setIsShowingHeaderNav] = useState(true)
    useEffect(() => {
        setIsShowingHeaderNav(getCookie('isShowingHeaderNav'))
    })

    return (
        <div>
            <HeadScript />
            {isShowingHeaderNav == true && <Navigation />}
            {{ ...children }}
            <FooterBottom />
            <Footer />
        </div>
    );
}

export default Layout;