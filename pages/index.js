import { useEffect } from 'react'
import BannerImages from '../Components/HomePage/BannerImages'
import HomeBlogSliders from '../Components/HomePage/HomeBlogSliders'
import MallsSliders from '../Components/HomePage/MallsSliders'
import SpaceSliders from '../Components/HomePage/SpaceSliders'
import DelightSection from '../Components/HomePage/DelightSection'
import BrandListing from '../Components/HomePage/BrandListing'
import SASuburbsAndCities from '@/Components/HomePage/SASuburbsAndCities/index'
import { setCookie } from '@/utils/cookies'

export default function Home() {
    useEffect(() => {
        setCookie('isShowingHeaderNav', true)
    });

    return (
        <div  >
            {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
            <BannerImages />
            <SpaceSliders />
            <SASuburbsAndCities />
            <MallsSliders />
            <HomeBlogSliders />
            <DelightSection />
            <BrandListing />
        </div>
    )
}
