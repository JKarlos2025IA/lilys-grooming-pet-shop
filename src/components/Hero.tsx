import { Box, Typography, Button } from '@mui/material';
import HeroImage from '../assets/imagenes.png'; // Using one of your images!

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '70vh', md: '80vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        px: 2,
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
          filter: 'brightness(0.5)',
          zIndex: -1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.3) 0%, rgba(106, 27, 154, 0.4) 100%)',
          zIndex: -1,
        },
      }}
    >
      <Box sx={{ maxWidth: '800px' }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          Lily's Grooming & Pet Shop
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4,
            fontSize: { xs: '1rem', sm: '1.25rem' },
            textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
          }}
        >
          Donde consentimos a tu mejor amigo con el cuidado que se merece.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component="a"
          href="https://wa.me/51983559987?text=Hola,%20me%20gustaría%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem' },
            py: { xs: 1.5, sm: 2 },
            px: { xs: 3, sm: 4 },
          }}
        >
          Agendar una Cita por WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
