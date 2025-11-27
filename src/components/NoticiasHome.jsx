import { Link } from "react-router-dom";
import CardNoticia from "@/components/CardNoticia";
import { noticiasDemo } from "@/data/noticiasDemo"; // ✔ ahora sí, usando datos globales

const NoticiasHome = () => {

  // 🔥 Tomamos solo las primeras 3 noticias
  const ultimasNoticias = noticiasDemo.slice(0, 3);

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
          {ultimasNoticias.map((n) => (
            <Link to={`/noticias/${n.id}`} key={n.id} className="block">
              <CardNoticia
                titulo={n.titulo}
                resumen={n.resumen}
                fecha={n.fecha}
                categoria={n.categoria}
                autor={n.autor}
                imagen={n.imagenPrincipal.url}   // ✔ imagen principal
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NoticiasHome;
