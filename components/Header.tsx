import { FC, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import ButtonComponent from "./ButtonComponent"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { ILanguage } from "../pages/_app";
import Arrow from "./Arrow"
import { Box, Button } from "@mui/material"
import MenuComponent from "./MenuComponent"

const Header: FC<ILanguage> = ({ language, visibleMenu, handleLanguage, handleMenu }) => {

	return (
		<header className="header">
			<Link href={"/"}>
				<Image alt="logo" src={"Logo.svg"} className="header-logo" width={180} height={32} />
			</Link>
			<nav className="navbar">
				<Box className={"desktop-links"}>
					<Link href={"/about"} className="navlink">О нас</Link>
					<Link href={"/menu"} className="navlink">Меню</Link>
					<Link href={"/photos"} className="navlink">Фото</Link>
					<Link href={"/contact"} className="navlink">Контакты</Link>
					<ButtonComponent
						className={"button-component"}
						width={"258px"}
						height={"50px"}
						fontSize={"20px"}
						styles={{ margin: "0 50px 0 25px" }}
					>
						Забронировать
					</ButtonComponent>
					<Select
						disableUnderline
						variant="standard"
						sx={{ color: "#fff", fontFamily: "Raleway" }}
						label={"RU"}
						value={language}
						IconComponent={Arrow}
						onChange={handleLanguage}
					>
						<MenuItem value={"RU"}>RU</MenuItem>
						<MenuItem value={"EN"}>EN</MenuItem>
					</Select>
				</Box>
				<Button className="mobile-menu-button" onClick={handleMenu}>
					{!visibleMenu
						? <Image alt="burger" src={"/assets/img/Burger.svg"} width={20} height={20} />
						: <Image alt="cross" src={"/assets/img/Cross.svg"} width={30} height={30} />}
				</Button>
			</nav>
		</header>
	)
}

export default Header