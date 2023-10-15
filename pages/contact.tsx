//main modules
import { Box, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import Image from "next/image";

//types
import type { FC } from "react";

//user components
import InfoBlock from "../components/blocks/InfoBlock";
import AboutBlock from "../components/blocks/AboutBlock";
import ContactBlock from "../components/blocks/ContactBlock";
import BookingBlock from "../components/blocks/BookingBlock";

const ContactPage: FC = () => {
	return (
		<section className="about-page mobile-padding">
			<Parallax
				blur={1}
				bgImage="/assets/img/About-bg.png"
				bgImageAlt="bg"
				strength={300}
			>
				<Box
					sx={{
						display: "flex",
						height: "522px",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
					}}
					className="photo-container"
				>
					<Image
						alt="interier"
						src={"/assets/img/interier/Interier-six.webp"}
						width={600}
						height={522}
						className="photo-interier"
					/>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							marginLeft: "64px",
							marginRight: "80px",
						}}
						className={"photo-info"}
					>
						<Typography
							sx={{
								textTransform: "uppercase",
								fontSize: "35px",
								fontWeight: "800",
								marginBottom: "24px",
							}}
							className="photo-heading"
						>
							Контакты
						</Typography>
						<Typography className="photo-description">
							Свяжитесь с нами по номеру телефона или оставьте заявку на сайте.
						</Typography>
					</Box>
				</Box>
			</Parallax>
			<BookingBlock />
			<ContactBlock />
		</section>
	);
};

export default ContactPage;
