import {useState, createContext, useContext, useEffect} from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    switch (theme) {
      case 'light': {
        document.documentElement.style.setProperty(
          '--background-color',
          '#efefef'
        );
        document.documentElement.style.setProperty('--font-color', '#222222');
        break;
      }
      case 'dark': {
        document.documentElement.style.setProperty(
          '--background-color',
          '#222222'
        );
        document.documentElement.style.setProperty('--font-color', '#efefef');
        break;
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === 'light' ? 'dark' : 'light';
    });
  };

  return toggleTheme;
};

const ThemeContext = createContext(null);

const useToggleTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({children}) => {
  const toggleTheme = useTheme();
  return (
    <ThemeContext.Provider value={toggleTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export {useToggleTheme, ThemeProvider};
