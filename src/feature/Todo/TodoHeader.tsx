import { Typography, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from '../../components/MaterialUISwitch';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';

const TodoHeader = () => {
	const toggleTheme = useContext(ColorModeContext);

	return (
		<Box display='flex' justifyContent='space-between'>
			<Typography variant='h3' fontWeight='bold' color='primary.light' sx={{ letterSpacing: '20px' }}>
				TODO
			</Typography>
			<FormControlLabel
				onClick={toggleTheme.toggleColorMode}
				control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
				label=''
				color='primary'
			/>
		</Box>
	);
};

export default TodoHeader;
