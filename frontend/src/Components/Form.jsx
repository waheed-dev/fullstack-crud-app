import { useState,useEffect } from "react"
import axios from "axios"
const Form = () => {
    const [value,setValue]=useState('')
    const submitHandler = async (e) => {
        e.preventDefault()
       await axios.post('http://localhost:5000/api/v1/tasks',{name : value}).then((res) =>{
           console.log(res);
       })
        setValue('')
    }
    const changeHandler = (e) => {
       setValue(e.target.value)
    }
    return (
    <form onSubmit={submitHandler}>
        <input type="text" value={value} onChange={changeHandler} />
        <button type="submit">Add</button>
    </form>
    )
}
export default Form
