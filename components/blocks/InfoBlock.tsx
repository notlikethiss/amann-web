//main modules
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { CSSProperties } from "@mui/material/styles/createMixins";

//types
import type { FC } from "react";

interface IInfoBlock {
	heading: string;
	content: "mainPage" | "aboutPage";
	style?: CSSProperties;
}

const infoContent = {
	mainPage:
		"Когда небо сходится с землей, а солнце скрывается за линией горизонта, на пустыню опускается ночь. Незабываемые ощущения и опыт, бесконечные дюны и звезды — теперь, чтобы прикоснуться к притягательной атмосфере восточной ночи, не нужно пересекать континент. ",
	aboutPage:
		"Название AMANN вдохновлено восточной культурой, в пер. с арабского означает «безопасность / спокойствие», а специальный шрифт с заостренными буквами отсылает к очертаниям песчаных холмов.",
};

const InfoBlock: FC<IInfoBlock> = ({ style, content, heading }) => {
	return (
		<section className={"information-block"} style={style}>
			<div className="info-collage">
				<Image
					alt="interier"
					src={"/assets/img/interier/Interier-two.webp"}
					className="info-interier-image left-image"
					width={394}
					height={550}
					style={{ position: "relative", left: "20px", top: "50px" }}
				/>
				<Image
					alt="interier"
					className="info-interier-image right-image"
					src={"/assets/img/interier/Interier-one.webp"}
					width={392}
					height={550}
				/>
			</div>
			<div className="info-text">
				<Typography
					className={"info-heading"}
					fontWeight={700}
					fontSize={35}
					color={"#000"}
					textTransform={"uppercase"}
				>
					{heading}
				</Typography>
				<Typography
					width={445}
					color={"#000"}
					fontWeight={300}
					fontSize={20}
					lineHeight={"28px"}
					marginTop={"21px"}
					marginBottom={"30px"}
					className="info-description"
				>
					{content === "mainPage" ? infoContent.mainPage : infoContent.aboutPage}
				</Typography>
				<Link
					style={{
						fontFamily: "Raleway",
						fontWeight: "500",
						fontSize: "20px",
						color: "#000",
						borderBottom: "1px solid #000",
					}}
					className="info-link"
					href={"/photos"}
				>
					Посмотреть фото
				</Link>
			</div>
		</section>
	);
};

export default InfoBlock;
