import React from 'react';
import Weather2 from '../weather/Weather2';
import './Contacts.scss';

class Contacts extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    
    render(){
        return(
            <div className='contacts'>
                <h1>Contacts page</h1>
                <Weather2/>
            </div>
        )
    }
}
export default Contacts;