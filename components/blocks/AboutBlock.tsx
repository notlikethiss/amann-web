//main modules
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";

//types
import type { FC } from "react";
interface IAbout {
	heading: string;
	link?: boolean;
}

const AboutBlock: FC<IAbout> = ({ heading, link }) => {
	return (
		<section className="about-block">
			<div className="about-info">
				<Typography
					sx={{
						fontWeight: "800",
						fontSize: "35px",
						textTransform: "uppercase",
					}}
					className="info-heading"
				>
					{heading}
				</Typography>
				<Typography
					sx={{
						marginTop: "21px",
						width: "520px",
						fontSize: "20px",
						fontWeight: "300",
					}}
					className="about-description"
				>
					AMANN – это масштабный ресторанный проект под руководством итальянского
					бренд-шефа Джона Смита. Одновременно изысканная и простая итальянская кухня
					в руках маэстро приобретает новые краски и привлекает настоящих ценителей
					итальянской классики кулинарного жанра.
				</Typography>
				<Typography
					sx={{
						marginTop: "15px",
						marginBottom: "30px",
						width: "520px",
						fontSize: "20px",
						fontWeight: "300",
					}}
					className="about-description"
				>
					В ресторане AMANN работают профессиональные повара, которые используют
					исключительно свежие продукты. Так, блюда готовятся из исключительно свежих
					продуктов, которые доставляются непосредственно из Италии.
				</Typography>
				{link ? (
					<Link
						style={{
							fontFamily: "Raleway",
							fontWeight: "500",
							fontSize: "20px",
							borderBottom: "1px solid #fff",
						}}
						href={"/about"}
						className="info-link"
					>
						Подробнее о нас
					</Link>
				) : null}
			</div>
			<div
				style={{ display: "flex", flexDirection: "column", width: "624px" }}
				className="about-collage"
			>
				<Image
					alt="interier"
					src={"/assets/img/interier/Interier-three.webp"}
					className="about-interier-image"
					width={550}
					height={394}
					style={{ position: "relative", right: "60px", top: "50px" }}
				/>
				<Image
					alt="interier"
					src={"/assets/img/interier/Food-two.webp"}
					className="about-interier-image"
					width={550}
					height={392}
				/>
			</div>
		</section>
	);
};

export default AboutBlock;
