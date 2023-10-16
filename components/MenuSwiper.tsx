//main modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

//types
import type { FC } from "react";

//styles
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
						src={"/assets/img/interier/Menu-main.webp"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-beverages.webp"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-beverages-two.webp"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-cocktails.webp"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<Image
						className="menu-image"
						alt="menu-main"
						src={"/assets/img/interier/Menu-cocktails-two.webp"}
						width={1224}
						height={800}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default MenuSwiper;
