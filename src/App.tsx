// import { theme } from './Theme';

import CustomThemeProvider from './theme';
import { store } from './store/';
import { Provider } from 'react-redux';

import Todo from './feature/Todo';

function App() {
	return (
		<Provider store={store}>
			<CustomThemeProvider>
				<div className='app'>
					<Todo />
				</div>
			</CustomThemeProvider>
		</Provider>
	);
}

export default App;
