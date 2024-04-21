import React from 'react'
import UserSidebar from './UserSidebar';
import Box from '@mui/material/Box';
import "./layout.css"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import UserNavbar from './UserNavbar';

import AddCardIcon from '@mui/icons-material/AddCard';
import { useNavigate } from 'react-router-dom';

function UserLayout() {
  const navigate=useNavigate();
 
  const savedData=localStorage.getItem('user')


  return (
    <>
    {savedData?
    <div>
      <div className='bgcolor'>
        < UserNavbar/>
        <Box height={70} />
        <Box sx={{ display: 'flex',}}>
          <UserSidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} >
                <Stack spacing={2} direction="row">
                  <Card sx={{ minWidth: 49 + "%", height: 250 }} className='gradient'>
                    <CardContent>
                      <div className='carden'>
                        <AddCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" className='cllor'>
                        500
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total User
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 49 + "%", height: 250 }} className='gradient'>
                    <CardContent>
                      <div className='carden'>
                        <AddCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" className='cllor'>
                        500
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total User
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
             
            </Grid>

          </Box>
        </Box>
      </div>
      </div>:navigate('/login')
}
    </>
  )
}

export default UserLayout;