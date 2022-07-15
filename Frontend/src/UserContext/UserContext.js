import React, { createContext,useState } from 'react'


export const addContext = createContext();

export const UserProvider = props => {
    const [users,setUsers] = useState([
        {id: 1, name: "keerthi", position: "Front End Dev", salary: 28000},
        {id: 2, name: "sushanth", position: "Data Scientist", salary:26000},
        {id: 3, name:"shiva", position: "Full Stack Dev", salary: 27000}
    ]);

    return(
        <addContext.Provider value={[users,setUsers]}>
            {props.children}
        </addContext.Provider>
    );
};
