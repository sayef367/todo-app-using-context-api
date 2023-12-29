
export default function TodoAdd() {
  return (
    <>
      <div className="input-group mt-5">
        <input type="text" className="form-control" placeholder="Enter Todo" />
        <input type="date" className="form-control"/>
        <button type="button" className="btn btn-primary">Add Todo</button>
      </div>
    </>
  );
};
