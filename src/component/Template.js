import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Template(props) {
  const margin = (props.home) ? 0 : 4;

  return (
    <Container sx={{ marginY: margin }}>
      <Typography variant="h4">{props.header}</Typography>
      <Typography variant="h5">{props.filter}</Typography>
      {props.content}
    </Container>
  )
}