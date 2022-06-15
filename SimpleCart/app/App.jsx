import * as React from 'react';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import cartReducer from './redux/reducers/cartReducer';

import Home from './screens/Home';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator();
const store = createStore(cartReducer);

const App = () => {
	return (
		<Provider store={store}>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={eva.light} >
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name='Products' component={Home} />
						<Stack.Screen name='Cart' component={Cart} />
					</Stack.Navigator>
				</NavigationContainer>
			</ApplicationProvider>
		</Provider>
	);
}

export default App;
