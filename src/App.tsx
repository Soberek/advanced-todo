// import { theme } from './Theme';

import CustomThemeProvider from './theme';

import ThemeTest from './components/ThemeTest';

function App() {
	return (
		<CustomThemeProvider>
			<div>
				Hello
				<ThemeTest />
			</div>
		</CustomThemeProvider>
	);
}

export default App;
