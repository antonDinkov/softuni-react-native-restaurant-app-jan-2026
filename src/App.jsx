import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import CartProvider from './contexts/cart/CartProvider';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <CartProvider>
                <RootNavigator />
            </CartProvider>
        </NavigationContainer>
    );
}

