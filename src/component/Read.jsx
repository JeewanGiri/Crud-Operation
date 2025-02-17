import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Read = () => {
    const [data,setData]=useState([]);
    const [tabledark,setTabledark]=useState('');

    function getData(){
        axios
        .get('https://6674296c75872d0e0a955b72.mockapi.io/data/crud-data')
        .then((res)=>{
           console.log(res.data)
           setData(res.data);
        });
    }
    useEffect(()=>{
        getData();
    },[]);
    // delete handle
    function handleDelete(id){
        axios
        .delete(`https://6674296c75872d0e0a955b72.mockapi.io/data/crud-data/${id}`           
        ).then(()=>{
            getData()
        })
    }
    // set in local storage
    const setToLocalStorage=(id,name,email)=>{
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
    }
  return (
    <>
    <div className="form-check form-switch">
        <input 
         className="form-check-input"
         type="checkbox"
         onClick={()=>{
            if(tabledark === 'table-dark') setTabledark('');
            else setTabledark("table-dark");
         }}
         />
    </div>
    <div className="d-flex justify-content-between m-2">
    <h2>Read Operation</h2>
    <Link to='/'>
    <button className="btn btn-secondary">Create Data</button>
    </Link>
    </div>      
    <table className={`table ${tabledark}`}>
    <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
    </thead>
    {
        data.map((eachData)=>{
            return(
                <>
                <tbody>
                   <tr>
                       <th scope="row">{eachData.id}</th>
                       <td>{eachData.name}</td>
                       <td>{eachData.email}</td>
                       <td>
                       <Link to="/update">
                       <button className="btn-success"  onClick={()=>setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                       )}>Edit</button>
                       </Link>
                       </td>
                       <td>
                       <button className="btn-danger" onClick={()=>handleDelete(eachData.id)}>Remove</button>
                      </td>
                   </tr>
                </tbody>
                </>
            )
        })
    }
     </table>
    </>
  )
}

export default Read
