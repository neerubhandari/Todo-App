import axios from 'axios'
import { useState, SyntheticEvent } from 'react'
import { fetchTodo } from '../Redux/actions';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import '../Style/AddTodo.css'
const AddTodo = () => {
    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState("");
    const signedUpUser =  JSON.parse(localStorage.getItem('user')!);

   function handleSubmit(e: SyntheticEvent){
        e.preventDefault()
        const values = { 
            todo: newTodo,
            completed:false
         }
        axios.post(`http://localhost:3007/user/${signedUpUser.id}/todo`, values, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            dispatch(fetchTodo());
            toast.success("Event Added Successfully")
        })
            .catch((error) => console.log(error))
            setNewTodo('')
    }
    return (
        <div>
            <form className="todoForm">
                <div className="form-group">
                    <input
                        type="text"
                        name="todo"
                        placeholder="Add Todo.."
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        required
                    />
                    <input type="submit" value="+" onClick={(e) => {newTodo?handleSubmit(e) : toast.warn("Must Enter Some Todo")}} />
                </div>
            </form >
        </div>
    )
}
export default AddTodo;