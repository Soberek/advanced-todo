import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, useTheme } from '@mui/material';

import type { Todo } from '../../store';
import { alpha } from '@mui/material';

// *Store
import { useTypedDispatch } from '../../hooks/reduxTypedHooks';
import { complete } from '../../store';

// *Framer motion
import { motion } from 'framer-motion';

const Item = ({ todo, idx }: { todo: Todo; idx: number }) => {
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

	// * Animation

	const variants = {
		custom: (custom: number) => ({
			opacity: 1,
			height: 'auto',
			transition: { delay: custom },
		}),
	};

	return (
		<Box
			onClick={() => handleTodoCompletion(id)}
			// p={3}
			bgcolor={alpha(theme.palette.primary.light, 0.8)}
			sx={{ cursor: 'pointer' }}
			// ! Animation !
			component={motion.div}
			variants={variants}
			transition={{
				delay: (idx + 1) * 0.1,
			}}
			initial={{
				height: 0,
				opacity: 0,
			}}
			animate={{
				height: 'auto',
				opacity: 1,
			}}
			exit={{
				height: 0,
				opacity: 0,
			}}
			layoutId={todo.id}
			whileHover={{
				scale: 1.05,
				backgroundColor: alpha(theme.palette.primary.light, 1),
				transition: { duration: 0.05, ease: 'easeInOut' },
			}}
			whileTap={{
				scale: 1.1,
			}}
		>
			<Box display='flex' alignItems='center' p={3}>
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
		</Box>
	);
};

export default Item;
