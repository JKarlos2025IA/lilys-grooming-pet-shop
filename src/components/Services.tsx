import { Container, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import ServiceImg1 from '../assets/Servicios_01.png';
import ServiceImg2 from '../assets/Servicios_02.png';
import ServiceImg3 from '../assets/Servicios_03.png';
import ServiceImg4 from '../assets/Servicios_04.png';

const services = [
  {
    name: 'Baño y Secado',
    description: 'Un baño refrescante con productos de alta calidad para mantener su pelaje limpio y brillante.',
    image: ServiceImg1,
  },
  {
    name: 'Corte de Pelo Completo',
    description: 'Diseñado para perritos que requieran un nuevo estilo. Incluye: Corte de pelo a elección, Baño con shampoo, Secado y cepillado, Corte y limado de uñas, Limpieza de orejas, Drenado de sacos anales, Loción, Corte higiénico y un accesorio final.',
    image: ServiceImg2,
  },
  {
    name: 'Corte de Uñas',
    description: 'Corte y limado de uñas profesional para la salud y comodidad de sus patitas.',
    image: ServiceImg3,
  },
  {
    name: 'Paquete Spa Deluxe',
    description: 'La experiencia completa: baño, corte, limpieza de oídos, y tratamiento hidratante.',
    image: ServiceImg4,
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mt: 4 }}>
          {services.map((service) => (
            <Card key={service.name} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {service.name}
                </Typography>
                <Typography>{service.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
