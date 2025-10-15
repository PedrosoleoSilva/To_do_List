import { TextInput, TextInputProps } from "react-native";
import {styles} from "./styles";

const Input = ({...rest}: TextInputProps) => {
    return (
        <TextInput
        style={styles.container}
            {...rest}
        />
    );
}

export default Input;
