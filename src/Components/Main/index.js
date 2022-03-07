import React, { useState } from 'react';

import style from './main.module.css';

export default function Main() {
    const [imgUrl, setImgUrl] = useState('');
    const [imgText, setImgText] = useState('');
    const [imgBlend, setImgBlend] = useState('');

    return (
        <div className={style.mainContainer}>
            <div className={style.mainWrapper}>
                <h1 className={style.mainTitle}>
                    Create Your Image
                </h1>
                <form className={style.mainForm}>
                    <div className={style.mainInputWrapper}>
                        <label
                            className={style.mainLabel}
                            htmlFor='imgLink'
                        >
                            Image URL
                        </label>
                        <input
                            className={style.mainInput}
                            id='imgLink'
                            placeholder='i.e. https://assets.imgix.net/examples/butterfly.jpg'
                            value={imgUrl}
                            onChange={e => setImgUrl(e.target.value)}
                        />
                    </div>
                    <div className={style.mainInputWrapper}>
                        <label
                            className={style.mainLabel}
                            htmlFor='imgText'
                        >
                            Image Text
                        </label>
                        <input
                            className={style.mainInput}
                            id='imgText'
                            placeholder='i.e. Checkout my sweet wings!'
                            value={imgText}
                            onChange={e => setImgText(e.target.value)}
                        />
                    </div>
                    <div className={style.mainInputWrapper}>
                        <label
                            className={style.mainLabel}
                            htmlFor='imgBlend'
                        >
                            Image Overlay Color
                        </label>
                        <input
                            className={style.mainInput}
                            id='imgBlend'
                            placeholder='Hexadecimal form, i.e. 4400bb'
                            value={imgBlend}
                            onChange={e => setImgBlend(e.target.value)}
                        />
                    </div>
                    <button
                        className={style.mainButton}
                    >
                        submit
                    </button>
                </form>
            </div>
        </div>
    )
}
