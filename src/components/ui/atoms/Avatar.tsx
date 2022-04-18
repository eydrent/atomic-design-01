interface AvatarProps {
    src: string;
    alt: string;
    styleClass?: string;
    size: string;
}

export const Avatar = (props: AvatarProps) => {

    let {src, alt, styleClass, size} = props;

    const avatar_imgStyle = {
        width: size,
        height: size,
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`avatar ${styleClass}`}
            style={avatar_imgStyle}/>
    )
}