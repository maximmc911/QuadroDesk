import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import type { Theme, ThemeContextValue } from '../../shared/types/theme.interface';



const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('app-theme');
        return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light';
    });

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        localStorage.setItem('app-theme', theme);
        const root = document.documentElement;
        root.classList.add(`${theme}-theme`);
        root.classList.remove(theme === 'light' ? 'dark-theme' : 'light-theme');
    }, [theme]);

    const value: ThemeContextValue = { theme, toggleTheme, setTheme, isDark: theme === 'dark', isLight: theme === 'light' };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
}