import { createTheme } from '@mui/material/styles';

// Tema personalizado para Lily's Grooming - Púrpuras elegantes
const theme = createTheme({
  palette: {
    primary: {
      main: '#9C27B0',      // Púrpura vibrante para header y botones
      light: '#E1BEE7',     // Púrpura claro para fondos
      dark: '#6A1B9A',      // Púrpura oscuro para contraste
      contrastText: '#fff',
    },
    secondary: {
      main: '#CE93D8',      // Púrpura medio para acentos
      light: '#F3E5F5',     // Púrpura muy claro
      dark: '#8E24AA',      // Púrpura más oscuro
    },
    background: {
      default: '#F3E5F5',   // Fondo púrpura muy claro (lavanda suave)
      paper: '#FAF5FC',     // Fondo casi blanco con tinte púrpura
    },
    text: {
      primary: '#2D2D2D',   // Texto principal gris oscuro
      secondary: '#6A1B9A', // Texto secundario púrpura oscuro
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#6A1B9A',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#6A1B9A',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#8E24AA',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          boxShadow: '0 4px 12px rgba(156, 39, 176, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(156, 39, 176, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(156, 39, 176, 0.2)',
        },
      },
    },
  },
});

export default theme;
