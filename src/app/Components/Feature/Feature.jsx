/** @format */

import Item from "./Components/Item";
import {
  Attention,
  Chat,
  Check,
  Excel,
  Money,
  Shopper,
  UserExp,
} from "../../../assets/svg";

const Feature = () => {
  return (
    <>
      <div className='flex flex-col items-center h-full gap-5 pt-10 bg-base-100 '>
        <div className='flex flex-col gap-5 text-center'>
          <h1 className='text-2xl font-bold'>¿Por qué elegir DanielBot?</h1>
          <h2 className='w-[350px]'>
            ChatBot ofrece velocidad, confiabilidad, atención, personalización y
            otras cosas más.
          </h2>
        </div>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-20'>
          <Item
            image={Money}
            title='Sin Costos Ocultos'
            description='Sin costos después del límite de mensajes! Sin tarifas extras después de 1000 mensajes, a diferencia de la competencia.'
          />
          <Item
            image={Attention}
            title='Atención 24/7'
            description='Obtén asistencia técnica constante, disponible las 24 horas, para resolver cualquier problema o consulta en cualquier momento.'
          />
          <Item
            image={Excel}
            title='Administra con Excel'
            description='Optimiza tu negocio con Excel, controla datos, finanzas y operaciones de manera efectiva.'
          />
          <Item
            image={Chat}
            title='Conexiones Multitudinarias'
            description='Multiplica tus conexiones con posibles compradores. Potencia tu red con facilidad y eficacia.'
          />
          <Item
            image={UserExp}
            title='Experiencia Personalizada'
            description='¡Automatiza mensajes según el historial de compras para una experiencia única!'
          />
          <Item
            image={Shopper}
            title='Mejora las compras online'
            description='Liberate de estar ofreciendo productos, deja que el chat lo haga.'
          />
        </div>
      </div>
      <div id='price-table' className='h-10'></div>
    </>
  );
};
export default Feature;
