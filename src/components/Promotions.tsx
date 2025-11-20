import { Container, Card, CardContent, Typography, Box, Chip } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// Estas promociones las podrás actualizar semanalmente
const promotions = [
  {
    title: 'Baño + Corte de Uñas',
    description: 'Aprovecha nuestro paquete especial: Baño completo + corte de uñas por un precio increíble.',
    discount: '20% OFF',
    validUntil: 'Válido hasta: 30 Nov 2025',
  },
  {
    title: 'Spa Completo',
    description: 'Dale a tu mascota el tratamiento que se merece con nuestro paquete spa deluxe.',
    discount: '15% OFF',
    validUntil: 'Válido hasta: 30 Nov 2025',
  },
  {
    title: 'Primera Visita',
    description: '¿Es tu primera vez? Obtén un descuento especial en cualquier servicio.',
    discount: '10% OFF',
    validUntil: 'Válido hasta: 30 Nov 2025',
  },
];

const Promotions = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <LocalOfferIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h2" component="h2" gutterBottom>
            Promociones de la Semana
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ¡Aprovecha nuestras ofertas especiales! Se actualizan cada semana.
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {promotions.map((promo, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                <Chip
                  label={promo.discount}
                  color="error"
                  sx={{ fontWeight: 'bold', fontSize: '1rem' }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, pt: 4 }}>
                <Typography gutterBottom variant="h4" component="h3" color="primary">
                  {promo.title}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mt: 2, mb: 3 }}>
                  {promo.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  {promo.validUntil}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            * Las promociones no son acumulables. Consulta términos y condiciones.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Promotions;
