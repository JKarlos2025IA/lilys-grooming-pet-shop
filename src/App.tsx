import { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Promotions from './components/Promotions';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Asegurar que la página cargue arriba
  useEffect(() => {
    // Forzar scroll al inicio inmediatamente y después del render
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Doble verificación después de un pequeño delay
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Productos', id: 'productos' },
    { label: 'Promociones', id: 'promociones' },
    { label: 'Galería', id: 'galeria' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
      <AppBar position="sticky" color="primary" sx={{ top: 0, zIndex: 1100 }}>
        <Toolbar>
          <PetsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            Lily's Grooming & Pet Shop
          </Typography>

          {/* Menú Desktop */}
          {!isMobile ? (
            <>
              {menuItems.map((item) => (
                <Button key={item.id} color="inherit" onClick={() => scrollToSection(item.id)} sx={{ fontSize: '0.875rem' }}>
                  {item.label}
                </Button>
              ))}
            </>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

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
          py: 4,
          px: 2,
          mt: 'auto',
          background: 'linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center" sx={{ fontWeight: 500 }}>
            © {new Date().getFullYear()} Lily's Grooming & Pet Shop
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1, opacity: 0.9 }}>
            Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
