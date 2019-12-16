//import Persons from "../Person/Persons";
//import React from "react";
//
// state = {
//     persons: [
//         { id: "123", name: 'Padli', age: 25 },
//         { id: "456", name: 'Edo', age: 30},
//         { id: "457", name: 'Iqbal', age: 30}
//     ]
// };
//
// nameChangeHandler = (event,id) => {
//
//     let persons = this.state.persons;
//     console.log(event);
//     persons.map((person, index) => {
//         if(person.id === id) {
//             persons[index] = { id: id, name : event.target.value, age : 28};
//             this.setState( {
//                 persons: persons
//             });
//         }
//     })
//
// };
//
// hapusData = (id) => {
//     console.log(id)
//     const persons = [...this.state.persons];
//     persons.splice(id,1)
//     this.setState({persons: persons})
// }
//
//
// render() {
//
//     let persons = (
//         <Persons
//             orang={this.state.persons}
//             ubah={this.nameChangeHandler}
//             hapus={this.hapusData}
//         />
//     );
//
//     return (
//         <div className="App">
//             <div>
//                 <p>Testing percobaan</p>
//             </div>
//
//             <button>Ini Button</button>
//             {/*<Person*/}
//             {/*    name={this.state.persons[0].name}*/}
//             {/*    age={this.state.persons[0].age}*/}
//             {/*    ubah={this.nameChangeHandler}*/}
//             {/*    id={this.state.persons[0].id}*/}
//             {/*    tombol={this.changeName}*/}
//             {/*>*/}
//             {/*    Hallo Text*/}
//             {/*</Person>*/}
//             {/*<Person*/}
//             {/*    name={this.state.persons[1].name}*/}
//             {/*    age={this.state.persons[1].age}*/}
//             {/*    id={this.state.persons[1].id}*/}
//             {/*    ubah={this.nameChangeHandler}>*/}
//             {/*</Person>*/}
//
//             {persons}
//         </div>
//     );
// }
