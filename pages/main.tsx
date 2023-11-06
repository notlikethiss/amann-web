//main modules
import Image from "next/image";
import { Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Parallax } from "react-parallax";

//types
import type { FC } from "react";

//user components
import InfoBlock from "../components/blocks/InfoBlock";
import AboutBlock from "../components/blocks/AboutBlock";
import GalleryBlock from "../components/blocks/GalleryBlock";
import NewsBlock from "../components/blocks/NewsBlock";
import BookingBlock from "../components/blocks/BookingBlock";
import SubscribeBlock from "../components/blocks/SubscribeBlock";
import ContactBlock from "../components/blocks/ContactBlock";
import ButtonComponent from "../components/ButtonComponent";
import Link from "next/link";

const MarqueeComponent: FC = () => {
	return (
		<div className="marquee-block" style={{ overflow: "hidden" }}>
			<p className="marquee-tilda">~</p>
			БИЗНЕС-ЛАНЧИ ДО 14:00
		</div>
	);
};

const MainPage: FC = () => {
	return (
		<main className="main-block mobile-padding">
			<Parallax
				blur={1}
				bgImage="/assets/img/Main.webp"
				bgImageAlt="bg"
				strength={300}
				className="address"
			>
				<div className="desktop-container">
					<Image
						alt="logo"
						src={"/assets/img/Logo.svg"}
						className="main-logo"
						width={230}
						height={40}
					/>
					<Typography
						sx={{
							fontSize: "18px",
							letterSpacing: "3px",
							marginTop: "15px",
							marginBottom: "20px",
						}}
					>
						Ночной клуб
					</Typography>
					<Typography
						className="sm-text"
						sx={{
							fontSize: "20px",
							fontWeight: "300",
							marginBottom: "10px",
							letterSpacing: "5px",
							textTransform: "uppercase",
						}}
					>
						Саввинская набережная, 12с8
					</Typography>
					<div className="date-block">
						<Typography
							className="sm-text"
							sx={{ fontSize: "20px", fontWeight: "300", letterSpacing: "3px" }}
						>
							чт
						</Typography>
						<Typography
							className="sm-text"
							sx={{ fontSize: "20px", fontWeight: "300", letterSpacing: "3px" }}
						>
							17:00 - 00:00
						</Typography>
					</div>
					<div className="date-block">
						<Typography
							className="mobile-text"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								marginBottom: "30px",
								letterSpacing: "3px",
							}}
						>
							пт-сб
						</Typography>
						<Typography
							className="mobile-text"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								marginBottom: "30px",
								letterSpacing: "3px",
							}}
						>
							18:00 - 06:00
						</Typography>
					</div>
				</div>
				<div className="mobile-container">
					<Image
						alt="logo"
						src={"/assets/img/Logo.svg"}
						className="main-logo"
						width={230}
						height={40}
					/>
					<Typography
						sx={{
							fontSize: "13px",
							letterSpacing: "3px",
							marginTop: "15px",
							marginBottom: "20px",
						}}
					>
						Ночной клуб
					</Typography>
					<Typography
						className="sm-text"
						sx={{
							fontSize: "20px",
							fontWeight: "300",
							marginBottom: "10px",
							letterSpacing: "5px",
							textTransform: "uppercase",
						}}
					>
						Саввинская набережная, 12с8
					</Typography>
					<div className="date-block">
						<Typography
							className="sm-text"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								letterSpacing: "3px",
							}}
						>
							чт
						</Typography>
						<Typography
							className="sm-text"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								letterSpacing: "2px",
								width: "138px",
								whiteSpace: "nowrap",
							}}
						>
							17:00 - 00:00
						</Typography>
					</div>
					<div className="date-block">
						<Typography
							className="mobile-text"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								marginBottom: "30px",
								letterSpacing: "3px",
								width: "25px",
								whiteSpace: "nowrap",
							}}
						>
							пт-сб
						</Typography>
						<Typography
							className="mobile-text"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								marginBottom: "30px",
								letterSpacing: "2px",
							}}
						>
							18:00 - 06:00
						</Typography>
					</div>
				</div>
				<Link href={"/menu"}>
					<Typography
						sx={{
							textDecoration: "underline",
							fontSize: "18px",
							marginBottom: "20px",
						}}
					>
						Просмотреть меню
					</Typography>
				</Link>
				<ButtonComponent
					width={"288px"}
					height={"50px"}
					className={"button-component mobile-button"}
					fontSize={"20px"}
					lineHeight={"28px"}
					letterSpacing={"0px"}
					styles={{ textTransform: "none", fontWeight: "300" }}
				>
					Забронировать столик
				</ButtonComponent>
			</Parallax>
			<div className="under-block">
				<InfoBlock heading="АТМОСФЕРА" content="mainPage" />

				<AboutBlock heading="ПРОСТРАНСТВО" content="mainPage" link />

				<GalleryBlock />

				<NewsBlock />

				<BookingBlock />

				<SubscribeBlock />

				<ContactBlock />
			</div>
		</main>
	);
};

export default MainPage;
