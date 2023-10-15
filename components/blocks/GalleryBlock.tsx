//main modules
import { memo } from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Marquee from "react-fast-marquee";
import Link from "next/link";

//types
import type { FC } from "react";

//user components
import ButtonComponent from "../ButtonComponent";

interface IMarqueeComponent {
	image: string;
}

const MarqueeComponent: FC<IMarqueeComponent> = ({ image }) => {
	return (
		<Image
			alt="interier"
			src={image}
			className={"gallery-image"}
			width={392}
			height={320}
			style={{ margin: "12px 12px" }}
		/>
	);
};

const MemoMarqueeComp = memo(MarqueeComponent);

const GalleryBlock: FC = () => {
	return (
		<section
			className="gallery-block"
			style={{ background: "#000", padding: "120px 0" }}
		>
			<Typography
				sx={{
					fontWeight: "800",
					fontSize: "35px",
					textTransform: "uppercase",
					marginLeft: "64px",
					marginBottom: "40px",
				}}
				className="gallery-heading"
			>
				Фотогалерея
			</Typography>

			<Marquee speed={12} direction="left">
				<MemoMarqueeComp image={"/assets/img/interier/Food-two.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Food-three.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Beverage-one.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Food-one.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Food-two.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Food-three.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Beverage-one.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Food-one.webp"} />
			</Marquee>
			<Marquee speed={12} direction="right">
				<MemoMarqueeComp image={"/assets/img/interier/Interier-four.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Interier-five.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Interier-three.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Interier-seven.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Interier-four.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Interier-five.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Interier-three.webp"} />
				<MemoMarqueeComp image={"/assets/img/interier/Interier-seven.webp"} />
			</Marquee>
			<div className="mobile-additional-row">
				<Marquee speed={12} direction="left">
					<MemoMarqueeComp image={"/assets/img/interier/Food-two.webp"} />
					<MemoMarqueeComp image={"/assets/img/interier/Food-three.webp"} />
					<MemoMarqueeComp image={"/assets/img/interier/Beverage-one.webp"} />
					<MemoMarqueeComp image={"/assets/img/interier/Food-one.webp"} />
					<MemoMarqueeComp image={"/assets/img/interier/Food-two.webp"} />
					<MemoMarqueeComp image={"/assets/img/interier/Food-three.webp"} />
					<MemoMarqueeComp image={"/assets/img/interier/Beverage-one.webp"} />
					<MemoMarqueeComp image={"/assets/img/interier/Food-one.webp"} />
				</Marquee>
			</div>
			<div className="gallery-info">
				<Typography
					sx={{
						fontSize: "20px",
						fontWeight: "300",
						width: "912px",
						margin: "40px 0 25px 64px",
					}}
					className="gallery-description"
				>
					Наша кухня, пространство и меню постоянно развиваются по мере того, как мы
					черпаем вдохновение для создания самых невероятных впечатлений для наших
					гостей. Наша кухня, пространство и меню постоянно развиваются
				</Typography>

				<div
					style={{ display: "flex", alignItems: "center" }}
					className="gallery-action"
				>
					<Link href={"/photos"}>
						<ButtonComponent
							className="button-component gallery-button"
							styles={{
								marginLeft: "64px",
								width: "184px",
								height: "50px",
								fontSize: "20px",
								fontWeight: "300",
								textTransform: "none",
								marginRight: "33px",
							}}
							lineHeight={"28px"}
							letterSpacing={"1px"}
						>
							Больше фото
						</ButtonComponent>
					</Link>

					<Link
						href={"/"}
						className="info-link"
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
			</div>
		</section>
	);
};

export default GalleryBlock;
