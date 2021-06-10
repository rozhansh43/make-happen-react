import React from 'react'
import Banner from '../../components/banner/Banner'
import profileBanner from '../../assets/img/portfolioDetail/bgPorDetail.png'

const portfolioDetails = () => {
    return (
        <div>
            <Banner title={"Profile deteils"} subTitle1={"Nulla vitae elit libero,"} subTitle2={" a pharetra augue mollis interdum."} path1={"Home"} path2={"profile deteils"} src={profileBanner} />
        </div>
    )
}

export default portfolioDetails
