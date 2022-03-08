import React, { useState } from 'react';

import style from './form.module.css';

export default function Form({ setParameters, imgUrl, setImgUrl, setImgDisplay }) {
    const [imgText, setImgText] = useState('');
    const [imgBlend, setImgBlend] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [textColor, setTextColor] = useState('');
    const [textSize, setTextSize] = useState('');
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const validators = [];

        if (!imgUrl) validators.push('Please include an image URL');
        if (imgText.length > 50) validators.push('Image text cannot exceed 50 characters');
        if (imgBlend.length > 6 || imgBlend.length < 6) validators.push('Please input a valid hex code for overlay color (i.e. FF5733)');
        if (textColor.length > 6 || textColor.length < 6) validators.push('Please input a valid hex code for text color (i.e. FF5733)');

        return validators;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors.length > 0) {
            return setErrors(errors);
        }

        setParameters({
            txt: imgText,
            blend: imgBlend,
            w: width,
            h: height,
            txtclr: textColor,
            txtsize: textSize
        });
        setImgDisplay(true);
        setErrors([]);
    }

    return (
        <>
            {errors && (
                <ul className={style.mainFormErrors}>
                    {errors.map((error, idx) => (
                        <li
                            className={style.mainFormError}
                            key={idx}
                        >
                            {error}
                        </li>
                    ))}
                </ul>
            )}
            <form
                className={style.mainForm}
                onSubmit={handleSubmit}
            >
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
                        accept='.jpg, .jpeg, .png, .gif, .svg'
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
