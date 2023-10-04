import { FC } from 'react'
import { Box, Typography, Input } from '@mui/material';
import ButtonComponent from '../ButtonComponent';

const SubscribeBlock: FC = () => {

	return (
		<Box
			sx={{
				background: "rgba(25, 29, 30, 1)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				padding: "95px 0"
			}}
		>
			<Box>
				<Typography sx={{
					fontSize: "35px",
					fontWeight: "800",
					lineHeight: "38.5px",
					letterSpacing: "1px",
					color: "#fff",
					textTransform: "uppercase"
				}}
				>
					Подпишитесь<br /> на наши обновления
				</Typography>

				<Box sx={{ display: "flex", marginTop: "30px" }}>
					<Input
						placeholder='Email'
						sx={{
							width: "416px",
							height: "50px",
							color: "#fff",
							paddingLeft: "10px",
							marginRight: "20px",
							background: "rgba(255, 255, 255, 0.3)"
						}} />
					<ButtonComponent
						styles={{
							width: "185px",
							height: "50px",
							fontSize: "20px",
							fontWeight: "500",
							textTransform: "inherit"
						}}
						className={"button-component"}
					>
						Подписаться
					</ButtonComponent>
				</Box>
			</Box>
		</Box>
	);
};

export default SubscribeBlock;