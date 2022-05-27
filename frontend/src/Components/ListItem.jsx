import axios from "axios"
import { useEffect,useState } from "react"
const ListItem = ({data,setData}) => {
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/tasks').then((res)=> {
             setData(res.data)
         }).catch((err)=> {
             console.log(err);
         })
   },)
   const deleteAllHandler = (e,key) => {
    const items =data.map((item) =>  axios.delete(`http://localhost:5000/api/v1/tasks/${item._id}`))
}
const deletehandler = (item) => {
    console.log('sds');
}
if (!data) return null;
const items =data.map((item) =>  <li className="bg-violet-400 m-2 flex gap-28" prop={item._id} key={item._id}>{item.name} <button className="bg-red-400" onClick={deletehandler(item)}>delete</button></li>)

    return (
        <div >
            <button onClick={deleteAllHandler}>Delete All</button>
            {items}</div>
    )
}
export default ListItem
