import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';



export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
          default: grey[200]
      },
      primary: {
          main: 'rgba(36, 153, 255, 0.923)'
          
      },
      secondary: {
          main: '#19857b'
      },
      error: {
          main: red.A400
      },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {}
        }
    }
});