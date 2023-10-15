//main modules
import Image from "next/image";

//types
import type { FC } from "react";

const Arrow: FC = () => {
	return (
		<Image
			className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconStandard css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon"
			alt="arrow"
			style={{ width: "15px" }}
			src={"/assets/img/Select-arrow.svg"}
			width={15}
			height={8}
		/>
	);
};

export default Arrow;
