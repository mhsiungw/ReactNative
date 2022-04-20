import { Text, View, Button } from 'react-native'
import styles from '../style/style'

function SettingsScreen({ navigation }) {
    return (
        <View style={styles.center}>
            <Text>Settings!</Text>
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    )
}

export default SettingsScreen
