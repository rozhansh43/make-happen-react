import React from 'react'
import Banner from '../../components/banner/Banner'
import profileBanner from '../../assets/img/my profile/bg_my_profile.png'

const myProfile = () => {
    return (
        <div>
            <Banner title={"My Profile"} subTitle1={"Nulla vitae elit libero,"} subTitle2={" a pharetra augue mollis interdum."} path1={"Home"} path2={"Pricing"} src={profileBanner} />
        </div>
    )
}

export default myProfile
