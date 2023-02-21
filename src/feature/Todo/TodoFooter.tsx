import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

const TodoFooter = () => {
	const theme = useTheme();

	return (
		<Box bgcolor={theme.palette.primary.light} sx={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
			<Box p={3} display='flex' alignItems='center'>
				x
			</Box>
		</Box>
	);
};

export default TodoFooter;
