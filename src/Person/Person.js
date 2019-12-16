import React from 'react'

const person = ( props ) => {

    return (
        <div className="App">
            <h1>{props.children}</h1>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <button onClick={props.hapus}>Tekan</button>
            <input
                type="text"
                onChange={props.ubah}
                value={props.name}/>
        </div>
    )
};

export default person
