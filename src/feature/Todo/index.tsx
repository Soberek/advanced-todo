import { Box, useTheme } from '@mui/material';
import { alpha } from '@mui/material';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const Main = () => {
	const theme = useTheme();

	return (
		<Box>
			<Box
				minHeight='100vh'
				sx={{
					backgroundImage: `
                    linear-gradient(to bottom, rgba(255,255,255, 0) 10%, ${theme.palette.primary.dark} 100%,  ${
						theme.palette.primary.dark
					} 100%),
                    // linear-gradient(to left, rgba(255,0,0,0) 0%, ${alpha(theme.palette.primary.dark, 0.7)} 100%), 
                    url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')
                    `,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
				display='flex'
				justifyContent='center'
				alignItems='top'
				pb={10}
			>
				{/* TODO Container */}
				<Box mt={10} bgcolor='transparent' width={`95%`} maxWidth={`600px`}>
					{/* TODO HEADER */}
					<TodoHeader />

					{/* TODO LIST */}
					<TodoList />
				</Box>
			</Box>
		</Box>
	);
};

export default Main;
