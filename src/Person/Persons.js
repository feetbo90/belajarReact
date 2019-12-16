import React, { Component } from 'react';
import Person from "./Person";
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/index';
import AddPerson from '../AddPerson/AddPerson';
import Counter from '../Counter/Counter';
import * as actionType from '../store/actions/actionTypes';

class Persons extends Component {


    render() {
        console.log(this.props.ikan);
        return (
        <div>
            <AddPerson personAdded={this.props.onAddedPerson} />
            <Counter hitung={this.props.addCount}
                     tambah={this.props.baruTambah}
            />

            {this.props.ikan.map(person => (

               <Person
                   name={person.name}
                   age={person.age}
                   ubah={event => this.props.ubah(event, person.id)}
                   hapus={()=> this.props.onRemovePerson(person.id)}
                   key={person.id}
               ><p>Halo cuy</p></Person>
        ))}
        </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        ikan: state.result.persons,
        baruTambah: state.ctr.counter
    };
};

const mapDispatchToProps = dispatch => {
  return {
      onRemovePerson: (id) => dispatch(actionTypes.deleteResult(id)),
      addCount: () => dispatch(actionTypes.addCounter()),
      onAddedPerson: (name, age) => dispatch(actionTypes.addResult(name,age))
  }

};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);
