import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Typography, useTheme } from '@mui/material';

// dev
import { useState } from 'react';
import { useTypedDispatch } from '../../hooks/reduxTypedHooks';
import { add } from '../../store/index';

const AddItemInput = () => {
	const theme = useTheme();

	const [isEditing, setIsEditing] = useState(false);
	const [input, setInput] = useState('');

	function handleEdit() {
		setIsEditing(true);
	}

	function handleBlur() {
		if (input) {
			return;
		}
		setIsEditing(false);
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInput(e.target.value);
	}

	const dispatch = useTypedDispatch();

	function handleAdd() {
		if (input != '') {
			dispatch(add({ title: input }));
			setInput('');
			setIsEditing(false);
		}
	}

	const checkedIconStyle = {
		background: `linear-gradient(45deg, ${theme.palette.success.dark} 50%, #fff 100%)`,
		color: theme.palette.primary.main,
	};

	return (
		<Box bgcolor={theme.palette.primary.light} sx={{ borderRadius: '10px' }}>
			<Box display='flex' alignItems='center' sx={{ cursor: 'pointer' }}>
				<Box p={3} flex='0 0'>
					<Fab
						aria-label='complete'
						size='small'
						sx={{
							...(isEditing && checkedIconStyle),
						}}
						onClick={handleAdd}
					>
						{isEditing && <AddIcon />}
					</Fab>
				</Box>

				<Box onBlur={handleBlur} onClick={handleEdit} display='flex' flex='1'>
					{!isEditing && (
						<Typography variant='body1' color='secondary.light'>
							Create new todo...
						</Typography>
					)}
					{isEditing && <TextField onChange={handleInputChange} value={input} autoFocus sx={{ flexGrow: 1, pr: 2 }} />}
				</Box>
			</Box>
		</Box>
	);
};

export default AddItemInput;
