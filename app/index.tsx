import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home: Config Teams & Game Type</Text>
            <View style={styles.buttonContainer}>
                <Button title="Go to Game Result" onPress={() => router.push('/game-result')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Go to Dashboard" onPress={() => router.push('/dashboard')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    text: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
    buttonContainer: { marginVertical: 10, width: '80%' }
});
