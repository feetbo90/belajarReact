import React from 'react'

const counter = ( props ) => {

    return (
        <div className="App">
            <button onClick={()=> props.hitung()}>Tekan</button>
            {props.tambah}
        </div>
    )
};

export default counter;
