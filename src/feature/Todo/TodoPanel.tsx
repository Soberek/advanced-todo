import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';

// *Store
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxTypedHooks';

import { removeCompleted, filterActiveTodos, filterAllTodos, filterCompletedTodos } from '../../store';

const TodoPanel = () => {
	// *Store
	const dispatch = useTypedDispatch();
	const todos = useTypedSelector((state) => state.todos.todos);
	const activeFilter = useTypedSelector((state) => state.todos.filter);

	// *Logic
	const numberOfTodosLeft = todos.filter((todo) => todo.completed != true).length;

	const handleRemoveCompletedTodos = () => dispatch(removeCompleted());

	const handleFilterAllTodos = () => dispatch(filterAllTodos());

	const handleFilterCompletedTodos = () => dispatch(filterCompletedTodos());

	const handleFilterActiveTodos = () => dispatch(filterActiveTodos());

	// *Style
	const theme = useTheme();
	const matchesMobile = useMediaQuery('(min-width: 500px)');

	return (
		<Box
			bgcolor={theme.palette.primary.light}
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			flexDirection={matchesMobile ? 'row' : 'column'}
			sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
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
				<Box onClick={handleFilterAllTodos}>
					<Typography variant='body1' color={activeFilter === 'ALL' ? 'secondary.light' : undefined}>
						All
					</Typography>
				</Box>
				<Box onClick={handleFilterActiveTodos}>
					<Typography variant='body1' color={activeFilter === 'ACTIVE' ? 'secondary.light' : undefined}>
						Active
					</Typography>
				</Box>
				<Box onClick={handleFilterCompletedTodos}>
					<Typography variant='body1' color={activeFilter === 'COMPLETED' ? 'secondary.light' : undefined}>
						Completed
					</Typography>
				</Box>
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

export default TodoPanel;
