import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <PetsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lily's Grooming & Pet Shop
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Servicios</Button>
          <Button color="inherit">Nosotros</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <main>
        <Hero />
        <Services />
        <Products />
        <Gallery />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[300]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            © {new Date().getFullYear()} Lily's Grooming & Pet Shop. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
