import { FC, memo } from 'react'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface IEventCard {
	image: string
	name: string
	date: string
}

const EventCard = memo<IEventCard>(function EventCard({ image, name, date }) {
	return (
		<Box sx={{ margin: "0 24px 0 0" }}>
			<Image alt='event' src={image} width={288} height={331} />
			<Typography
				sx={{
					color: "#000",
					fontSize: "25px",
					fontWeight: "300"
				}}
			>
				{name}
			</Typography>
			<Typography
				sx={{
					color: "#000",
					fontSize: "25px",
					fontWeight: "300"
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
			<Typography
				sx={{
					color: "#000",
					textTransform: "uppercase",
					fontWeight: "800",
					fontSize: "35px"
				}}
			>
				Новостной блок
			</Typography>
			<Box sx={{ display: "flex", marginTop: "33px" }}>
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
		</section>
	);
};

export default NewsBlock;