import { FC } from 'react'
import Image from 'next/image';
import { Typography } from '@mui/material';
import ButtonComponent from '../components/ButtonComponent';
import Marquee from 'react-fast-marquee';
import InfoBlock from '../components/blocks/InfoBlock';
import AboutBlock from '../components/blocks/AboutBlock';
import GalleryBlock from '../components/blocks/GalleryBlock';
import NewsBlock from '../components/blocks/NewsBlock';
import BookingBlock from '../components/blocks/BookingBlock';
import SubscribeBlock from '../components/blocks/SubscribeBlock';
import ContactBlock from '../components/blocks/ContactBlock';
import { Parallax } from 'react-parallax';

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
		<main className="main-block">
			<Parallax blur={1} bgImage="/Main-bg.jpg" bgImageAlt="bg" strength={300} className='address'>
				<div className='desktop-container'>
					<Image
						style={{ marginBottom: "30px" }}
						alt="logo"
						src={"Logo.svg"}
						className="header-logo"
						width={230}
						height={40}
					/>
					<Typography className="sm-text" sx={{ fontSize: "20px", fontWeight: "300", marginBottom: "10px" }}>Москва, ул. Прозоровского 21</Typography>
					<Typography className="" sx={{ fontSize: "20px", fontWeight: "300" }}>пн-пт 9:00 - 22:00</Typography>
					<Typography className="mobile-text" sx={{ fontSize: "20px", fontWeight: "300", marginBottom: "30px" }}>сб-вс 10:00 - 23:00</Typography>
				</div>
				<div className='mobile-container'>
					<Image
						style={{ marginBottom: "30px" }}
						alt="logo"
						src={"Logo.svg"}
						className="header-logo"
						width={230}
						height={40}
					/>
					<Typography className="sm-text" sx={{ fontSize: "20px", fontWeight: "300", marginBottom: "10px" }}>Москва, ул. Прозоровского 21</Typography>
					<Typography className="" sx={{ fontSize: "20px", fontWeight: "300" }}>пн-пт 9:00 - 22:00</Typography>
					<Typography className="mobile-text" sx={{ fontSize: "20px", fontWeight: "300", marginBottom: "30px" }}>сб-вс 10:00 - 23:00</Typography>
				</div>
				<ButtonComponent
					width={"288px"}
					height={"50px"}
					className={"button-component mobile-button"}
					fontSize={"20px"}
					lineHeight={"28px"}
					letterSpacing={"-1px"}
					styles={{ textTransform: "none", fontWeight: "300" }}
				>
					Забронировать столик
				</ButtonComponent>
			</Parallax>
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

				<InfoBlock />

				<AboutBlock />

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