//main modules
import { memo } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

//types
import type { FC, CSSProperties } from "react";

interface IEventCard {
	image: string;
	name: string;
	date: string;
	className?: string;
	style?: CSSProperties;
}

const EventCard = memo<IEventCard>(function EventCard({
	image,
	name,
	date,
	className,
	style,
}) {
	return (
		<Box sx={style} className={"event-card"}>
			<Image
				alt="event"
				src={image}
				width={288}
				height={331}
				className={`${className} event-mobile-card`}
			/>
			<Typography
				sx={{
					color: "#000",
					fontSize: "25px",
					fontWeight: "300",
				}}
				className="event-heading"
			>
				{name}
			</Typography>
			<Typography
				sx={{
					color: "#000",
					fontSize: "25px",
					fontWeight: "300",
				}}
			>
				{date}
			</Typography>
		</Box>
	);
});

const NewsBlock: FC = () => {
	return (
		<section className="news-block">
			<div className="news-container">
				<Typography
					sx={{
						color: "#000",
						textTransform: "uppercase",
						fontWeight: "700",
						fontSize: "35px",
					}}
					className="news-heading"
				>
					Новостной блок
				</Typography>
				<Box
					sx={{
						display: "flex",
						marginTop: "33px",
						alignItems: "center",
						justifyContent: "space-between",
					}}
					className={"event-row"}
				>
					<EventCard
						name={"Название мероприятия"}
						image={"/assets/img/Event-one.jpg"}
						date={"01.01.2024"}
					/>
					<EventCard
						name={"Название мероприятия"}
						image={"/assets/img/Event-two.jpg"}
						date={"01.01.2024"}
					/>
					<EventCard
						name={"Название мероприятия"}
						image={"/assets/img/Event-three.jpg"}
						date={"01.01.2024"}
					/>
					<EventCard
						name={"Название мероприятия"}
						image={"/assets/img/Event-four.jpg"}
						date={"01.01.2024"}
					/>
				</Box>
			</div>
		</section>
	);
};

export default NewsBlock;
