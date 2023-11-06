//main modules
import { useState } from "react";
import {
	Select,
	MenuItem,
	Typography,
	Box,
	SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";

//types
import type { FC } from "react";

//user components
import ButtonComponent from "../ButtonComponent";
import Arrow from "../Arrow";

const BookingBlock: FC = () => {
	const [bookingDate, setBookingDate] = useState("5 december");
	const [bookingTime, setBookingTime] = useState("17:00");
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
						fontWeight: "700",
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
					label={"5 december"}
					value={bookingDate}
					IconComponent={Arrow}
					className={"booking-select"}
					onChange={(event: SelectChangeEvent) => setBookingDate(event.target.value)}
				>
					<MenuItem value={"5 december"}>5 декабря, 2023</MenuItem>
					<MenuItem value={"6 december"}>6 декабря, 2023</MenuItem>
					<MenuItem value={"7 december"}>7 декабря, 2023</MenuItem>
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
					<MenuItem value={"17:00"}>17:00</MenuItem>
					<MenuItem value={"18:30"}>18:30</MenuItem>
					<MenuItem value={"20:30"}>20:30</MenuItem>
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
					<br />
					+7 (926) 697 77 79
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
