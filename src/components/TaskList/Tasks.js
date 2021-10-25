import Todo from "./Todo";
import "./todo.css";

function Tasks() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Next" />
      <Todo text="Learn Nuxt 3"/>
    </div>
  );
}

export default Tasks;
