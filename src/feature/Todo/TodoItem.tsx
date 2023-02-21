import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, useTheme } from '@mui/material';

// dev
import { useState } from 'react';

const Item = () => {
	const theme = useTheme();

	const [checked, setChecked] = useState(false);

	const checkedStyle = {
		background: 'linear-gradient(45deg, #c52cb8 30%, red 100%)',
		color: theme.palette.primary.main,
	};

	return (
		<Box
			p={3}
			bgcolor={theme.palette.primary.light}
			display='flex'
			alignItems='center'
			onClick={() => setChecked((prev) => !prev)}
			sx={{ cursor: 'pointer' }}
		>
			<Fab
				aria-label='complete'
				size='small'
				sx={{
					mr: 3,
					...(checked && checkedStyle),
				}}
			>
				{checked && <CheckIcon />}
			</Fab>
			<Typography
				variant='body1'
				sx={{
					textDecoration: checked ? 'line-through' : undefined,
					color: checked ? theme.palette.primary.dark : theme.palette.primary.contrastText,
				}}
			>
				WASHING MACHINE
			</Typography>
		</Box>
	);
};

export default Item;
