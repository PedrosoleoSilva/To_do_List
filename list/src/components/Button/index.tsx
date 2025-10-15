import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
}

const Button = ({title, ...rest}: Props) => {
    return (
        <TouchableOpacity   
            style={styles.button} 
            activeOpacity={0.8} 
            {...rest}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;