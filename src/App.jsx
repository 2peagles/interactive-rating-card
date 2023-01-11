import { useState } from 'react'
import Thankyou from './Thankyou'
import Rating from './Rating'

function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <div className="App">
      {/* handles communication between the two pages */}
      {showThankYouPage ? (
        <Thankyou rating={rating} />
      ) : (
        <Rating rating={rating} setRating={setRating} setShowThankYouPage={setShowThankYouPage} />
      )}
    </div>
  )
 }
export default App
