interface NameLabelProps {
    text: string;
    fontSize: string;
    fontWeight: string;
}

export const NameLabel = (props: NameLabelProps) => {

    const {text, fontSize, fontWeight} = props;

    const nameLabelStyle = {
        fontSize: fontSize,
        fontWeight: fontWeight,
    };

    return (
        <p style={nameLabelStyle}>
            {text}
        </p>
    )
};
