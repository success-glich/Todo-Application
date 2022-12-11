import React, { useEffect, useState } from 'react'
import Task from './Task';


const Home = () => {

            const initialArray= localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks,setTasks]= useState(initialArray);
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");
    console.log(tasks);
    const submitHandler =(e)=>{
        e.preventDefault();
        setTasks([...tasks,{
            title,
            description
        }]);


    }
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))

    },[tasks])
    const deleteTax= (index)=>{

        const filterArr= tasks.filter((val,i)=>{
            return i!==index
        })

        setTasks(filterArr);




    }

  return (
    <div className='container'>
        <h1>DAILY GOALS</h1>
        <form onSubmit={submitHandler} >

            <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea 
            value={description} onChange={(e)=>setDescription(e.target.value)}
            placeholder='Description'
            ></textarea>

            <button type='submit'> ADD</button>
        </form>
        {tasks.map((item,index)=>(

            <Task  key={index} title={item.title} description={item.description} deleteTax={deleteTax} index={index}/>
        )



                
        
        

        )}
    </div>
  )
}

export default Home