import React from 'react';
import avatar from '../images/avatar.png';
import telegram from '../images/telegram.png';

export default function Info() {
    return (
        <div className="header">
            <img className="avatar" src={avatar} />
            <h1 className="name-title">Julia Skorobogatova</h1>
            <p className="job-name">Intern/Junior Frontend Developer</p>
            <a className="website" target="_blank" href= "https://github.com/ulythegod">https://github.com/ulythegod</a>
            <div className="buttons">
                <div className="button telegram">
                    <a target="_blank" href="https://t.me/ulythevoland"><img src={telegram}/> Telegram</a>
                </div>
            </div>
        </div>
    )
}