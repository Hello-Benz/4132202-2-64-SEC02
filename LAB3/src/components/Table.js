import React from "react";

function genTable(peoples){
    return(peoples.map((people)=>{
        const {id,name:rname,age} = people;
        return(
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
                <td>{age}</td>
            </tr>
        );
    }));
}

function DataTable(){
    const student = [{
        id:1,name:"Benz",age:20
    },{
        id:2,name:"Hong",age:19
    },];
    return (
        <table>
            <tbody>{genTable(student)}</tbody>
        </table>
    );
}

export default DataTable;