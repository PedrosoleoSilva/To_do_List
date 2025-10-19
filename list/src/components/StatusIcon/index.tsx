import { CircleCheck, CircleDashed } from "lucide-react-native";
import {FilterStatus}  from "@/types/FilterStatus"



const StatusIcon = ({status}: {status: FilterStatus}) => {
    return status === FilterStatus.COMPLETED ? (
        <CircleCheck size={18}  color="#2c46b1"/>
    ) : (
        <CircleDashed size={18} color="#000000"/>
    )
}

export default StatusIcon;