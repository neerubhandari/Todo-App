import { connect, RootStateOrAny } from "react-redux";
import { Todo } from '../typesInterface'
import AddTodo from "./AddTodo";
import { ToastContainer } from "react-toastify";
import TodoList from './TodoList'
import '../Style/home.css'
interface HomeProps {
    todo: Todo[]
}
const Home = ({ todo }: HomeProps) => {
    return (
        <div>
            <AddTodo />
            <ToastContainer />
            <div className="home">
                {todo.map((todo) => {
                    return <TodoList key={todo.todo} todo={todo} />
                })}
            </div>
        </div>
    )
}
const mapStateToProps = (state: RootStateOrAny) => ({
    todo: state.TodoReducer.todo,
});
export default connect(mapStateToProps)(Home)