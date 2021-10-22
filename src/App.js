import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Next" />
      <Todo text="Learn Nuxt 3"/>
    </div>
  );
}

export default App;
