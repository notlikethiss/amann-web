//main modules
import { Typography, Box } from "@mui/material";
import Link from "next/link";

//types
import type { FC } from "react";

//user components
import ButtonComponent from "./ButtonComponent";

interface IMenu {
	visibleMenu: boolean;
	handleMenu: () => void;
}

const MenuComponent: FC<IMenu> = ({ visibleMenu, handleMenu }) => {
	return (
		<Box className={"mobile-menu"}>
			<Box
				className={"menu-links"}
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Link onClick={handleMenu} href={"/photos"} className="menu-link">
					Фотографии
				</Link>
				<Link onClick={handleMenu} href={"/menu"} className="menu-link">
					Наше меню
				</Link>
				<Link onClick={handleMenu} href={"/"} className="menu-link">
					Главная
				</Link>
				<Link onClick={handleMenu} href={"/about"} className="menu-link">
					О нас
				</Link>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Typography
					sx={{
						fontSize: "18px",
						fontWeight: "300",
						lineHeight: "25.2px",
						letterSpacing: "1px",
					}}
				>
					+7 (926) 697 77 79
					<br />
					VMVNNRest@yandex.ru
				</Typography>
				<Box sx={{ display: "flex", margin: "20px 0 25px 0" }}>
					<Box
						sx={{
							border: "1px solid #fff",
							borderRadius: "100%",
							width: "30px",
							height: "30px",
							marginRight: "15px",
						}}
					/>
					<Box
						sx={{
							border: "1px solid #fff",
							borderRadius: "100%",
							width: "30px",
							height: "30px",
							marginRight: "15px",
						}}
					/>
					<Box
						sx={{
							border: "1px solid #fff",
							borderRadius: "100%",
							width: "30px",
							height: "30px",
							marginRight: "15px",
						}}
					/>
				</Box>
				<Typography
					sx={{
						fontSize: "18px",
						fontWeight: "300",
						lineHeight: "25.2px",
						marginBottom: "15px",
						letterSpacing: "1px",
					}}
				>
					пн-пт 9:00 - 22:00
					<br />
					сб-вс 10:00 - 23:00
				</Typography>
				<Typography
					sx={{
						fontSize: "18px",
						fontWeight: "300",
						lineHeight: "25.2px",
						marginBottom: "72px",
						letterSpacing: "1px",
					}}
				>
					Саввинская набережная, 12с8
				</Typography>
			</Box>
			<ButtonComponent onClick={handleMenu}>Забронировать</ButtonComponent>
		</Box>
	);
};

export default MenuComponent;
