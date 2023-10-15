import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const MenuSwiper: FC = () => {
	return (
		<>
			<Swiper navigation={true} modules={[Navigation]} className="swiper">
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu"
						src={"/assets/img/interier/Menu-main.svg"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-beverages.svg"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-beverages-two.svg"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-cocktails.svg"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-cocktails-two.svg"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default MenuSwiper;
