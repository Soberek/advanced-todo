import Item from './TodoItem';
import AddItemInput from './TodoAddInput';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material';

const TodoList = () => {
	const theme = useTheme();
	return (
		<>
			<Box my={3}>
				<AddItemInput />
			</Box>
			<Box
				sx={{
					'& > *': {
						borderBottom: `2px solid ${theme.palette.primary.main}`,
					},
				}}
			>
				<Item />
				<Item />
				<Item />
			</Box>
		</>
	);
};

export default TodoList;
