import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Mycard from './Mycard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Cardarrange() {
  return (
      <Grid container spacing={4} className='MainGrid'>
        <Grid item xs={6}>
         <Mycard className="InnerGrid"></Mycard>
        </Grid>
        <Grid item xs={6}>
         <Mycard className="InnerGrid"></Mycard>
        </Grid>
        <Grid item xs={6}>
         <Mycard className="InnerGrid"></Mycard>
        </Grid>
        <Grid item xs={6}>
          <Mycard className="InnerGrid"></Mycard>
        </Grid>
      </Grid>
  );
}