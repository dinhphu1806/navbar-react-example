import React from 'react';

const Slider = () => {
    return(
        <div className='slider'>
            <h1 className='slider__title'>Tiêu đề slider</h1>
            <div className='slide__content'>
                <label className='label' htmlFor='text'>Tên đăng nhập</label>
                <input type="text" />
                
                <label className='label' htmlFor='email'>Email</label>
                <input type="email" />
            </div>
        </div>
    )
}

export default Slider;