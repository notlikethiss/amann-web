import { FC, memo } from "react";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import ButtonComponent from "../ButtonComponent";
import Marquee from 'react-fast-marquee';
import Link from "next/link";

interface IMarqueeComponent {
	image: string
}

const MarqueeComponent: FC<IMarqueeComponent> = ({ image }) => {
	return (
		<Image
			alt="interier"
			src={image}
			width={392}
			height={320}
			style={{ margin: "12px 12px" }}
		/>
	);
};

const MemoMarqueeComp = memo(MarqueeComponent);

const GalleryBlock: FC = () => {

	return (
		<section className="gallery-block" style={{ background: "#191D1E", padding: "120px 0" }}>
			<Typography
				sx={{
					fontWeight: "800",
					fontSize: "35px",
					textTransform: "uppercase",
					marginLeft: "64px",
					marginBottom: "40px"
				}}
			>
				Фотогалерея
			</Typography>

			<Marquee speed={12} direction="left">
				<MemoMarqueeComp image={"/assets/img/Interier-four.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-three.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-five.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-six.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-four.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-three.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-five.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-six.jpg"} />
			</Marquee>
			<Marquee speed={12} direction="right">
				<MemoMarqueeComp image={"/assets/img/Interier-two.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-one.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-seven.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-eight.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-two.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-one.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-seven.jpg"} />
				<MemoMarqueeComp image={"/assets/img/Interier-eight.jpg"} />
			</Marquee>

			<Typography sx={{ fontSize: "20px", fontWeight: "300", width: "912px", margin: "40px 0 25px 64px" }}>
				Наша кухня, пространство и меню постоянно
				развиваются по мере того, как мы черпаем
				вдохновение для создания самых невероятных
				впечатлений для наших гостей. Наша кухня,
				пространство и меню постоянно развиваются
			</Typography>

			<div style={{ display: "flex", alignItems: "center" }}>
				<Link href={"/photos"}>
					<ButtonComponent
						className="button-component"
						styles={{
							marginLeft: "64px",
							width: "184px",
							height: "50px",
							fontSize: "20px",
							fontWeight: "300",
							textTransform: "none",
							marginRight: "33px"
						}}
						lineHeight={"28px"}
						letterSpacing={"1px"}
					>
						Больше фото
					</ButtonComponent>
				</Link>

				<Link
					href={"/"}
					style={{
						fontFamily: "Raleway",
						fontWeight: "300",
						fontSize: "20px",
						color: "#fff",
						borderBottom: "1px solid #fff",
					}}
				>
					Наш инстаграм
				</Link>
			</div>
		</section>
	);
};

export default GalleryBlock;
