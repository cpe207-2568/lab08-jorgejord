function TaskInput() {
  return (
    <div className="m-2 p-2">
      <form className="row">
        <div className="col-9">
          <input
            className="form-control"
            placeholder="Insert a task here.."
            type="text"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}

export default TaskInput;