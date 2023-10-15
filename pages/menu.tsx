import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import Image from "next/image";
import BookingBlock from "../components/blocks/BookingBlock";
import MenuSwiper from "../components/MenuSwiper";

const Menu: NextPage = () => {
	return (
		<section className="menu-page">
			<Parallax
				blur={1}
				bgImage="/assets/img/Menu-bg.png"
				bgImageAlt="bg"
				strength={300}
			>
				<Box
					sx={{
						display: "flex",
						height: "522px",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
					}}
					className="photo-container"
				>
					<Image
						alt="interier"
						src={"/assets/img/interier/Food-two.webp"}
						width={600}
						height={522}
						className="photo-interier"
					/>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							marginLeft: "64px",
							marginRight: "80px",
						}}
						className={"photo-info menu-info"}
					>
						<Typography
							sx={{
								textTransform: "uppercase",
								fontSize: "35px",
								fontWeight: "800",
								marginBottom: "24px",
							}}
							className="photo-heading"
						>
							Наше меню
						</Typography>
						<Typography className="photo-description">
							Для того, чтобы Вы смогли узнать больше о кухне нашего ресторана, мы
							выложили у себя на сайте меню для удобного просмотра
						</Typography>
					</Box>
				</Box>
			</Parallax>

			<Box
				className={"menu-page-container"}
				sx={{
					background: "#000",
					width: "100%",
					padding: "120px 64px",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<section className="desktop-menu">
					<Typography
						sx={{
							textTransform: "uppercase",
							fontSize: "35px",
							fontWeight: "800",
							marginBottom: "40px",
						}}
						className="photo-heading"
					>
						Меню
					</Typography>
					<MenuSwiper />
				</section>

				<section className="mobile-menu-page">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-main.svg"}
						width={330}
						height={466}
					/>
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-beverages.svg"}
						width={330}
						height={466}
					/>
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-beverages-two.svg"}
						width={330}
						height={466}
					/>
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-cocktails.svg"}
						width={330}
						height={466}
					/>
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-cocktails-two.svg"}
						width={330}
						height={466}
					/>
				</section>
				<a className="downloadMenu" href="/assets/img/Menu.pdf" download>
					Скачать наше меню в формате pdf
				</a>
			</Box>
			<BookingBlock />
		</section>
	);
};

export default Menu;
