import React from 'react'
import UseProducts from '../../hooks/UseProducts'
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Products() {

  const { data, isLoading, isError, error } = UseProducts();

  if (isLoading) return <> <Typography component='h1' variant='h1'>loding....</Typography> </>
  if (isError) return <Typography>{error}</Typography>

  return (
    <>
      <Grid container>

        {data.response.data.map((product) => {

          return <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Link to={`/products/${product.id}`}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={product.image}
                > </CardMedia>
              </Card>
            </Link>
          </Grid>
        }
        )}

      </Grid>

    </>
  )
};