import React from 'react'

const Loading = () => {
    return (
        <div className='loadingSpinner'>
            <lottie-player src="https://assets9.lottiefiles.com/datafiles/gOmQY1zTDjVApxV/data.json"  background="transparent"  speed="1"  style={{width: "200px", height: "200px"}}  loop  autoplay></lottie-player>
        </div>
    )
}

export default Loading
