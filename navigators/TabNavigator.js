import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import JSONScreen from '../screens/JSONScreen'
import SettingsScreen from '../screens/SettingScreen'

const Tab = createBottomTabNavigator()

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="JSON" component={JSONScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Setting" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator
