import React, { useState, useEffect } from 'react'
import axios from "axios";
import PhotoCard from "./PhotoCard"

function GetPhoto(props) {
    const [photo, setPhoto] = useState("apod")
    const [date, setDate] = useState("2019-09-11")
    useEffect(() =>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=9vz6H38mfle8aTcPO0SYIvCQ9oAh41FEZJqApzKE&date=${date}`)
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
            <label htmlFor="date">Select a date to get a picture:</label><br />
            <input type="date" min="2017-01-01" max="2019-09-11" id="date" onChange ={function(){
              const selector = document.getElementById("date")
              setDate(selector.value)
            }}></input>
            <PhotoCard id={photo.date} imgUrl={photo.url} desc={photo.explanation} copyright={photo.copyright} title={photo.title} />
        </div>
    )
}

export default GetPhoto

// id={pod.date} imgUrl={pod.url} desc={pod.explanation} copyright={pod.copyright} title={pod.title}
