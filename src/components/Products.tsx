import { Container, Card, CardContent, Typography, Box } from '@mui/material';
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
    <Box sx={{ py: 6, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Nuestra Tienda
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Todo lo que tu mascota necesita en un solo lugar
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mt: 4 }}>
          {productCategories.map((category) => (
            <Card key={category.name} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Box>{category.icon}</Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {category.name}
                </Typography>
                <Typography color="text.secondary">{category.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
