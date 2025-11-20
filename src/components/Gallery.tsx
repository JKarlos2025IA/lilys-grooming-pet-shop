import React from 'react';
import { Container, Typography, ImageList, ImageListItem, Box } from '@mui/material';

// Importa las imágenes que te parezcan mejores de la carpeta assets
import image1 from '../assets/WhatsApp Image 2025-11-19 at 9.53.53 PM (1).jpeg';
import image2 from '../assets/WhatsApp Image 2025-11-19 at 9.53.53 PM (2).jpeg';
import image3 from '../assets/WhatsApp Image 2025-11-19 at 9.53.53 PM.jpeg';
import image4 from '../assets/WhatsApp Image 2025-11-19 at 9.53.54 PM (1).jpeg';
import image5 from '../assets/WhatsApp Image 2025-11-19 at 9.53.54 PM (2).jpeg';
import image6 from '../assets/WhatsApp Image 2025-11-19 at 9.53.57 PM.jpeg';
import image7 from '../assets/WhatsApp Image 2025-11-19 at 9.53.58 PM.jpeg';
import image8 from '../assets/WhatsApp Image 2025-11-19 at 9.54.00 PM.jpeg';


const itemData = [
  { img: image1, title: 'Feliz y limpio' },
  { img: image2, title: 'Nuevo corte' },
  { img: image3, title: 'Pura elegancia' },
  { img: image4, title: 'Listo para la foto' },
  { img: image5, title: 'Amigo peludo' },
  { img: image6, title: 'Después del baño' },
  { img: image7, title: 'Sonrisa de perro' },
  { img: image8, title: 'Estilo impecable' },
];

const Gallery = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Nuestros Clientes Felices
        </Typography>
        <ImageList sx={{ width: '100%', height: 'auto' }} variant="masonry" cols={4} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: '8px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default Gallery;
