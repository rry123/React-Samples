import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const SingleTable = ({ data, loading, expanded, selectedColumns }) => {
  // Memoize columns based on selected columns or default to all columns
  const columns = useMemo(() => {
    if (!data || data.length === 0) return [];

    const sample = data[0];
    const allColumns = Object.keys(sample).map((key) => ({
      accessorKey: key,
      header: key.charAt(0).toUpperCase() + key.slice(1),
    }));

    // Filter columns based on selectedColumns
    if (selectedColumns.length > 0) {
      return allColumns.filter((col) => selectedColumns.includes(col.accessorKey));
    }
    
    return allColumns;
  }, [data, selectedColumns]);

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <>
      {!expanded && (
        <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
          <MaterialReactTable table={table} />
        </div>
      )}
      {expanded && (
        <div>
          <MaterialReactTable table={table} />
        </div>
      )}
    </>
  );
};

export default SingleTable;
