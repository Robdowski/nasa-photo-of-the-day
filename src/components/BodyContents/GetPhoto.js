import React, { useState, useEffect } from 'react'
import axios from "axios";
import PhotoCard from "./PhotoCard"

function GetPhoto(props) {
    const [photo, setPhoto] = useState("apod")
    const [date, setDate] = useState("apod")
    useEffect(() =>{
        axios
        .get(`https://api.nasa.gov/planetary/${date}?api_key=9vz6H38mfle8aTcPO0SYIvCQ9oAh41FEZJqApzKE`)
        .then(res =>{
            const pod = res.data
            console.log(pod)
            setPhoto(pod)
        })
        .catch(error =>{
            console.log("The Data was not Fetched", error)
        })
    }, [date])
    return (
        <div>
            <PhotoCard id={photo.date} imgUrl={photo.url} desc={photo.explanation} copyright={photo.copyright} title={photo.title} />
        </div>
    )
}

export default GetPhoto

// id={pod.date} imgUrl={pod.url} desc={pod.explanation} copyright={pod.copyright} title={pod.title}
