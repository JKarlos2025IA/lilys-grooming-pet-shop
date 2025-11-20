import { Container, Typography, Box } from '@mui/material';
import TeamImage from '../assets/Logo.jpeg'; // Using your logo as a placeholder for now

const About = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, alignItems: 'center' }}>
          <Box>
            <Box
              component="img"
              sx={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: 3,
              }}
              alt="El equipo de Lily's Grooming"
              src={TeamImage}
            />
          </Box>
          <Box>
            <Typography variant="h2" component="h2" gutterBottom>
              Sobre Nosotros
            </Typography>
            <Typography variant="h5" component="p" color="text.secondary" paragraph>
              Lily, la dueña y corazón de este proyecto, es una apasionada por los perros. Junto a su equipo, ha creado un espacio donde cada mascota es tratada con el máximo cuidado y respeto.
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              Nuestra filosofía es simple: ofrecer un servicio de grooming excepcional en un ambiente seguro y amigable. Creemos que un perro limpio y bien cuidado es un perro feliz.
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontStyle: 'italic', mt: 2 }}>
              *Importante: Ofrecemos servicios de estética y bienestar. No somos una clínica veterinaria.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
