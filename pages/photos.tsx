import type { NextPage } from "next";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import { Parallax } from "react-parallax";
import { imageArray } from "./api/imageArray";

const PhotoPage: NextPage = () => {
	return (
		<>
			<section className="photo-page">
				<Parallax blur={1} bgImage="/assets/img/Photo-bg.png" bgImageAlt="bg" strength={300}>
					<Box sx={{
						display: "flex",
						height: "522px",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
					}}
						className="photo-container"
					>
						<Image
							alt='interier'
							src={"/assets/img/Interier-nine.jpg"}
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
								marginRight: "80px"
							}}
							className={"photo-info"}
						>
							<Typography
								sx={{
									textTransform: "uppercase",
									fontSize: "35px",
									fontWeight: "800",
									marginBottom: "24px"
								}}
								className="photo-heading"
							>
								Наши фото
							</Typography>
							<Typography className="photo-description">
								Для того, чтобы Вы смогли прочувствовать атмосферу
								нашего ресторана мы подготовили подборку
								замечательных фотографий. Но это всё равно лишь
								фотографии - чтобы погрузиться в замечательную
								атмосферу - просто приходите к нам в гости!
							</Typography>
						</Box>
					</Box>
				</Parallax>
				<Box className={"photos-container"}>
					<Typography
						sx={{
							textTransform: "uppercase",
							fontSize: "35px",
							fontWeight: "800",
							marginBottom: "40px",
							width: "1224px",
							textAlign: "start"
						}}
						className="photos-heading"
					>
						Фотогалерея
					</Typography>
					<Box className={"photos-grid"}>
						{imageArray.map((image, index) => (
							<Image
								alt='interier'
								src={image.image}
								width={392}
								height={320}
								key={index}
								className="mobile-photo-interier"
							/>
						))}
					</Box>
				</Box>
			</section>
		</>
	);
};

export default PhotoPage;