import { createNativeStackNavigator } from '@react-navigation/native-stack';
import productList from '../Container/ProductList/Index';
import CategoryList from '../Container/CategoryList/Index';


const Stack = createNativeStackNavigator();


const HomeStacks = () => {
    return (
        <Stack.Navigator
            initialRouteName="categorylist"
        >
            <Stack.Screen
                name="categorylist"
                component={CategoryList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="productlist"
                component={productList}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default HomeStacks