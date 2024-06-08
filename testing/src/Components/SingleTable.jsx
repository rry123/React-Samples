import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const SingleTable = ({ data, loading, expanded }) => {
  //should be memoized or stable
  const columns = useMemo(() => {
    if (!data || data.length === 0) return [];

    const sample = data[0];
    return Object.keys(sample).map((key) => ({
      accessorKey: key,
      header: key.charAt(0).toUpperCase() + key.slice(1),
    }));
  }, [data]);

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <>
    {!expanded && <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
      <MaterialReactTable table={table} />
    </div> }
    {expanded && <div>
      <MaterialReactTable table={table} />
    </div>}
    </>
  );
};

export default SingleTable;
