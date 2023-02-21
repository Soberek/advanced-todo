// import { theme } from './Theme';

import CustomThemeProvider from './theme';

import Todo from './feature/Todo';

function App() {
	return (
		<CustomThemeProvider>
			<div>
				<Todo />
			</div>
		</CustomThemeProvider>
	);
}

export default App;
