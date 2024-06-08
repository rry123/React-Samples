import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const SingleTable = ({ data, loading }) => {
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
    <div style={{  overflowY: 'auto' }}>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default SingleTable;
