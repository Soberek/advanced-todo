import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

// *Store
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxTypedHooks';

import { removeCompleted } from '../../store';

const TodoFooter = () => {
	//
	const dispatch = useTypedDispatch();
	const todos = useTypedSelector((state) => state.todos.todos);

	const numberOfTodosLeft = todos.filter((todo) => todo.completed != true).length;

	function handleRemoveCompletedTodos() {
		dispatch(removeCompleted());
	}

	const theme = useTheme();

	return (
		<Box
			bgcolor={theme.palette.primary.light}
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			sx={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
			py={2}
			px={3}
			color={theme.palette.primary.contrastText}
		>
			<Box display='flex' alignItems='center'>
				<Typography variant='body1' fontWeight={400}>
					{numberOfTodosLeft} items left
				</Typography>
			</Box>
			<Box
				display='flex'
				sx={{
					'& > *': {
						mx: '7px',
						p: 0.5,
						':hover': {
							cursor: 'pointer',
							color: theme.palette.secondary.light,
						},
					},
				}}
			>
				<Typography variant='body1'>All</Typography>
				<Typography variant='body1'>Active</Typography>

				<Typography variant='body1'>Completed</Typography>
			</Box>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<Box onClick={handleRemoveCompletedTodos}>
					<Typography variant='body1' sx={{ ':hover': { cursor: 'pointer', color: theme.palette.secondary.light } }}>
						Clear Completed
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default TodoFooter;
