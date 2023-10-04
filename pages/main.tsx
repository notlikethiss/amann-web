import { FC } from 'react'
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import ButtonComponent from '../components/ButtonComponent';
import Marquee from 'react-fast-marquee';
import InfoBlock from '../components/blocks/InfoBlock';
import AboutBlock from '../components/blocks/AboutBlock';
import GalleryBlock from '../components/blocks/GalleryBlock';
import NewsBlock from '../components/blocks/NewsBlock';
import BookingBlock from '../components/blocks/BookingBlock';
import SubscribeBlock from '../components/blocks/SubscribeBlock';
import ContactBlock from '../components/blocks/ContactBlock';

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
			<div className="address">
				<Image
					style={{ marginBottom: "30px" }}
					alt="logo"
					src={"Logo.svg"}
					className="header-logo"
					width={230}
					height={40}
				/>
				<Typography sx={{ fontSize: "20px", fontWeight: "300", marginBottom: "10px" }}>Москва, ул. Прозоровского 21</Typography>
				<Typography sx={{ fontSize: "20px", fontWeight: "300" }}>пн-пт 9:00 - 22:00</Typography>
				<Typography sx={{ fontSize: "20px", fontWeight: "300", marginBottom: "30px" }}>сб-вс 10:00 - 23:00</Typography>
				<ButtonComponent
					width={"288px"}
					height={"50px"}
					className={"button-component"}
					fontSize={"20px"}
					lineHeight={"28px"}
					letterSpacing={"-1px"}
					styles={{ textTransform: "none", fontWeight: "300" }}
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
					<MarqueeComponent />
					<MarqueeComponent />
					<MarqueeComponent />
					<MarqueeComponent />
				</Marquee>

				{/* main blocks */}
				<InfoBlock />

				<AboutBlock />

				<GalleryBlock />

				<NewsBlock />

				<BookingBlock />

				<SubscribeBlock />

				<ContactBlock />

			</div>
		</main>
	)
}

export default MainPage;