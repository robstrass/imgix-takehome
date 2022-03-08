import React from 'react';

import style from './displayImage.module.css';

export default function DisplayImage({ finalUrl }) {
    return (
        <div className={style.displayContainer}>
            <h1 className={style.displayTitle}>View Your Creation!</h1>
            <div className={style.displayUrlWrapper}>
                <p className={style.displayUrlLabel}>
                    Your New Image URL:
                </p>
                <p className={style.displayUrl}>
                    <a
                        href={finalUrl}
                        target='_blank'
                        rel='noreferrer'
                    >{finalUrl}</a>
                </p>
            </div>
            <div className={style.displayImgHolder}>
                <img
                    className={style.displayImg}
                    src={finalUrl}
                    alt='Your new image'
                />
            </div>
        </div>
    )
}
