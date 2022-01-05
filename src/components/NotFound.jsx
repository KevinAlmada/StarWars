import React from 'react'

const NotFound = ({error,page = null,setPage=null,type=null}) => {
    const clickHandler =() => {
        setPage(page - 1)
    }
    return (
        <div className='NotFoundYoda'>
            <h2>{error}</h2>
            <lottie-player src="https://assets6.lottiefiles.com/animated_stickers/lf_tgs_a01runig.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px"}}  loop  autoplay></lottie-player>
            {
                type === "noPlanets" ? <button className='goBackButton defButton' onClick={clickHandler}>Go BaCK</button> : null
            }
            
        </div>
    )
}

export default NotFound
