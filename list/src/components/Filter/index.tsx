import { FilterStatus } from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import StatusIcon from "../StatusIcon";

type Props = TouchableOpacityProps & {
    status: FilterStatus
    isActive: boolean
}

const Filter = ({isActive, status, ...rest}: Props) => {
    return (
        <TouchableOpacity style={[styles.filterContainer, {opacity: isActive ? 1 : 0.5}]}  {...rest}>
            <StatusIcon status={status}/>
            <Text style={styles.filterText}>
                {
                    status === FilterStatus.COMPLETED ? "Concluido" : "Pendentes"
                }
            </Text>
        </TouchableOpacity>
    );
}

export default Filter;