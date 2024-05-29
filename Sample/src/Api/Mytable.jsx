import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const Mytable = ({ data , loading}) => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "User Id",
        size: 150,
      },
      {
        accessorKey: "name",
        header: "Full Name",
        size: 150,
      },
      {
        accessorKey: "age", //normal accessorKey
        header: "Age",
        size: 200,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && <MaterialReactTable table={table} />}
    </div>
  );
};

export default Mytable;
