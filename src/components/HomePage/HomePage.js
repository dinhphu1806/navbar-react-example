import React from 'react' // imr
import './HomePage.css'

const HomePage = () => {
    return(
       <div className='home__page'>
            <div className='home__page-title'>
                <h1>Đây là tiêu đề</h1>
            </div>
            <div className='home__page-content'>
                <img
                    src="https://images.unsplash.com/photo-1511289081-d06dda19034d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                    alt="tiêu đề ảnh"
                ></img>
            </div>
       </div>
    )
}

export default HomePage
