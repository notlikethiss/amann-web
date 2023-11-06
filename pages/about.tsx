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
							AMANN — новая точка притяжения в районе Хамовников и восходящая звезда на
							клубном небосклоне Москвы.
						</Typography>

						<Typography sx={{ marginTop: "10px" }} className="photo-description">
							Здесь, в окружении песчаных барханов и сумерках южной ночи, софиты сияют,
							словно звезды на ночном небе, афро, этно и хаус сливаются в единый
							музыкальный ритм, раскрепощающий эмоции, а авторские коктейли в восточном
							стиле усиливают ощущение, что вы покинули пределы города и оказались в
							эпицентре пустыни.
						</Typography>

						<Typography sx={{ marginTop: "10px" }} className="photo-description">
							AMANN, словно мираж посреди города, — днем видны лишь его очертания, но
							ночью, когда солнце опускается за горизонт, даже невероятные грезы
							становятся реальными.
						</Typography>
					</Box>
				</Box>
			</Parallax>
			<InfoBlock
				heading="Почему Amann?"
				content="aboutPage"
				style={{ margin: "0", paddingTop: "154px" }}
			/>
			<AboutBlock heading="Наш ресторан" content="aboutPage" />
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
							textTransform: "uppercase",
						}}
						className="chief-heading"
					>
						Кухня
					</Typography>
					<Typography
						sx={{
							marginTop: "21px",
							fontSize: "20px",
							fontWeight: "300",
						}}
						className="chief-description"
					>
						Кухня в паназиатском стиле — в разделе роллов можно попробовать
						хэнд-роллы, авторские с фуа-гра или с икрой палтуса, а также фламбе,
						которые эффектно поджигают при подаче.
					</Typography>
					<Typography
						sx={{
							marginTop: "21px",
							fontSize: "20px",
							fontWeight: "300",
						}}
						className="chief-description"
					>
						Раз в несколько месяцев в AMANN будут приглашать нового шеф-повара, и
						кухня будет менять свою географию.
					</Typography>
				</Box>
			</Box>
		</section>
	);
};

export default AboutPage;
