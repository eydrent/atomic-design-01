interface ButtonProps {
    styleClass?: string;
    text: string;
    height: string;
    width: string;
    fontSize?: string;
    textColor?: string;
    backgroundColor?: string;
    borderRadius?: string;
}

export const Button = ( props: ButtonProps ) => {
    const { styleClass, text, height, width, fontSize, textColor, backgroundColor, borderRadius } = props;

    const buttonStyle = {
        backgroundColor,
        borderRadius,
        color: textColor,
        fontSize,
        height,
        width,
    };

    return (
        <button
            className={`btn ${styleClass}`}
            style={buttonStyle}
        >
            {text}
        </button>
    );
};
