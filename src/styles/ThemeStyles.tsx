import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    Primary: 'hsl(35, 77%, 62%)',
    Secondary: 'hsl(5, 85%, 63%)',
    OffWhite: 'hsl(36, 100%, 99%)',
    GrayishBlue: 'hsl(233, 8%, 79%)',
    DarkGrayishBlue: 'hsl(236, 13%, 42%)',
    VeryDarkBlue: 'hsl(240, 100%, 5%)',
    BG: '#FEFDF9',
  },
  container: {
    maxWidth: '1200px',
    padding: '0 1rem',
    margin: '0 auto',
  },
};

type Props = {
  children?: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
