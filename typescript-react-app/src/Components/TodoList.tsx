import "../Style/TodoList.css"
import { Todo } from '../typesInterface'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { fetchTodo } from '../Redux/actions';
import axios from "axios";
import { toast } from "react-toastify";
import { connect, useDispatch, RootStateOrAny } from "react-redux";
const trash = <FontAwesomeIcon icon={faTrash} />;
interface Props {
    todo: Todo
}
function TodoList({ todo }: Props) {
    const dispatch = useDispatch();
    const handleTogglee = (selectedTodo: Todo) => {
        if (todo.id === selectedTodo.id) {
            todo.completed = !todo.completed;
        }
        axios.patch(`http://localhost:3007/todo/${todo.id}`, todo, {
            headers: {
                "Content-Type": "application/json"},
        })
        dispatch(fetchTodo());
}
    const deleteData = async (id: any) => {
        await axios.delete(`http://localhost:3007/todo/${id}`).then((res) => {
            dispatch(fetchTodo());
            toast.error("Deleted Successfully")
        });
    };
    return (
        <div className="list">
            <label className={todo.completed ? "complete" : undefined}>
                <input type="checkbox" checked={todo.completed} onChange={() => handleTogglee(todo)} />
                {todo.todo}
            </label>
            <span className="trash" onClick={() => deleteData(todo.id)}>{trash}</span>        </div>
    )
}
const mapStateToProps = (state: RootStateOrAny) => ({
    todos: state.TodoReducer.todo,
});
export default connect(mapStateToProps)(TodoList);