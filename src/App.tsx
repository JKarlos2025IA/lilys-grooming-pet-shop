import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Promotions from './components/Promotions';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <AppBar position="sticky" color="primary" sx={{ top: 0, zIndex: 1100 }}>
        <Toolbar>
          <PetsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lily's Grooming & Pet Shop
          </Typography>
          <Button color="inherit" onClick={() => scrollToSection('inicio')}>Inicio</Button>
          <Button color="inherit" onClick={() => scrollToSection('servicios')}>Servicios</Button>
          <Button color="inherit" onClick={() => scrollToSection('productos')}>Productos</Button>
          <Button color="inherit" onClick={() => scrollToSection('promociones')}>Promociones</Button>
          <Button color="inherit" onClick={() => scrollToSection('galeria')}>Galería</Button>
          <Button color="inherit" onClick={() => scrollToSection('nosotros')}>Nosotros</Button>
          <Button color="inherit" onClick={() => scrollToSection('contacto')}>Contacto</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <main>
        <Box id="inicio">
          <Hero />
        </Box>
        <Box id="servicios">
          <Services />
        </Box>
        <Box id="productos">
          <Products />
        </Box>
        <Box id="promociones">
          <Promotions />
        </Box>
        <Box id="galeria">
          <Gallery />
        </Box>
        <Box id="nosotros">
          <About />
        </Box>
        <Box id="contacto">
          <Contact />
        </Box>
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
