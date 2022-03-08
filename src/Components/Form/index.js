import React, { useState } from 'react';

import style from './form.module.css';

export default function Form({ setParameters }) {
    const [imgUrl, setImgUrl] = useState('');
    const [imgText, setImgText] = useState('');
    const [imgBlend, setImgBlend] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [textColor, setTextColor] = useState('');
    const [textSize, setTextSize] = useState('');

    return (
        <>
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
                        type='url'
                        onChange={e => setImgUrl(e.target.value)}
                    />
                </div>
                <div className={style.mainInputWrapper}>
                    <label
                        className={style.mainLabel}
                        htmlFor='imgBlend'
                    >
                        Image Overlay Color: <span className={style.mainSpan}>
                            <a href='https://htmlcolorcodes.com/color-picker/'>Pick a Hex Code Here!</a>
                        </span>
                    </label>
                    <input
                        className={style.mainInput}
                        id='imgBlend'
                        placeholder='Hex # i.e. FF5733'
                        value={imgBlend}
                        type='text'
                        onChange={e => setImgBlend(e.target.value)}
                    />
                </div>
                <div className={style.mainInputWrapper}>
                    <label
                        className={style.mainLabel}
                        htmlFor='height'
                    >
                        Image Height
                    </label>
                    <input
                        className={style.mainInput}
                        id='height'
                        placeholder='i.e. 320px'
                        value={height}
                        type='number'
                        onChange={e => setHeight(e.target.value)}
                    />
                </div>
                <div className={style.mainInputWrapper}>
                    <label
                        className={style.mainLabel}
                        htmlFor='width'
                    >
                        Image Width
                    </label>
                    <input
                        className={style.mainInput}
                        id='width'
                        placeholder='i.e. 640px'
                        value={width}
                        type='number'
                        onChange={e => setWidth(e.target.value)}
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
                        type='text'
                        onChange={e => setImgText(e.target.value)}
                    />
                </div>
                <div className={style.mainInputWrapper}>
                    <label
                        className={style.mainLabel}
                        htmlFor='textColor'
                    >
                        Text Color: <span className={style.mainSpan}>
                            <a href='https://htmlcolorcodes.com/color-picker/'>Pick a Hex Code Here!</a>
                        </span>
                    </label>
                    <input
                        className={style.mainInput}
                        id='textColor'
                        placeholder='i.e. FF5733'
                        value={textColor}
                        type='text'
                        onChange={e => setTextColor(e.target.value)}
                    />
                </div>
                <div className={style.mainInputWrapper}>
                    <label
                        className={style.mainLabel}
                        htmlFor='textSize'
                    >
                        Text Size
                    </label>
                    <input
                        className={style.mainInput}
                        id='textSize'
                        placeholder='i.e. 24px'
                        value={textSize}
                        type='number'
                        onChange={e => setTextSize(e.target.value)}
                    />
                </div>
                <button
                    className={style.mainButton}
                >
                    Create
                </button>
            </form>
        </>
    )
}
