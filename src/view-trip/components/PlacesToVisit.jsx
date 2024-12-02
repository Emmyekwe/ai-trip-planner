import React from 'react'
import PlaceCardItem from './PlaceCardItem'

const PlacesToVisit = ({ trip }) => {
  return (
    <div>
        <h2 className='font-bold text-lg'>Places to Visit</h2>

        <div>
            {trip?.tripData?.itinerary.map((item, index) => (
                <div className='mt-5' key={index}>
                    <h2 className='font-medium text-lg'>{item.day}</h2>
                    <div className='grid grid-cols-2 gap-5'>
                        {item.plan.map((place, index) => (
                            <div className='' key={index}>
                                <h2 className='font-medium text-sm text-orange-600'>{place?.timeTravel}</h2>
                                <PlaceCardItem place={place} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit
