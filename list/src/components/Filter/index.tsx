import { FilterStatus } from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    status: FilterStatus
    isActive: boolean
}

const Filter = ({isActive, status, ...rest}: Props) => {
    return (
        <TouchableOpacity style={styles.filterContainer} {...rest}>
            <Text style={styles.filterText}>
                {
                    status === FilterStatus.COMPLETED ? "Concluido" : "Pendentes"
                }
            </Text>
        </TouchableOpacity>
    );
}

export default Filter;