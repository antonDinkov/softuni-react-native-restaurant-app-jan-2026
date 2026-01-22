import { StyleSheet, Text, View } from 'react-native';
import { } from 'react-native-web';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Restaurant App</Text>
        </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Featured Items</Text>
                <View style={styles.featuredList}>
                    {featuredItems.map((item) => (
                        <View key={item.id}>
                            <Card {...item} />
                        </View>
                    ))}
                </View>
            </View>

            {/* Category Section */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
