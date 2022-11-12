
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';



export default function LoginButton({handleSignIn}) {
    return (
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.buttontext} > Login </Text>
        </TouchableOpacity>
    )
}
