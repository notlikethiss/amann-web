import { FC } from 'react'

import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const AboutBlock: FC = () => {
	return (
		<div className="about-block">
			<div>
				<Typography sx={{ fontWeight: "800", fontSize: "35px", textTransform: "uppercase" }}>О нас</Typography>
				<Typography
					sx={{
						marginTop: "21px",
						width: "520px",
						fontSize: "20px",
						fontWeight: "300"
					}}>
					AMANN – это масштабный ресторанный проект
					под руководством итальянского бренд-шефа Джона Смита.
					Одновременно изысканная и простая итальянская
					кухня в руках маэстро приобретает новые краски
					и привлекает настоящих ценителей итальянской
					классики кулинарного жанра.
				</Typography>
				<Typography
					sx={{
						marginTop: "15px",
						marginBottom: "30px",
						width: "520px",
						fontSize: "20px",
						fontWeight: "300"
					}}>
					В ресторане AMANN работают профессиональные повара,
					которые используют исключительно свежие продукты.
					Так, блюда готовятся из исключительно свежих продуктов,
					которые доставляются непосредственно из Италии.
				</Typography>
				<Link
					style={{
						fontFamily: "Raleway",
						fontWeight: "500",
						fontSize: "20px",
						borderBottom: "1px solid #fff"
					}} href={"/about"}
				>
					Подробнее о нас
				</Link>
			</div>
			<div style={{ display: "flex", flexDirection: "column", width: "624px" }}>
				<Image
					alt='interier'
					src={"/assets/img/Interier-three.jpg"}
					width={550}
					height={394}
					style={{ position: "relative", right: "60px", top: "50px" }}
				/>
				<Image
					alt='interier'
					src={"/assets/img/Interier-four.jpg"}
					width={550}
					height={392}
				/>
			</div>
		</div >
	);
};

export default AboutBlock;