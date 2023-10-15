//main modules
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, MenuItem, Select } from "@mui/material";
import { ILanguage } from "../pages/_app";
import Arrow from "./Arrow";

//types
import type { FC } from "react";

const Footer: FC<ILanguage> = ({ language, footerBg, handleLanguage }) => {
	return (
		<footer className="footer" style={{ background: footerBg }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "baseline",
					justifyContent: "center",
					height: "max-content",
					marginRight: "75px",
				}}
				className={"footer-item"}
			>
				<Image
					alt="logo"
					src={"/assets/img/Logo.svg"}
					className="footer-logo"
					width={180}
					height={32}
					style={{ marginBottom: "22px" }}
				/>
				<Typography
					sx={{
						fontSize: "20px",
						fontWeight: "300",
						marginBottom: "9px",
						letterSpacing: "1px",
					}}
				>
					© ООО “АМАНН”, 2023
				</Typography>
				<Typography
					sx={{
						fontSize: "20px",
						fontWeight: "300",
						letterSpacing: "1px",
						marginBottom: "30px",
					}}
				>
					ИНН 000000000000
				</Typography>
			</Box>
			<div
				style={{ display: "flex", alignItems: "baseline", height: "max-content" }}
				className="footer-items"
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						marginRight: "144px",
						alignItems: "baseline",
						justifyContent: "center",
					}}
					className={"footer-item time-location"}
				>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: "300",
							letterSpacing: "1px",
						}}
						className="footer-text"
					>
						Москва, ул. Прозоровского 21
					</Typography>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: "300",
							letterSpacing: "1px",
							marginTop: "35px",
						}}
					>
						пн-пт 9:00 - 22:00
						<br /> сб-вс 10:00 - 23:00
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						marginRight: "116px",
						alignItems: "flex-start",
					}}
					className={"footer-item number-email"}
				>
					<Typography
						sx={{ fontSize: "20px", fontWeight: "300", letterSpacing: "1px" }}
					>
						8 800 123 45 67
						<br /> support@amann.com
					</Typography>
					<Link
						style={{ marginTop: "15px" }}
						className="instagram-link"
						href={"https://instagram.com"}
					>
						<Typography
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								borderBottom: "1px solid #fff",
								marginBottom: "20px",
							}}
						>
							Наш Instagram
						</Typography>
					</Link>
					<Typography
						sx={{ fontSize: "14px", fontWeight: "300", lineHeight: "17.57px" }}
					>
						* запрещенная на территории Российской Федерации организация
					</Typography>
				</Box>
				<Box
					sx={{ display: "flex", flexDirection: "column", marginRight: "93px" }}
					className={"footer-item"}
				>
					<Box sx={{ display: "flex", flexDirection: "row", marginBottom: "9px" }}>
						<Typography
							sx={{ fontWeight: "300", fontSize: "20px", marginRight: "5px" }}
						>
							Язык:
						</Typography>
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
					<Link
						style={{
							fontFamily: "Raleway",
							fontSize: "20px",
							fontWeight: "300",
							marginBottom: "15px",
						}}
						href={"/about"}
					>
						О нас
					</Link>
					<Link
						style={{
							fontFamily: "Raleway",
							fontSize: "20px",
							fontWeight: "300",
							marginBottom: "15px",
						}}
						href={"/photos"}
					>
						Фотографии
					</Link>
					<Link
						style={{
							fontFamily: "Raleway",
							fontSize: "20px",
							fontWeight: "300",
						}}
						href={"/menu"}
					>
						Наше меню
					</Link>
				</Box>
			</div>
		</footer>
	);
};

export default Footer;
