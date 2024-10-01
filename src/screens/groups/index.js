
import { StyleSheet, Text, View } from 'react-native';
import { Container, Title } from './styles';

export function Groups() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Groups</Text>
            </View>

            <Container>
                <Title>
                    Groups
                </Title>
            </Container>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 32
    }
});