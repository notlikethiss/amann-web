import { FC } from 'react'

import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { CSSProperties } from '@mui/material/styles/createMixins';

interface IInfoBlock {
	style?: CSSProperties
}

const InfoBlock: FC<IInfoBlock> = ({ style }) => {
	return (
		<section className={"information-block"} style={style}>
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
				<Typography
					fontWeight={800}
					fontSize={35}
					color={"#000"}
					textTransform={"uppercase"}
				>
					Короткий заголовок
				</Typography>
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
		</section>
	);
};

export default InfoBlock;