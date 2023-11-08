import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [work, setWork] = useState("")
  const [mylist, setMylist] = useState([])
  const [isEdit, setIsEdit] = useState(false)

  const [newWork, setNewWork] = useState("")
  const [myEdit, setMyEdit] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    if(work.length!= 0){
      setMylist([...mylist,work])
    }
    setWork("")
  }

  const handleDelete = (index) => {
    setNewWork("")
    const myArr = mylist
    myArr.splice(index,1)
    setMylist([...myArr])
  }

  const handleEdit = (index) => {
    setIsEdit(true)
    setMyEdit(index)
  }

  const handleCancle = () => {
    setIsEdit(false)
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const myArr = mylist
    myArr.splice(myEdit,1,newWork)
    setIsEdit([...myArr])
    setNewWork("")
    setMyEdit("")
    setIsEdit(false)
  }

  useEffect(()=>{
    setWork("")
    setNewWork("")
  }, [isEdit])

  return (
    <>
      {isEdit?<form onSubmit={(e)=>handleUpdate(e)}>
        <label>Edit id {myEdit}
          <input 
            type="text" 
            value={newWork}
            onChange={(e) => setNewWork(e.target.value)}
          />
        </label>
        <button type="submit" >Update</button>
        <button type='button' onClick={()=>handleCancle()}>cancel</button>
      </form>:
      <form onSubmit={(e)=>handleSubmit(e)}>
      <label>Enter to do list
        <input 
          type="text" 
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
      </label>
      <button type="submit">Submit!</button>
      </form>}
      {mylist.map((name, index) => (
          <li key={index}>{name}
          <button onClick={()=>handleDelete(index)}>x</button>
          <button onClick={()=>handleEdit(index)}>Edit</button>
          </li>
      ))}
    </>
  )
}

export default App
