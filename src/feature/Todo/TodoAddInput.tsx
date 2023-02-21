import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Typography, useTheme } from '@mui/material';

// dev
import { useState } from 'react';

const AddItemInput = () => {
	const theme = useTheme();

	const [isEditing, setIsEditing] = useState(false);

	function handleEdit() {
		setIsEditing(true);
	}

	function handleBlur() {
		setIsEditing(false);
	}

	const checkedIconStyle = {
		background: `linear-gradient(45deg, ${theme.palette.success.dark} 50%, #fff 100%)`,
		color: theme.palette.primary.main,
	};

	return (
		<Box bgcolor={theme.palette.primary.light} sx={{ borderRadius: '10px' }}>
			<Box p={3} sx={{ cursor: 'pointer' }}>
				<Box display='flex' alignItems='center' onClick={handleEdit} onBlur={handleBlur}>
					<Fab
						aria-label='complete'
						size='small'
						sx={{
							mr: 3,
							...(isEditing && checkedIconStyle),
						}}
					>
						{isEditing && <AddIcon />}
					</Fab>

					{!isEditing && (
						<Typography variant='body1' color='secondary.light'>
							Create new todo...
						</Typography>
					)}
					{isEditing && <TextField autoFocus sx={{ flexGrow: 1 }} />}
				</Box>
			</Box>
		</Box>
	);
};

export default AddItemInput;
