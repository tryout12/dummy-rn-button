import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext<any>(undefined);

export const ThemeProvider = ({children}:any) => {
    const [theme, setTheme] = useState<'light'|'dark'>('light');
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
}