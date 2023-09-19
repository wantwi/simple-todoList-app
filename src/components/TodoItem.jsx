import React from 'react'
import * as FaIcons from "react-icons/fa"

const TodoItem = ({text,id, status, handleDelete, handleEdit, handleStatusChange}) => {
  
  return (
    <div className='item-wrapper'>
        
        <div className='text-wrapper' style={{textDecorationLine: status==="Done"?"line-through":"none", color: status==="Done"?"green":"#333" }}>
            <input onClick={()=>handleStatusChange(id)} type="checkbox" />
            <p>
            {text}
            </p>
        </div>
        <div className='actionBtn'>
          {status ==="Done" ? null : <span onClick={()=>handleEdit(id)}>
            <FaIcons.FaEdit/>
           </span>}
           <span  onClick={()=>handleDelete(id)}>
            <FaIcons.FaTrash/>
           </span>
        </div>
        
    </div>
  )
}

export default TodoItem