import React, { useState } from 'react'
import './styles/Rating.scss'

const Rating = ({ rating, setRating, setShowThankYouPage }) => {
    const handleSubmit = () => {
        if (!rating) return;

        setShowThankYouPage(true);
    }
    return (
        <div className='rating_container'>
            <img src='icon-star.svg/' alt='' />
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            {[1, 2, 3, 4, 5].map((index) => {
                return (
                    <button key={index} onClick={() => { setRating(index) }}>{index}</button>
                )
            })}
            <button className='submit_btn' onClick={handleSubmit}> sumbit </button>
        </div>
    )
}

export default Rating