import React, { useState, useEffect } from 'react';

import Form from '../Form'
import { encode } from '../../utils'

import style from './main.module.css';

export default function Main() {
    const [parameters, setParameters] = useState({});
    const [imgUrl, setImgUrl] = useState('');
    const [imgDisplay, setImgDisplay] = useState(false);



    useEffect(() => {
        console.log(encode(parameters, imgUrl));
    }, [parameters]);

    return (
        <div className={style.mainContainer}>
            <div className={style.mainWrapper}>
                <h1 className={style.mainTitle}>
                    Create Your Image
                </h1>
                <Form
                    setParameters={setParameters}
                    imgUrl={imgUrl}
                    setImgUrl={setImgUrl}
                    setImgDisplay={setImgDisplay}
                />
            </div>
        </div>
    )
}
