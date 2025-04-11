import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import Header from "../components/Header"
import { Stack } from '@mui/material';

export default function Home() {
  const [reviews, setReviews] = useState([])
  const [products, setProducts] = useState([])


  useEffect(() => {

    // async function fetchData() {
    //     // const req = await axios.get("/api/")
    // }
    // fetchData()
    setReviews(["good product!"])
    setProducts(["pipe"])


 }, [])


  return (
    <>
      <Header />
      <CssBaseline />
      <Container maxWidth="lg" 
        sx={{
          // boxShadow: 0,
          // bgcolor: 'transparent',
          // backgroundImage: 'none',
          marginTop: 'max(150px - var(--template-frame-height, 0px), 0px)',
         
        }}
      >
        <Stack >
          <Stack 
            direction="row" 
            spacing={ 8 } 
            // alignItems="center"
            justifyContent="center"
            // sx={{ textAlign: 'center' }}
          >
            
            <Stack>
              Recent Announcments
              { reviews.map((item, index) => (
                <Card key={ "r" + index }>
                  {item}
                </Card>
              ))}
            </Stack>
            <Stack>
              Login
              { products.map((item, index) => (
                <Card key={ "p" + index }>
                  {item}
                </Card>
              ))}
              <Button component={Link} to="/dashboard">
              {/* <Button 
                variant="text" 
                size="small"
                href="/dashboard"
              > */}
                Login
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}