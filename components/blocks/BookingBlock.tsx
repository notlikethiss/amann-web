import { FC, useState } from "react";
import {
	Select,
	MenuItem,
	Typography,
	Box,
	SelectChangeEvent,
} from "@mui/material";
import ButtonComponent from "../ButtonComponent";
import Image from "next/image";
import Arrow from "../Arrow";

const BookingBlock: FC = () => {
	const [bookingDate, setBookingDate] = useState("25 march");
	const [bookingTime, setBookingTime] = useState("12:30");
	const [bookingPeople, setBookingPeople] = useState("2");

	return (
		<section className="booking-block">
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
				}}
				className={"booking-container"}
			>
				<Typography
					sx={{
						fontSize: "35px",
						fontWeight: "800",
						lineHeight: "38.5px",
						letterSpacing: "1px",
						color: "#fff",
						width: "318px",
						textTransform: "uppercase",
						marginBottom: "36px",
					}}
					className="booking-heading"
				>
					Забронировать столик
				</Typography>

				<Select
					disableUnderline
					variant="standard"
					sx={{
						color: "#fff",
						fontWeight: "300",
						fontSize: "20px",
						width: "400px",
						height: "50px",
						background: "rgba(255, 255, 255, 0.3)",
						padding: "11px 20px 11px 23px",
					}}
					label={"25 march"}
					value={bookingDate}
					IconComponent={Arrow}
					className={"booking-select"}
					onChange={(event: SelectChangeEvent) => setBookingDate(event.target.value)}
				>
					<MenuItem value={"25 march"}>25 марта, 2023</MenuItem>
					<MenuItem value={"26 march"}>26 марта, 2023</MenuItem>
					<MenuItem value={"27 march"}>27 марта, 2023</MenuItem>
				</Select>

				<Select
					disableUnderline
					variant="standard"
					sx={{
						color: "#fff",
						fontWeight: "300",
						fontSize: "20px",
						width: "400px",
						height: "50px",
						background: "rgba(255, 255, 255, 0.3)",
						padding: "11px 20px 11px 23px",
						marginTop: "15px",
					}}
					label={"12:30"}
					value={bookingTime}
					IconComponent={Arrow}
					className={"booking-select"}
					onChange={(event: SelectChangeEvent) => setBookingTime(event.target.value)}
				>
					<MenuItem value={"12:30"}>12:30</MenuItem>
					<MenuItem value={"14:30"}>14:30</MenuItem>
					<MenuItem value={"16:30"}>16:30</MenuItem>
				</Select>

				<Select
					disableUnderline
					variant="standard"
					sx={{
						color: "#fff",
						fontWeight: "300",
						fontSize: "20px",
						width: "400px",
						height: "50px",
						background: "rgba(255, 255, 255, 0.3)",
						padding: "11px 20px 11px 23px",
						marginTop: "15px",
					}}
					label={"2"}
					value={bookingPeople}
					IconComponent={Arrow}
					className={"booking-select"}
					onChange={(event: SelectChangeEvent) =>
						setBookingPeople(event.target.value)
					}
				>
					<MenuItem value={"2"}>2 человека</MenuItem>
					<MenuItem value={"3"}>3 человека</MenuItem>
					<MenuItem value={"4"}>4 человека</MenuItem>
				</Select>

				<ButtonComponent
					styles={{
						margin: "30px 0",
						width: "226px",
						height: "56px",
						fontSize: "20px",
						fontWeight: "500",
						textTransform: "inherit",
					}}
					className={"button-component mobile-button"}
				>
					Найти столик
				</ButtonComponent>

				<Typography
					sx={{
						fontWeight: "300",
						fontSize: "20px",
						lineHeight: "28px",
						letterSpacing: "1px",
					}}
					className="booking-description"
				>
					Возможна бронь всего зала
					<br />
					Для бронирования свыше 8 человек
					<br />
					связывайтесь по номеру
					<br />8 800 123 45 67
				</Typography>
			</Box>

			<Image
				alt="interier"
				src={"/assets/img/interier/Interier-six.webp"}
				width={600}
				height={638}
				className="booking-image"
			/>
		</section>
	);
};

export default BookingBlock;
