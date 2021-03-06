import React from 'react';

import './Photos.scss';


import { BASE_URL_PHOTO, CLIENT_ID } from "../../settings/settings";

class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.fetchPhoto()
    };

    fetchPhoto = () => {
        const url = `${BASE_URL_PHOTO}?client_id=${CLIENT_ID}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.renderPhoto(data)

            })
    };
    renderPhoto = (data) => {
        let containerImg = document.querySelector('.img-container');
        

        for (let i of data) {
            let li = document.createElement('li');

            let img = document.createElement('img');
            img.src = i.urls.thumb;
            li.appendChild(img)
           
            containerImg.appendChild(li);

        }
        
    };
    render() {
        return (
            <div className='container'>
                <div className='photos'>
                    <h1>Photos page</h1>
                    <div className='img-container'></div>
                </div>
            </div>
        )
    }
}
export default Photos;