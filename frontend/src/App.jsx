import axios from 'axios'
import { useState,useEffect} from 'react'
import './App.css'
import Form from './Components/Form'
import ListItem from './Components/ListItem'
function App() {
   const [data,setData] =useState('')

  return (
    <div className='flex justify-center mt-10'>
        <div className='bg-gray-200 py-40 px-80'>
        <h1 className='text-indigo-700 text-4xl font-bold'>Tasks</h1>
        <div className='flex mt-4 flex-col'>
        <Form/>
        <ListItem data={data} setData={setData}/>
        </div>
        </div>





    </div>
  )
}

export default App
