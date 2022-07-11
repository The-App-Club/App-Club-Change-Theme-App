import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {useToggleTheme, ThemeProvider} from './theme';
import {Button} from '@mui/material';

import '@fontsource/kaushan-script';
import './styles/index.scss';

const App = () => {
  const toggleTheme = useToggleTheme();

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
      `}
    >
      <Button variant={'outlined'} onClick={toggleTheme}>
        Toggle Theme
      </Button>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 40rem;
          background-color: var(--background-color);
          color: var(--font-color);
          transition: background 0.5s ease-in-out, color 0.7s ease-in-out;
          font-size: 4rem;
        `}
      >
        CowBoy Bebop
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
