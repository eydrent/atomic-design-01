interface ImgIconProps {
    src?: string;
    alt?: string;
    styleClass?: string;
    size: string;
}

export const ImgIcon = (props: ImgIconProps) => {

    let {src, alt, styleClass, size} = props;

    const ImgIcon_DivStyle = {
        width: size,
        height: size,
    }

    return (
        <div
            className={styleClass}
            style={ImgIcon_DivStyle}
        >
            {
                src &&
                <img src={src} alt={alt} className='ImgIcon__Pic'/>
            }
        </div>
    )
}