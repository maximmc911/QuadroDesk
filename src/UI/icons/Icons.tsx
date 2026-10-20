import { TbError404 } from "react-icons/tb";
import type { IconProps } from "../../shared/types/icon.interface";
import { GoXCircleFill } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";

const Icons = ({ name, color, size }: IconProps) => {
    return (
        <>
            {name.toLocaleLowerCase() == '404'.toLocaleLowerCase() ? <TbError404 color={color ? color : 'var(--muted-text)'} size={size ? size : 30} /> : null}
            {name.toLocaleLowerCase() == 'error'.toLocaleLowerCase() ? <GoXCircleFill color={color ? color : 'var(--muted-text)'} size={size ? size : 30} /> : null}
            {name.toLocaleLowerCase() == 'settings'.toLocaleLowerCase() ? <IoSettingsSharp  size={size ? size : 30} className="text-muted-text"/> : null}

        </>
    )
}

export default Icons