import type { NextPage } from "next";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import { Parallax } from "react-parallax";
import { imageArray } from "./api/imageArray";
import Link from "next/link";
import BookingBlock from "../components/blocks/BookingBlock";

const PhotoPage: NextPage = () => {
	return (
		<>
			<section className="photo-page">
				<Parallax
					blur={1}
					bgImage="/assets/img/Photo-bg.png"
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
							src={"/assets/img/interier/Photo-page.webp"}
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
								Наши фото
							</Typography>
							<Typography className="photo-description">
								Для того, чтобы Вы смогли прочувствовать атмосферу нашего ресторана мы
								подготовили подборку замечательных фотографий. Но это всё равно лишь
								фотографии - чтобы погрузиться в замечательную атмосферу - просто
								приходите к нам в гости!
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
							textAlign: "start",
						}}
						className="photos-heading"
					>
						Фотогалерея
					</Typography>
					<Box className={"photos-grid"}>
						{imageArray.map((image, index) => (
							<Box
								className={"mobile-photo-interier"}
								key={index}
								sx={{
									width: "392px",
									height: "320px",
									backgroundImage: `url(${image.image})`,
									backgroundSize: "cover",
								}}
							/>
						))}
					</Box>
					<Link href={"https://instagram.com"} target="_blank">
						<Typography
							sx={{
								margin: "50px 0 10px 0",
								fontSize: "20px",
								fontWeight: "300",
								borderBottom: "1px solid #fff",
							}}
							className="instagram-link"
						>
							Больше фото в нашем Instagram
						</Typography>
					</Link>
					<Typography
						sx={{
							marginBottom: "120px",
							fontSize: "14px",
							fontWeight: "300",
							lineHeight: "19.6px",
						}}
						className="instagram-warning"
					>
						* запрещенная на территории Российской Федерации организация
					</Typography>
				</Box>
				<BookingBlock />
			</section>
		</>
	);
};

export default PhotoPage;
