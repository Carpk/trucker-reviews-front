import { useState, useEffect } from 'react';


import Container from '@mui/material/Container';
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
    
      <Container sx={{ display: 'flex', mt: 20 }}>
        <Stack direction="row" spacing={2}>

          <Stack>
            Recent Reviews
            { reviews.map((item) => (
              <Card>
                {item}
              </Card>
            ))}
          </Stack>
          <Stack>
            Recent Products
            { products.map((item) => (
              <Card>
                {item}
              </Card>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  )
}