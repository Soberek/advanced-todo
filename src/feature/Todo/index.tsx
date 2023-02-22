import { Box, useTheme } from '@mui/material';
import { alpha } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import TodoHeader from './TodoHeader';
import TodoList from './TodoItemList';

const Main = () => {
	const theme = useTheme();
	const mobileQuery = useMediaQuery('(max-width:600px)');

	console.log();

	const imageUrl =
		'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80';
	// ${theme.palette.primary},
	return (
		<Box>
			<Box
				minHeight='100vh'
				sx={{
					background: mobileQuery ? theme.palette.primary.dark : `url(${imageUrl})`,
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
