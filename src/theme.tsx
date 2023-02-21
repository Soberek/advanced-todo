import { createTheme } from '@mui/material';
import { blue, pink, purple } from '@mui/material/colors';
import React, { createContext, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

// 1. Create Mode Context that contains function to change mode (basically to inherit type)
// 2.

const initialState = {
	toggleColorMode: () => {},
};

const lightMode = {
	primary: {
		main: purple[300],
	},
};

const darkMode = {
	primary: {
		main: purple[600],
	},
};

export const ColorModeContext = createContext(initialState);

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mode, setMode] = useState<'light' | 'dark'>('light');

	const colorMode = {
		toggleColorMode: () => {
			setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
		},
	};

	const theme = createTheme({
		palette: {
			mode,
			...(mode === 'light' ? lightMode : darkMode),
		},
	});

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
