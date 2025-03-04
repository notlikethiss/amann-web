//main modules
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";

//types
import type { FC } from "react";
interface IAbout {
	heading: string;
	content: "mainPage" | "aboutPage";
	link?: boolean;
}

const aboutContent = {
	mainPage:
		"Пространство 400 м2 с впечатляющим видом на «Москва-Сити» и Лужники, коктейли с восточными мотивами и диджей-сеты на стыке этно и хауса от лучших представителей клубной индустрии Москвы — в AMANN можно телепортироваться в пустыню, забыть про суету мегаполиса и совершить самое главное путешествие — к новым эмоциям, которые позволят по-новому взглянуть на себя.",
	aboutPage:
		"Всего в клубе 3 зоны: ресторан, бар и танцпол, в центре которого возвышается кастомизированный диджейский пульт из меди и серебряный диск, сверкающий, словно солнце. Интерьер создан вручную из премиальных материалов. Цветовая гамма повторяет палитру пустыни: потолок из зеркальных черных панелей переливается и напоминает звездное небо, отделка из арт-бетона в цвете охры повторяет изгибы бархан, а био-камин в глянцевом ониксе, спрятанный в зоне приорити пасс в центре зала, похож на очаг. Гости могут разместиться как на 1-м, так и на 2-м этаже по специальному бронированию, где предусмотрен отдельный вход, собственная барная стойка и камерный танцпол.",
};

const AboutBlock: FC<IAbout> = ({ heading, link, content }) => {
	return (
		<section className="about-block">
			<div className="about-info">
				<Typography
					sx={{
						fontWeight: "700",
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
					{content === "mainPage" ? aboutContent.mainPage : aboutContent.aboutPage}
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
				style={{
					display: "flex",
					flexDirection: "column",
					width: "624px",
					position: "relative",
					left: "90px",
				}}
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
