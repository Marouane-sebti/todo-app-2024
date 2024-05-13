import "bootstrap/dist/css/bootstrap.css";
import "./TodoAdd.css";

function TodoAdd() {

  return (
    <>
     <form className="add text-center my-4">
          <label htmlFor="add" className="add text-light">
            Add a new todo:
          </label>
          <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add"
          />
        </form>
    </>
  );
}

export default TodoAdd;