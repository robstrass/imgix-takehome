import React, { useState, useEffect } from 'react';

import Form from '../Form';
import DisplayImage from '../DisplayImage';
import { encode } from '../../utils';

import style from './main.module.css';

export default function Main() {
    const [parameters, setParameters] = useState({});
    const [imgUrl, setImgUrl] = useState('');
    const [imgDisplay, setImgDisplay] = useState(false);
    const [finalUrl, setFinalUrl] = useState('');


    useEffect(() => {
        if (parameters !== {}) {
            setFinalUrl(encode(parameters, imgUrl));
            console.log('final', finalUrl)
        }
    }, [parameters]);

    return (
        <div className={style.mainContainer}>
            <div className={style.mainWrapper}>
                <h1 className={style.mainTitle}>
                    Create Your <span>Image</span>
                </h1>
                <Form
                    setParameters={setParameters}
                    imgUrl={imgUrl}
                    setImgUrl={setImgUrl}
                    setImgDisplay={setImgDisplay}
                />
            </div>
            {imgDisplay && (
                <DisplayImage
                    finalUrl={finalUrl}
                />
            )}
        </div>
    )
}
