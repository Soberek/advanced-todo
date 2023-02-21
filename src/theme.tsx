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
		100: '#d6d6f3',
		200: '#adaee7',
		300: '#8585da',
		400: '#5c5dce',
		500: '#3334c2',
		600: '#292a9b',
		700: '#1f1f74',
		800: '#14154e',
		900: '#0a0a27',
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
		main: colors.black[400],
	},
	shadow: {
		main: colors.black[800],
	},
};

const darkMode = {
	primary: {
		main: colors.black[700],
	},
	secondary: {
		main: colors.black[400],
	},
	shadow: {
		main: colors.black[800],
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
