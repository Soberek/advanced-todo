import { createTheme } from '@mui/material';

// import { colors } from '@mui/material';
import React, { createContext, useState, useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

/*
 * 1. Create Mode Context that contains function to change mode (basically to inherit type)
 * 2. Define pallete for light and dark mode.
 * 3. Create component wrapper provider for theme.
 * 4.
 */

const initialState = {
	toggleColorMode: () => {},
};

const colors = {
	black: {
		100: '#f3f3f3',
		200: '#a3a3a7',
		300: '#74747c',
		400: '#464650',
		500: '#181824',
		600: '#13131d',
		700: '#0e0e16',
		800: '#0a0a0e',
		900: '#050507',
	},
};

/* 
TODO: Add more colors
*/
const lightMode = {
	primary: {
		main: colors.black[100],
	},
	secondary: {
		main: colors.black[100],
	},
};

const darkMode = {
	primary: {
		main: colors.black[900],
	},
	secondary: {
		main: colors.black[100],
	},
};

export const ColorModeContext = createContext(initialState);

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mode, setMode] = useState<'light' | 'dark'>('dark');

	const colorMode = {
		toggleColorMode: () => {
			setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
		},
	};

	/*
	 * useMemo to prevent creating theme if mode didn't changed
	 */
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === 'light' ? lightMode : darkMode),
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default CustomThemeProvider;
