import { Typography, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from '../../components/MaterialUISwitch';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import { useTheme } from '@mui/material';

const TodoHeader = () => {
	const toggleTheme = useContext(ColorModeContext);
	const theme = useTheme();

	return (
		<Box display='flex' justifyContent='space-between'>
			<Typography variant='h3' fontWeight='bold' color='primary.light' sx={{ letterSpacing: '20px' }}>
				TODO
			</Typography>
			<FormControlLabel
				onClick={toggleTheme.toggleColorMode}
				control={<MaterialUISwitch sx={{ m: 1 }} checked={theme.palette.mode === 'dark' ? true : false} />}
				label=''
				color='primary'
			/>
		</Box>
	);
};

export default TodoHeader;
