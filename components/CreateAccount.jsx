
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';



export default function CreateAccount({handleCreateAccount}) {
    return (
        <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
            <Text > Create Account</Text>
        </TouchableOpacity>
    )
}
