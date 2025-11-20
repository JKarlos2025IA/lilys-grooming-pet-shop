import { Container, Typography, Box } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

// Placeholders temporales - Reemplazar con fotos reales cuando estén listas
const placeholders = [
  { id: 1, title: 'Cliente feliz 1' },
  { id: 2, title: 'Cliente feliz 2' },
  { id: 3, title: 'Cliente feliz 3' },
  { id: 4, title: 'Cliente feliz 4' },
  { id: 5, title: 'Cliente feliz 5' },
  { id: 6, title: 'Cliente feliz 6' },
];

const Gallery = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Nuestros Clientes Felices
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Próximamente verás aquí las fotos de nuestros peluditos consentidos
        </Typography>

        {/* Grid de placeholders */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3
        }}>
          {placeholders.map((item) => (
            <Box
              key={item.id}
              sx={{
                aspectRatio: '4/3',
                borderRadius: 3,
                background: 'linear-gradient(135deg, #E1BEE7 0%, #CE93D8 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(156, 39, 176, 0.2)',
                },
              }}
            >
              <PetsIcon sx={{ fontSize: 60, color: '#6A1B9A', opacity: 0.5, mb: 2 }} />
              <Typography variant="body2" sx={{ color: '#6A1B9A', fontWeight: 500 }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Instrucciones para agregar fotos */}
        <Box sx={{ mt: 4, p: 3, backgroundColor: '#F3E5F5', borderRadius: 2 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            💡 <strong>Para agregar tus fotos:</strong> Guarda las imágenes en la carpeta{' '}
            <code>src/assets/gallery/</code> y actualiza el componente Gallery.tsx
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
