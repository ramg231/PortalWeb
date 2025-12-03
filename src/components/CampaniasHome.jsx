import { Link } from "react-router-dom";
import CardCampaniaHome from "./CardCampaniaHome";

const CampaniasHome = () => {

  const campaniasDemo = [
    {
      id: 1,
      titulo: "Ecotrueque Navideño",
      fecha: "20/11/2025",
      imagenPrincipal: {
        url: "https://cdn.www.gob.pe/uploads/campaign/photo/000/018/037/317382052_465824422335030_8295411204428327721_n.jpg"
      },
    },
    {
      id: 2,
      titulo: "Busca la Gloria en La Punta",
      fecha: "18/11/2025",
      imagenPrincipal: {
        url: "https://cdn.www.gob.pe/uploads/campaign/photo/000/076/370/456654357_829066069344195_8514115331449598609_n.jpg"
      },
    },
    {
      id: 3,
      titulo: "Donación de Sangre para el Callao",
      fecha: "14/11/2025",
      imagenPrincipal: {
        url: "/demo/campania3.jpg"
      },
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Título + Ver todas */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-[#003566]">
            Campañas y eventos
          </h2>

          <Link
            to="/campanias"
            className="text-[#005c98] font-semibold hover:underline"
          >
            Ver todas →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {campaniasDemo.map((c) => (
            <CardCampaniaHome
              key={c.id}
              id={c.id}
              titulo={c.titulo}
              fecha={c.fecha}
              imagen={c.imagenPrincipal.url}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CampaniasHome;
