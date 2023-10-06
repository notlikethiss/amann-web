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
					}}>
						<Image alt='interier' src={"/assets/img/Interier-nine.jpg"} width={600} height={522} />
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								justifyContent: "center",
								marginLeft: "64px",
								marginRight: "80px"
							}}>
							<Typography
								sx={{
									textTransform: "uppercase",
									fontSize: "35px",
									fontWeight: "800",
									marginBottom: "24px"
								}}
							>
								Наши фото
							</Typography>
							<Typography>
								Для того, чтобы Вы смогли прочувствовать атмосферу<br />
								нашего ресторана мы подготовили подборку<br />
								замечательных фотографий. Но это всё равно лишь <br />
								фотографии - чтобы погрузиться в замечательную<br />
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
					>
						Фотогалерея
					</Typography>
					<Box className={"photos-grid"}>
						{imageArray.map((image, index) => (
							<Image alt='interier' src={image.image} width={392} height={320} key={index} />
						))}
					</Box>
				</Box>
			</section>
		</>
	);
};

export default PhotoPage;