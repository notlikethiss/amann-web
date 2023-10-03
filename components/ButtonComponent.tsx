import { CSSProperties, FC, ReactNode } from "react";
import { Button } from "@mui/material"

interface IButtonComponent {
	children: string | ReactNode
	width?: string
	height?: string
	fontSize?: string
	className?: string
	lineHeight?: string
	letterSpacing?: string
	styles?: CSSProperties
}

const ButtonComponent: FC<IButtonComponent> = ({ children, className, width, height, fontSize, styles, lineHeight, letterSpacing }) => {
	return (
		<Button
			sx={{
				width: width,
				height: height,
				color: "#fff",
				border: "1px solid #fff",
				fontFamily: "Raleway Light",
				fontWeight: "300",
				lineHeight: lineHeight,
				fontSize: fontSize,
				letterSpacing: letterSpacing,
				borderRadius: "0",
			}}
			className={className}
			style={styles}
		>
			{children}
		</Button>
	)
}

export default ButtonComponent;