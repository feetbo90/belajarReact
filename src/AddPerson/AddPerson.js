import React, { Component } from 'react';


class AddPerson extends Component {


    state = {
        name : '', age: ''
    }

    nameChangeHandler = ( event ) => {
        this.setState({name: event.target.value})
    }

    ageChangeHandler = ( event ) => {
        this.setState({age: event.target.value})
    }


    render() {
        return (
            <div className="App">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangeHandler}
                    value={this.state.name}
                />
                <input
                    type="text"
                    placeholder="Age"
                    onChange={this.ageChangeHandler}
                    value={this.state.age}
                />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Halo</button>
            </div>
        );
    }

}

export default AddPerson;
