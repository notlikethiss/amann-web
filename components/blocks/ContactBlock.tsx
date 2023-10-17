//main modules
import { Box, Typography } from "@mui/material";
import Image from "next/image";

//types
import type { FC } from "react";

//user components
import ButtonComponent from "../ButtonComponent";

const ContactBlock: FC = () => {
	return (
		<section className="contact-block">
			<Image
				alt="map"
				src={"/assets/img/Map.svg"}
				width={936}
				height={600}
				className="contact-image"
			/>
			<Box
				sx={{
					paddingLeft: "64px",
					display: "flex",
					flexDirection: "column",
					alignItems: "baseline",
					justifyContent: "center",
				}}
				className={"contact-container"}
			>
				<Typography
					sx={{
						fontSize: "35px",
						fontWeight: "800",
						letterSpacing: "2px",
						textTransform: "uppercase",
						color: "#fff",
					}}
					className="info-heading"
				>
					Контакты
				</Typography>

				<Typography
					sx={{
						marginTop: "30px",
						fontSize: "20px",
						fontWeight: "300",
						lineHeight: "28px",
						letterSpacing: "1px",
					}}
					className="contact-description"
				>
					+7 (926) 697 77 79
					<br />
					VMVNNRest@yandex.ru
				</Typography>

				<Typography
					sx={{
						marginTop: "15px",
						fontSize: "20px",
						fontWeight: "300",
						lineHeight: "28px",
						letterSpacing: "1px",
					}}
					className="contact-description"
				>
					Саввинская набережная, 12с8
				</Typography>

				<Typography
					sx={{
						marginTop: "15px",
						fontSize: "20px",
						fontWeight: "300",
						lineHeight: "28px",
						letterSpacing: "1px",
					}}
					className="contact-description"
				>
					пн-пт 9:00 - 22:00
					<br />
					сб-вс 10:00 - 23:00
				</Typography>

				<ButtonComponent
					className={"button-component contact-button"}
					styles={{
						marginTop: "30px",
						textTransform: "inherit",
						width: "226px",
						height: "56px",
						fontSize: "20px",
						fontWeight: "500",
					}}
				>
					Написать нам
				</ButtonComponent>
			</Box>
		</section>
	);
};

export default ContactBlock;
