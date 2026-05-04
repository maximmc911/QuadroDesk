import { TbError404 } from "react-icons/tb";
import type { IconProps } from "../../shared/types/icon.interface";
import { GoXCircleFill } from "react-icons/go";


const Icons = ({ name, color, size }: IconProps) => {
    return (
        <>
            {name.toLocaleLowerCase() == '404'.toLocaleLowerCase() ? <TbError404 color={color ? color : 'black'} size={size ? size : 30} /> : null}
            {name.toLocaleLowerCase() == 'error'.toLocaleLowerCase() ? <GoXCircleFill color={color ? color : 'black'} size={size ? size : 30} /> : null}

        </>
    )
}

export default Icons