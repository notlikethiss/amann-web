import { FC } from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, MenuItem, Select } from "@mui/material";
import { ILanguage } from "../pages/_app";
import Arrow from "./Arrow";

const Footer: FC<ILanguage> = ({ language, handleLanguage }) => {
	return (
		<footer className="footer">
			<Image
				alt="logo"
				src={"Logo.svg"}
				className="header-logo"
				width={180}
				height={32}
				style={{ marginRight: "128px" }}
			/>
			<div style={{ display: "flex", alignItems: "center" }}>
				<Box sx={{ display: "flex", flexDirection: "column", marginRight: "99px" }}>
					<Typography sx={{ fontSize: "20px", fontWeight: "300", marginBottom: "9px" }}>© ООО “АМАНН”, 2023</Typography>
					<Typography sx={{ fontSize: "20px", fontWeight: "300" }}>ИНН 000000000000</Typography>
				</Box>

				<Box sx={{ display: "flex", flexDirection: "column", marginRight: "137px" }}>
					<Link style={{ fontFamily: "Raleway", fontSize: "20px", fontWeight: "300", marginBottom: "9px" }} href={"/"}>
						Главная
					</Link>
					<Link style={{ fontFamily: "Raleway", fontSize: "20px", fontWeight: "300" }} href={"/about"}>
						О нас
					</Link>
				</Box>

				<Box sx={{ display: "flex", flexDirection: "column", marginRight: "93px" }}>
					<Link style={{ fontFamily: "Raleway", fontSize: "20px", fontWeight: "300", marginBottom: "9px" }} href={"/photos"}>
						Фотографии
					</Link>
					<Link style={{ fontFamily: "Raleway", fontSize: "20px", fontWeight: "300" }} href={"/menu"}>
						Наше меню
					</Link>
				</Box>

				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Typography sx={{ fontWeight: "300", fontSize: "20px", marginRight: "5px" }}>Язык:</Typography>
					<Select
						disableUnderline
						variant="standard"
						sx={{ color: "#fff", fontFamily: "Raleway" }}
						label={"RU"}
						value={language}
						IconComponent={Arrow}
						onChange={handleLanguage}
					>
						<MenuItem value={"RU"}>Русский</MenuItem>
						<MenuItem value={"EN"}>Английский</MenuItem>
					</Select>
				</Box>
			</div>
		</footer>
	);
};

export default Footer;