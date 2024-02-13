import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Add(props: Props) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    //add new item
    //axios.post(`/api/${slug}s)
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug} </h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((columns) => (
              <div className="item">
                <label>{columns.headerName}</label>
                <input type={columns.type} placeholder={columns.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
