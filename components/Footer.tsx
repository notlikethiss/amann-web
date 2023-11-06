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
					© ООО “КОНТИНЕНТ”, 2023
				</Typography>
				<Typography
					sx={{
						fontSize: "20px",
						fontWeight: "300",
						letterSpacing: "1px",
						marginBottom: "30px",
					}}
				>
					ИНН 7734687630
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
						marginRight: "116px",
						alignItems: "flex-start",
					}}
					className={"footer-item number-email"}
				>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: "300",
							letterSpacing: "1px",
							lineHeight: "36.5px",
						}}
					>
						+7 (926) 697 77 79
						<br /> VMVNNRest@yandex.ru
					</Typography>
					<Link className="instagram-link" href={"https://instagram.com"}>
						<Typography
							sx={{
								fontSize: "20px",
								fontWeight: "300",
							}}
						>
							Наш Instagram*
						</Typography>
					</Link>
					<Link className="instagram-link" href={"https://vk.com/amannmoscow"}>
						<Typography
							sx={{
								fontSize: "20px",
								fontWeight: "300",
							}}
						>
							Страница VK
						</Typography>
					</Link>
				</Box>
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
						Саввинская набережная, 12с8
					</Typography>
					<div className="date-block">
						<Typography
							className="sm-text footer-date"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								letterSpacing: "2px",
							}}
						>
							чт
						</Typography>
						<Typography
							className="sm-text footer-date"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								letterSpacing: "2px",
								width: "138px",
								whiteSpace: "nowrap",
							}}
						>
							17:00 - 00:00
						</Typography>
					</div>
					<div className="date-block">
						<Typography
							className="footer-date"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								marginBottom: "30px",
								letterSpacing: "3px",
								width: "25px",
								whiteSpace: "nowrap",
							}}
						>
							пт-сб
						</Typography>
						<Typography
							className="footer-date"
							sx={{
								fontSize: "20px",
								fontWeight: "300",
								marginBottom: "30px",
								letterSpacing: "3px",
							}}
						>
							18:00 - 06:00
						</Typography>
					</div>
					<Typography
						sx={{
							fontSize: "14px",
							fontWeight: "300",
							lineHeight: "17.57px",
							marginTop: "10px",
							marginBottom: "10px",
						}}
					>
						* запрещенная на территории <br /> Российской Федерации организация
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
