//main modules
import { Box, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import Image from "next/image";

//types
import type { FC } from "react";

//user components
import InfoBlock from "../components/blocks/InfoBlock";
import AboutBlock from "../components/blocks/AboutBlock";

const AboutPage: FC = () => {
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
						src={"/assets/img/interier/Interier-seven.webp"}
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
							О нас
						</Typography>
						<Typography className="photo-description">
							AMANN – это масштабный ресторанный проект под руководством итальянского
							бренд-шефа Джона Смита. Одновременно изысканная и простая итальянская
							кухня в руках маэстро приобретает новые краски и привлекает настоящих
							ценителей итальянской классики кулинарного жанра.
						</Typography>
					</Box>
				</Box>
			</Parallax>
			<InfoBlock style={{ margin: "0", paddingTop: "154px" }} />
			<AboutBlock heading="Заголовок" />
			<Box
				sx={{
					background: "#000",
					padding: "100px 64px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				className={"about-chief"}
			>
				<Image
					alt="chief"
					src={"/assets/img/Chief.jpg"}
					width={728}
					height={485}
					className="photo-chief"
				/>
				<Box
					sx={{
						position: "relative",
						right: "64px",
						padding: "64px 51px 54px 72px",
						display: "flex",
						alignItems: "flex-start",
						flexDirection: "column",
						justifyContent: "center",
						background: "#813A34",
					}}
					className={"chief-container"}
				>
					<Typography
						sx={{
							color: "#fff",
							fontSize: "35px",
							fontWeight: "800",
						}}
						className="chief-heading"
					>
						Наш шеф
					</Typography>
					<Typography
						sx={{
							marginTop: "21px",
							fontSize: "20px",
							fontWeight: "300",
						}}
						className="chief-description"
					>
						В ресторане AMANN работают профессиональные повара, которые используют
						исключительно свежие продукты. Так, блюда готовятся из исключительно
						свежих продуктов, которые доставляются непосредственно из Италии.
					</Typography>
				</Box>
			</Box>
		</section>
	);
};

export default AboutPage;
