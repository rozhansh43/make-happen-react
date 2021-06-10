import React from 'react'
import './Banner.scss'
const Banner = (props) => {
    console.log(props.src)
    return (
        <div class="banner-container   " style={
            {
                backgroundImage: `url('${props.src}')`
            }
        }>
            <div class="banner-text">
                <h1>{props.title}</h1>
                <p>
                    {props.subTitle1}
                </p>
                <p>
                    {props.subTitle2}
                </p>
            </div>
            {/* page addres ===props  */}
            <div class="page-address  ">
                <div class="container ">
                    <a class="path" href="/">{props.path1}</a> <span>/</span> <a href="#">{props.path2}</a>
                </div>
            </div>
        </div>
    )
}

export default Banner
