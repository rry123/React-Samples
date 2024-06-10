import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

const FieldSelector = ({ fields, selectedFields, onChange }) => {
  const handleFieldChange = (field) => {
    const updatedFields = selectedFields.includes(field)
      ? selectedFields.filter((f) => f !== field)
      : [...selectedFields, field];
    onChange(updatedFields);
  };

  return (
    <Box>
      {fields.map((field) => (
        <FormControlLabel
          key={field}
          control={
            <Checkbox
              checked={selectedFields.includes(field)}
              onChange={() => handleFieldChange(field)}
            />
          }
          label={field}
        />
      ))}
    </Box>
  );
};

export default FieldSelector;
