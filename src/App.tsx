// import { theme } from './Theme';

import CustomThemeProvider from './theme';

import Main from './components/Main';

function App() {
	return (
		<CustomThemeProvider>
			<div>
				<Main />
			</div>
		</CustomThemeProvider>
	);
}

export default App;
