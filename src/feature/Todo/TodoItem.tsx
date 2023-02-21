import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, useTheme } from '@mui/material';

import type { Todo } from '../../store';

// *Store
import { useTypedDispatch } from '../../hooks/reduxTypedHooks';
import { complete } from '../../store';

const Item = ({ todo }: { todo: Todo }) => {
	// * Logic
	const { id, title, completed } = todo;
	const dispatch = useTypedDispatch();

	function handleTodoCompletion(id: string) {
		dispatch(complete({ id }));
	}

	// * Style
	const theme = useTheme();
	const checkedStyle = {
		background: 'linear-gradient(45deg, #c52cb8 30%, red 100%)',
		color: theme.palette.primary.main,
	};

	return (
		<Box
			className='bounce-in-fwd'
			onClick={() => handleTodoCompletion(id)}
			p={3}
			bgcolor={theme.palette.primary.light}
			display='flex'
			alignItems='center'
			sx={{ cursor: 'pointer' }}
		>
			<Fab
				aria-label='complete'
				size='small'
				sx={{
					mr: 3,
					...(completed && checkedStyle),
				}}
			>
				{completed && <CheckIcon />}
			</Fab>
			<Typography
				variant='body1'
				sx={{
					textDecoration: completed ? 'line-through' : undefined,
					color: completed ? theme.palette.primary.dark : theme.palette.primary.contrastText,
				}}
			>
				{title}
			</Typography>
		</Box>
	);
};

export default Item;
