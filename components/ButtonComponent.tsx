//main modules
import { Button } from "@mui/material";

//types
import { CSSProperties, MouseEventHandler, FC, ReactNode } from "react";

interface IButtonComponent {
	children: string | ReactNode;
	width?: string;
	height?: string;
	fontSize?: string;
	className?: string;
	lineHeight?: string;
	letterSpacing?: string;
	styles?: CSSProperties;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonComponent: FC<IButtonComponent> = ({
	children,
	className,
	width,
	height,
	fontSize,
	styles,
	lineHeight,
	letterSpacing,
	onClick,
}) => {
	return (
		<Button
			sx={{
				width: width,
				height: height,
				color: "#fff",
				border: "1px solid #fff",
				fontFamily: "Raleway",
				fontWeight: "300",
				lineHeight: lineHeight,
				fontSize: fontSize,
				letterSpacing: letterSpacing,
				borderRadius: "0",
			}}
			disableRipple
			onClick={onClick}
			className={className}
			style={styles}
		>
			{children}
		</Button>
	);
};

export default ButtonComponent;
