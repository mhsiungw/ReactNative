import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
            <DrawerItem label="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
        </DrawerContentScrollView>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="AwesomeProject" component={TabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
