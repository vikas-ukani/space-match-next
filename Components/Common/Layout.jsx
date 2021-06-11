import { getToken } from "@/utils/cookies";
import { useEffect } from "react";
import Footer from "./Footer"
import FooterBottom from "./FooterBottom"
import HeadScript from "./HeadScript"
import Navigation from "./Navigation";
import router from 'next/router'
import { LOGIN_ROUTE } from "@/constants/routes";
const Layout = ({ children }) => {
    return (
        <div>
            <HeadScript />
            <Navigation />
            {{ ...children }}
            <FooterBottom />
            <Footer />
        </div>
    );
}

export default Layout;