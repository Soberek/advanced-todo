import { Box, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../theme';

import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from './MaterialUISwitch';

const Main = () => {
	const theme = useTheme();
	const toggleTheme = useContext(ColorModeContext);

	return (
		<Box>
			<Box
				height='100vh'
				sx={{
					backgroundImage: `
                    linear-gradient(to bottom, rgba(255,255,255, 0) 40%, ${theme.palette.primary.main} 40%,  ${
						theme.palette.primary.main
					} 100%),
                    linear-gradient(to left, rgba(255,0,0,0) 0%, ${alpha(theme.palette.primary.dark, 0.7)} 100%), 
                    url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')
                    `,
					backgroundSize: 'cover',
					backgroundPosition: 'bottom',
				}}
				display='flex'
				justifyContent='center'
				alignItems='top'
			>
				{/* TODO Container */}
				<Box mt={15} bgcolor='transparent' width={`95%`} maxWidth={`600px`} height={`400px`}>
					<Box display='flex' justifyContent='space-between'>
						<Typography variant='h3' fontWeight='bold' color='secondary.main' sx={{ letterSpacing: '20px' }}>
							TODO
						</Typography>
						<FormControlLabel
							onClick={toggleTheme.toggleColorMode}
							control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
							label=''
							color='primary'
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Main;
