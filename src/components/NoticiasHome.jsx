import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CardNoticia from "@/components/CardNoticia";
import { getUltimasNoticias } from "@/api/strapi";

const NoticiasHome = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUltimasNoticias()
      .then((res) => setNoticias(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null; // o skeleton si quieres

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-[#003566]">
            Noticias recientes
          </h2>

          <Link
            to="/noticias"
            className="text-sm text-[#003566] font-semibold hover:underline"
          >
            Ver todas →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {noticias.map((n) => (
            <Link to={`/noticias/${n.slug}`} key={n.id} className="block">
              <CardNoticia
                titulo={n.titulo}
                resumen={n.resumen}
                fecha={new Date(n.fecha).toLocaleDateString("es-PE")}
                categoria={n.categoria}
                autor={n.autor}
                imagen={n.imagenPrincipal?.url}
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NoticiasHome;
