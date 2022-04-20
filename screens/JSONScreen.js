import { Text, View, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import styles from '../style/style'

function JSONScreen() {
    useEffect(() => {
        fetchJSON()
    }, [])

    const [json, setJSON] = useState(null)

    const fetchJSON = async () => {
        try {
            let res = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
            if (!res.ok) throw new Error(`Something went wrong! ${statusText}`)
            let JSON = await res.json()
            setJSON(JSON)
            return JSON
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.center}>
            <FlatList
                data={json}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <Text>
                        <Text style={styles.titleText}>{item.name}</Text>
                        <Text> {item.city}</Text>
                    </Text>
                )}
            />
        </View>
    )
}

export default JSONScreen
