import React from 'react'
import Banner from '../../components/banner/Banner'
import pricingBanner from '../../assets/img/pricing/bg_pricing.png'
import "./pricing.css";



const pricing = () => {
    return (
        <>
            <Banner title={"Pricing"} subTitle1={"Nulla vitae elit libero,"} subTitle2={" a pharetra augue mollis interdum."} path1={"Home"} path2={"Pricing"} src={pricingBanner} />
        </>
    )
}

export default pricing
