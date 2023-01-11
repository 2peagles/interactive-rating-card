import React from 'react'
import './styles/Rating.scss'
// import Ratings from './Ratings'

const Thankyou = ({ rating }) => {
    return (
        <div className='thankyou_container'>
            <img src='illustration-thank-you.svg' alt='thank you for rating' />
            <p>You selected  {rating} out of 5</p>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}

export default Thankyou