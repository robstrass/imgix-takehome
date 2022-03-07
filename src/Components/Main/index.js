import React, { useState } from 'react';

import style from './main.module.css';

export default function Main() {
    const [imgUrl, setImgUrl] = useState('');

    return (
        <div className={style.mainContainer}>
            <div className={style.mainWrapper}>
                <h1>Create Your Image</h1>
            </div>
        </div>
    )
}
