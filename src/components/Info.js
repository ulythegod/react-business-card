import React from 'react';
import avatar from '../images/avatar.png';
import mail from '../images/Mail.svg';

export default function Info() {
    return (
        <div className="header">
            <img className="avatar" src={avatar} />
            <h1 className="name-title">Julia Skorobogatova</h1>
            <p className="job-name">Junior Frontend Developer</p>
            <a className="website" target="_blank" href= "https://github.com/ulythegod">https://github.com/ulythegod</a>
            <div className="buttons">
                <div className="button email">
                    <a target="_blank" href="mailto:mcrjbddl30mars@gmail.com"><img src={mail}/> Email</a>
                </div>
            </div>
        </div>
    )
}