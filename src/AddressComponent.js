"use client"


import { useEffect, useRef } from 'react'
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';


const AddressComponent = () => {


const inputRef = useRef();


const handleLocationUpdate = () =>{
    const [ place ] = inputRef.current.getPlaces();
        
        // Console the coordinates whenever the location is updated
        if(place){
            console.log(place.formatted_address);
            console.log(place.geometry.location.lat());
            console.log(place.geometry.location.lng());
        }
    }


    useEffect(() => console.log("API Key:\t",process.env.GOOGLE_MAPS_API_KEY));


return (
    <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
    >
        <StandaloneSearchBox
            onLoad={ref => (inputRef.current = ref)}
            onPlacesChanged={handleLocationUpdate}
        >
            <input
                type="text"
                className='form-control'
                placeholder='Enter the Location...'
            />
        </StandaloneSearchBox>
    </LoadScript>
    )
}


export default AddressComponent