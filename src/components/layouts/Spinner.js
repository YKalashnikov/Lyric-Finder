import React from 'react';
import spinner from '../layouts/spinner.gif';

export default () => {
    return (
    <div>
        <img
        src={spinner}
        alt = 'Loading..'
        style ={{width:'100px', margin: '40px auto', display: 'block'}}/>
    </div>)
}