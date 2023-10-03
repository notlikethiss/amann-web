import { FC, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const Header: FC = () => {

	const [language, setLanguage] = useState("RU");

	const handleLanguage = useCallback((event: SelectChangeEvent) => {
		setLanguage(event.target.value as string)
	}, [setLanguage]);

	return (
		<header className="header">
			<Image alt="logo" src={"Logo.svg"} className="header-logo" width={180} height={32} />
			<nav className="navbar">
				<Link href={"/about"} className="navlink">О нас</Link>
				<Link href={"/menu"} className="navlink">Меню</Link>
				<Link href={"/about"} className="navlink">Фото</Link>
				<Link href={"/menu"} className="navlink">Контакты</Link>
				<Button sx={{
					width: "260px",
					height: "50px",
					color: "#fff",
					border: "1px solid #fff",
					fontFamily: "Raleway Light",
					fontWeight: "300",
					lineHeight: "28px",
					fontSize: "20px",
					letterSpacing: "3px",
					borderRadius: "0",
					marginRight: "50px"
				}} className="rent-button">
					Забронировать
				</Button>
				<Select
					disableUnderline
					variant="standard"
					sx={{ color: "#fff", fontFamily: "Raleway Light" }}
					label={"RU"}
					value={language}
					onChange={handleLanguage}
				>
					<MenuItem value={"RU"}>RU</MenuItem>
					<MenuItem value={"EN"}>EN</MenuItem>
				</Select>
			</nav>
		</header>
	)
}

export default Header