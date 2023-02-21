import Item from './TodoItem';
import AddItemInput from './TodoAddInput';
import TodoFooter from './TodoFooter';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material';

const TodoList = () => {
	const theme = useTheme();
	return (
		<>
			{/* Todo Add Input */}
			<Box my={3}>
				<AddItemInput />
			</Box>

			{/* Todos */}
			<Box
				sx={{
					'& > *': {
						borderBottom: `2px solid ${theme.palette.primary.main}`,
					},
					borderTopLeftRadius: '10px',
					borderTopRightRadius: '10px',
					overflow: 'hidden',
				}}
			>
				<Item />
				<Item />
				<Item />
			</Box>

			{/* Todo Footer */}
			<TodoFooter />
		</>
	);
};

export default TodoList;
