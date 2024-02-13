import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import noavatar from "../../images/noavatar.png";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || noavatar} alt="" />;
    },
  },

  {
    field: "title",
    headerName: "Title",
    type: "string",
    width: 250,
  },
  {
    field: "color",
    headerName: " Color",
    type: "string",
    width: 150,
  },
  { field: "price", headerName: "Color", width: 150, type: "string" },
  { field: "producer", headerName: "Producer", width: 200, type: "string" },
  { field: "createdAt", headerName: "Created At", width: 200, type: "string" },
  { field: "inStock", headerName: "In Stock", width: 150, type: "boolean" },
];

function Products() {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Prosucts</button>
      </div>
      <DataTable slug="prosucts" columns={columns} rows={products} />
      {open && <Add slug="prosuct" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Products;
