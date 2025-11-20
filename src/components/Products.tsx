import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import ToysIcon from '@mui/icons-material/Toys';
import PetsIcon from '@mui/icons-material/Pets';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const productCategories = [
  {
    name: 'Juguetes y Accesorios',
    description: 'Todo para la diversión y comodidad de tu mascota.',
    icon: <ToysIcon fontSize="large" color="primary" />,
  },
  {
    name: 'Alimento Balanceado',
    description: 'La mejor nutrición seca para todas las edades y razas.',
    icon: <PetsIcon fontSize="large" color="primary" />,
  },
  {
    name: 'Vitaminas y Suplementos',
    description: 'Refuerza su salud con nuestra selección de vitaminas.',
    icon: <HealthAndSafetyIcon fontSize="large" color="primary" />,
  },
  {
    name: 'Más Productos',
    description: 'Antiparasitarios, snacks, alimento húmedo y mucho más.',
    icon: <ShoppingBasketIcon fontSize="large" color="primary" />,
  },
];

const Products = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Nuestra Tienda
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {productCategories.map((category) => (
            <Grid item key={category.name} xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                <Box>{category.icon}</Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {category.name}
                  </Typography>
                  <Typography color="text.secondary">{category.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
