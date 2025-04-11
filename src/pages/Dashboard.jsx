// import { useState, useEffect } from 'react';


import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Header from "../components/Header"
import { Stack } from '@mui/material';

export default function Dashboard() {
  // const [reviews, setReviews] = useState([])
  // const [products, setProducts] = useState([])


  // useEffect(() => {
    // async function fetchData() {
    //     // const req = await axios.get("/api/")
    // }
    // fetchData()
    // setReviews(["good product!"])
    // setProducts(["pipe"])
//  }, [])


  return (
    <>
      <Header />
      <CssBaseline />
      <Container 
        maxWidth="lg" 
        sx={{
          marginTop: 'max(150px - var(--template-frame-height, 0px), 0px)',  
        }}
      >
        <Grid container spacing={2}>
          <Grid size={4}>
            <Card >
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                  benevolent
                </Typography>
                {/* <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography> */}
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={4}>
            size=4
          </Grid>
          <Grid size={4}>
            size=4
          </Grid>
          <Grid size={8}>
            size=8
          </Grid>
        </Grid>
      </Container>
    </>
  )
}