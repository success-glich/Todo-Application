import React from 'react'

const Task = ({title,description,index,deleteTax})=>{
    return <div className='task'>
        <div>
          <p>{title}</p>
          <span>{description}</span>
        </div>
        <button onClick={(()=>deleteTax(index))}>-</button>
    </div>

}

export default Task