import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const contactDetails = [
  {
    icon: <PhoneIcon color="primary" />,
    text: '983 559 987', // Real data
  },
  {
    icon: <EmailIcon color="primary" />,
    text: 'Lilysgrooming@gmail.com', // Real data
  },
  {
    icon: <LocationOnIcon color="primary" />,
    text: 'Av. Las Mascotas Felices 123, Lima', // Placeholder
  },
  {
    icon: <AccessTimeIcon color="primary" />,
    text: 'Lunes a Sábado: 9:00 AM - 7:00 PM', // Placeholder
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({
          type: 'success',
          message: '¡Mensaje enviado! Te contactaremos pronto.',
        });
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setAlert({
          type: 'error',
          message: data.error || 'Hubo un error al enviar tu mensaje. Intenta de nuevo.',
        });
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Error de conexión. Por favor, intenta de nuevo.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 6, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Contáctanos
        </Typography>
        <Typography variant="h5" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
          ¿Listo para engreír a tu mascota? ¡Te esperamos!
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, gap: 6 }}>
          {/* Contact Info */}
          <Box>
            <Typography variant="h4" gutterBottom>Información</Typography>
            {contactDetails.map((detail, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {detail.icon}
                <Typography variant="body1" sx={{ ml: 2 }}>{detail.text}</Typography>
              </Box>
            ))}
             {/* A placeholder for a map */}
            <Box sx={{ height: '200px', backgroundColor: 'grey.300', mt: 3, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="text.secondary">Mapa Próximamente</Typography>
            </Box>
          </Box>

          {/* Contact Form */}
          <Box>
            <Typography variant="h4" gutterBottom>Envíanos un Mensaje</Typography>

            {alert && (
              <Alert severity={alert.type} sx={{ mb: 3 }} onClose={() => setAlert(null)}>
                {alert.message}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mb: 2 }}>
                <TextField
                  fullWidth
                  label="Tu Nombre"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <TextField
                  fullWidth
                  label="Tu Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </Box>
              <TextField
                fullWidth
                label="Asunto"
                name="subject"
                variant="outlined"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={loading}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Tu Mensaje"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
