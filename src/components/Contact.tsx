import React from 'react';
import { Container, Grid, Typography, Box, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const contactDetails = [
  {
    icon: <PhoneIcon color="primary" />,
    text: '(+51) 999-888-777', // Placeholder
  },
  {
    icon: <EmailIcon color="primary" />,
    text: 'contacto@lilysgrooming.com', // Placeholder
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
  return (
    <Box sx={{ py: 6, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Contáctanos
        </Typography>
        <Typography variant="h5" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
          ¿Listo para engreír a tu mascota? ¡Te esperamos!
        </Typography>
        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
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
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" gutterBottom>Envíanos un Mensaje</Typography>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Tu Nombre" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Tu Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Asunto" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Tu Mensaje"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" size="large" type="submit">
                    Enviar Mensaje
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
