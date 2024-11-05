
import { StyleSheet, Text, View } from 'react-native';
import { Container, Title } from './styles';
import { Header } from '@components/header';

export function Groups() {
    return (
        <Container>
            <Header/>
            <Title>
                Groups
            </Title>
        </Container>
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