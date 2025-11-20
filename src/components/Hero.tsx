import { Box, Typography, Button } from '@mui/material';
import HeroImage from '../assets/imagenes.png'; // Using one of your images!

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '60vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)', // Darken the image to make text readable
          zIndex: -1,
        },
      }}
    >
      <Box>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Lily's Grooming & Pet Shop
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          Donde consentimos a tu mejor amigo con el cuidado que se merece.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component="a"
          href="https://wa.me/51983559987?text=Hola,%20me%20gustaría%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar una Cita por WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
