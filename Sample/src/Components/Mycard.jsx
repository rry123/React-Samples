import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Apnaapi from '../Api/Apnaapi';

export default function Mycard() {
  return (
    <Card
      sx={{
        maxWidth: 700,
        height: 240,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardActionArea>
        <CardContent sx={{ maxHeight: 200, overflow: 'auto' }}>
          <Apnaapi />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Action
        </Button>
      </CardActions>
    </Card>
  );
}
