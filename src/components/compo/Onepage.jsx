import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./page.css"

function Onepage() {
    return (
        <>
            <Navbar />
            <Box height={30}>
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box className='centr' >
                        <h1>Name of the title</h1>
                        <Card sx={{  height: 500 ,backgroundColor: 'black'}} >
                            <CardContent> 
                                
                            </CardContent>
                        </Card>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, commodi porro. Culpa et quidem molestias unde quibusdam sit ullam minus! Totam, fuga.</h2>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Onepage