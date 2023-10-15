import { Box, Typography } from "@mui/material";
import { FC } from "react";

const NotFound: FC = () => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
			<Typography>Страница не найдена</Typography>
		</Box>
	);
};

export default NotFound;
