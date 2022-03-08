import React, { useState } from 'react';

import Form from '../Form'

import style from './main.module.css';

export default function Main() {
    const [parameters, setParameters] = useState({});
    const [imgDisplay, setImgDisplay] = useState(false);

    const [imgUrl, setImgUrl] = useState('');
    const [imgText, setImgText] = useState('');
    const [imgBlend, setImgBlend] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [textColor, setTextColor] = useState('');
    const [textsize, setTextSize] = useState('');

    return (
        <div className={style.mainContainer}>
            <div className={style.mainWrapper}>
                <h1 className={style.mainTitle}>
                    Create Your Image
                </h1>
                <Form
                    setParameters={setParameters}
                    setImgDisplay={setImgDisplay}
                    imgUrl={imgUrl}
                    setImgUrl={setImgUrl}
                    imgText={imgText}
                    setImgText={setImgText}
                    imgBlend={imgBlend}
                    setImgBlend={setImgBlend}
                    height={height}
                    setHeight={setHeight}
                    width={width}
                    setWidth={setWidth}
                    textColor={textColor}
                    setTextColor={setTextColor}
                    textsize={textsize}
                    setTextSize={setTextSize}
                />
            </div>
        </div>
    )
}
