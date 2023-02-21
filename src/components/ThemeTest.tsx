import React, { useContext } from 'react';

import { ColorModeContext } from '../theme';
import { Box, Button } from '@mui/material';

const ThemeTest = () => {
	const theme = useContext(ColorModeContext);

	return (
		<Box px={5} py={2}>
			<Button onClick={theme.toggleColorMode} variant='contained'>
				Toggle theme
			</Button>
		</Box>
	);
};

export default ThemeTest;
