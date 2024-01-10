/** @format */
import Image from "next/image";
import money from "@/../../public/assets/svg/money.svg";
import chat from "@/../../public/assets/svg/chat.svg";
import attention from "@/../../public/assets/svg/247.svg";
import excel from "@/../../public/assets/svg/excel.svg";
import userexp from "@/../../public/assets/svg/userexp.svg";
import shopper from "@/../../public/assets/svg/shopper.svg";
import Button from "@/app/Components/Buttons/ButtonAssist";

const Feature = () => {
	return (
		<div className="flex flex-col items-center h-full gap-5 ">
			<div className="flex flex-col gap-5 text-center">
				<h1 className="text-2xl font-bold">¿Por que elegir RST-Assist?</h1>
				<h2 className="w-[350px]">
					ChatBot ofrece velocidad, confiabilidad, atencion, personalizacion y
					otras cosas mas.
				</h2>
			</div>

			<div className="ml-10 mr-10 space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
				<div className="">
					<div className="flex items-start justify-start mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={money}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-yellow-400 dark:text-white">
						Sin Costos Ocultos
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-start">
						Sin costos después del límite de mensajes! Sin tarifas extras
						después de 1000 mensajes, a diferencia de la competencia.
					</p>
				</div>
				<div>
					<div className="flex items-center justify-center mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={attention}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-center text-yellow-400 dark:text-white">
						Atención 24/7
					</h3>
					<p className="text-center text-gray-500 dark:text-gray-400">
						Obtén asistencia técnica constante, disponible las 24 horas, para
						resolver cualquier problema o consulta en cualquier momento
					</p>
				</div>
				<div>
					<div className="flex flex-col items-end justify-end mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={excel}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-yellow-400 text-end dark:text-white">
						Administra con Excel
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-end">
						Optimiza tu negocio con Excel, controla datos, finanzas y
						operaciones de manera efectiva
					</p>
				</div>
				<div>
					<div className="flex items-start justify-start mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image src={chat} width={100} height={100} alt="Picture of money" />
					</div>
					<h3 className="mb-2 text-xl font-bold text-yellow-300 dark:text-white">
						Conexiones Multitudinarias
					</h3>
					<p className="text-gray-500 dark:text-gray-400">
						Multiplica tus conexiones con posibles compradores. Potencia tu red
						con facilidad y eficacia.
					</p>
				</div>
				<div>
					<div className="flex items-center justify-center mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={userexp}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-center text-yellow-400 dark:text-white">
						Experencia Personalizada
					</h3>
					<p className="text-center text-gray-500 dark:text-gray-400">
						¡Automatiza mensajes según el historial de compras para una
						experiencia única!
					</p>
				</div>
				<div>
					<div className="flex flex-col items-end justify-end mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={shopper}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-yellow-400 text-end dark:text-white">
						Mejora las compras online
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-end">
						Liberate de estar ofreciendo productos, deja que el chat lo haga.
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center">
				<Button />
			</div>
		</div>
	);
};
export default Feature;
