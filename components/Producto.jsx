import Image from 'next/image';
import { formatearDinero } from '../helpers';
import useQuiosco from '../hooks/useQuiosco';
const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  const { nombre, precio, imagen } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen Platillo ${nombre}`}
        width={400}
        height={500}
      />
      <div>
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-bold text-3xl bg-emerald-700 text-center rounded-md text-stone-200">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md"
          onClick={() => {
            handleSetProducto(producto), handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
