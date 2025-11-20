import { Container, Card, CardContent, Typography, Box } from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ShowerIcon from '@mui/icons-material/Shower';
import SpaIcon from '@mui/icons-material/Spa';
import PetsIcon from '@mui/icons-material/Pets';

const services = [
  {
    name: 'Baño y Secado',
    description: 'Un baño refrescante con productos de alta calidad para mantener su pelaje limpio y brillante.',
    icon: <ShowerIcon sx={{ fontSize: 60 }} />,
  },
  {
    name: 'Corte de Pelo Completo',
    description: 'Diseñado para perritos que requieran un nuevo estilo. Incluye: Corte de pelo a elección, Baño con shampoo, Secado y cepillado, Corte y limado de uñas, Limpieza de orejas, Drenado de sacos anales, Loción, Corte higiénico y un accesorio final.',
    icon: <ContentCutIcon sx={{ fontSize: 60 }} />,
  },
  {
    name: 'Corte de Uñas',
    description: 'Corte y limado de uñas profesional para la salud y comodidad de sus patitas.',
    icon: <PetsIcon sx={{ fontSize: 60 }} />,
  },
  {
    name: 'Paquete Spa Deluxe',
    description: 'La experiencia completa: baño, corte, limpieza de oídos, y tratamiento hidratante.',
    icon: <SpaIcon sx={{ fontSize: 60 }} />,
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Nuestros Servicios
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Servicios profesionales de grooming para el bienestar de tu mascota
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4, mt: 4 }}>
          {services.map((service) => (
            <Card
              key={service.name}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                p: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 24px rgba(156, 39, 176, 0.2)',
                },
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                {service.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 0 }}>
                <Typography gutterBottom variant="h5" component="h3" color="primary">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
