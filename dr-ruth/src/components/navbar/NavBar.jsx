import React from 'react'
import './navBar.css'


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Link } from '@mui/material';


export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one"  href='/productos' label="Productos" />
        <Tab value="two" href='/servicios' label="servicios" />
        <Tab value="three" href='/productos' label="Item Three" />
      </Tabs>
    </Box>
  );
}
