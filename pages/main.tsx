import { FC } from 'react'
import Image from 'next/image';
import { Typography } from '@mui/material';
import ButtonComponent from '../components/ButtonComponent';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => {
	return (
		<div className="marquee-block" style={{ overflow: "hidden" }}>
			<p className="marquee-tilda">~</p>
			БИЗНЕС-ЛАНЧИ ДО 14:00
		</div>
	);
}

const MainPage: FC = () => {

	return (
		<main className="main-block">
			<div className="info-block">
				<Image
					style={{ marginBottom: "30px" }}
					alt="logo"
					src={"Logo.svg"}
					className="header-logo"
					width={230}
					height={40}
				/>
				<Typography sx={{ fontSize: "20px", marginBottom: "10px" }}>Москва, ул. Прозоровского 21</Typography>
				<Typography sx={{ fontSize: "20px" }}>пн-пт 9:00 - 22:00</Typography>
				<Typography sx={{ fontSize: "20px", marginBottom: "30px" }}>сб-вс 10:00 - 23:00</Typography>
				<ButtonComponent
					width={"288px"}
					height={"50px"}
					className={"button-component"}
					fontSize={"20px"}
					lineHeight={"28px"}
					letterSpacing={"-1px"}
					styles={{ textTransform: "none" }}
				>
					Забронировать столик
				</ButtonComponent>
			</div>

			<div className="under-block">
				<Marquee className={"main-marquee"}>
					<MarqueeComponent />
					<MarqueeComponent />
					<MarqueeComponent />
					<MarqueeComponent />
				</Marquee>

				<div className="information-block">
					<div className="info-collage" style={{ marginLeft: "64px" }}>
						<Image
							alt='interier'
							src={"/assets/img/Interier-one.jpg"}
							width={394}
							height={550}
							style={{ position: "relative", left: "20px", top: "50px" }}
						/>
						<Image
							alt='interier'
							src={"/assets/img/Interier-two.jpg"}
							width={392}
							height={550}
						/>
					</div>
					<div className="info-text">
						<Typography fontWeight={800} fontSize={35} color={"#000"}>КОРОТКИЙ ЗАГОЛОВОК</Typography>
						<Typography
							width={445}
							color={"#000"}
							fontWeight={300}
							fontSize={20}
							lineHeight={"28px"}
							marginTop={"21px"}
							marginBottom={"30px"}
						>
							Минималистичный ресторан AMANN,
							расположенный в центре города на территории
							отеля «Москва» в самом сердце столицы,
							приглашает гостей попробовать блюда итальянской кухни.
						</Typography>
						<Link
							style={{
								fontFamily: "Raleway",
								fontWeight: "500",
								fontSize: "20px",
								color: "#000",
								borderBottom: "1px solid #000",
							}}
							href={"/menu"}
						>
							Посмотреть меню
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}

export default MainPage;