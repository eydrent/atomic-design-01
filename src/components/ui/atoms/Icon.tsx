interface IconProps {
    icon?: string;
    size?: string;
    color?: string;
    alt?: string;
}


export const Icon = (props: IconProps) => {

    const { icon, size, color, alt } = props;

    const icon_DivStyle = {
        width: size,
        height: size,
        backgroundColor: color,
    }

    return (
        <div
            className="icon__container"
            style={icon_DivStyle}
        >
            <img
                src={icon}
                className="icon__src"
                alt={alt}
            />
        </div>
    );
};
