function Todo(props) {
  function deleteHandler() {
    console.log("deleted - " + props.text);
  };

  return (
    <div className="card">
      <h2>{ props.text }</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>DELETE</button>
      </div>
    </div>
  );
}

export default Todo;
