import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { Parallax } from 'react-parallax';
import Image from 'next/image';
import InfoBlock from '../components/blocks/InfoBlock';

const AboutPage: FC = () => {

	return (
		<section className="about-page">
			<Parallax blur={1} bgImage="/assets/img/About-bg.png" bgImageAlt="bg" strength={300}>
				<Box sx={{
					display: "flex",
					height: "522px",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
				}}>
					<Image alt='interier' src={"/assets/img/Interier-three.jpg"} width={600} height={522} />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							marginLeft: "64px",
							marginRight: "80px"
						}}>
						<Typography
							sx={{
								textTransform: "uppercase",
								fontSize: "35px",
								fontWeight: "800",
								marginBottom: "24px"
							}}
						>
							О нас
						</Typography>
						<Typography>
							AMANN – это масштабный ресторанный проект под<br />
							руководством итальянского бренд-шефа Джона Смита.<br />
							Одновременно изысканная и простая итальянская кухня<br />
							в руках маэстро приобретает новые краски и<br />
							привлекает настоящих ценителей итальянской<br />
							классики кулинарного жанра.
						</Typography>
					</Box>
				</Box>
			</Parallax>
			<InfoBlock style={{ margin: "0", paddingTop: "154px" }} />
			<Box sx={{
				background: "rgba(25, 29, 30, 1)",
				padding: "100px 64px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}>
				<Image alt='chief' src={"/assets/img/Chief.jpg"} width={728} height={485} />
				<Box sx={{
					position: "relative",
					right: "64px",
					padding: "64px 51px 54px 72px",
					display: "flex",
					alignItems: "flex-start",
					flexDirection: "column",
					justifyContent: "center",
					background: "rgba(86, 98, 75, 1)"
				}}>
					<Typography
						sx={{
							color: "#fff",
							fontSize: "35px",
							fontWeight: "800"
						}}
					>
						Наш шеф
					</Typography>
					<Typography
						sx={{
							marginTop: "21px",
							fontSize: "20px",
							fontWeight: "300"
						}}
					>
						В ресторане AMANN работают<br />
						профессиональные повара, которые<br />
						используют исключительно свежие продукты.<br />
						Так, блюда готовятся из исключительно свежих<br />
						продуктов, которые доставляются<br />
						непосредственно из Италии.
					</Typography>
				</Box>
			</Box>
		</section>
	);
}

export default AboutPage;