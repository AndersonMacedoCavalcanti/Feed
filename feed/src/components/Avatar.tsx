import style from './Avatar.module.css'

interface AvatarProps {
    src: string
    alt?: string
    hasBorder?: boolean
}

export function Avatar({hasBorder = true, src}: AvatarProps) {
    return (
        <>
            <img className={hasBorder ? style.avatar : style.avatarWithBorder} src={src} alt=""/>
        </>
    )
}