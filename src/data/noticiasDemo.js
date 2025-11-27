export const noticiasDemo = [
  {
    id: 1,
    titulo: "Operativo de limpieza en la Costanera",
    fecha: "21 ene 2025",
    categoria: "Municipal",
    resumen: `
      Personal de limpieza pública realizó un operativo integral en la zona de la Costanera.
    `,
    autor: "MDLP",

    // 🔵 IMAGEN PRINCIPAL
    imagenPrincipal: {
      url: "https://cdn.www.gob.pe/uploads/document/file/9042118/1296209-22.jpg"
    },

    // 🔵 GALERÍA (IMÁGENES DEL SLIDER)
    galeria: [
      {
        url: "https://cdn.www.gob.pe/uploads/document/file/9042118/1296209-22.jpg"
      },
      {
        url: "https://cdn.www.gob.pe/uploads/document/file/9042112/1296182-16.jpg"
      },
      {
        url: "https://cdn.www.gob.pe/uploads/document/file/9042118/1296209-22.jpg"
      }
    ],

    // 🔵 CONTENIDO ENRIQUECIDO
    contenido: `
      <p><strong>La Municipalidad Distrital de La Punta</strong> ejecutó un operativo integral de limpieza en la zona de la Costanera.</p>

      <p>El personal de Limpieza Pública realizó barrido, recolección de residuos y mantenimiento preventivo en diversas áreas.</p>

      <h3>Acciones realizadas</h3>
      <ul>
        <li>Limpieza de veredas y áreas públicas</li>
        <li>Recojo de desmonte y residuos</li>
        <li>Mantenimiento y poda de zonas verdes</li>
      </ul>

      <p>Estas actividades continuarán durante toda la semana para mantener el distrito en óptimas condiciones.</p>
    `
  },

  {
    id: 2,
    titulo: "Campaña de vacunación para adultos mayores",
    fecha: "19 ene 2025",
    categoria: "Salud",
    resumen: `
      Se realizó una campaña gratuita de vacunación para adultos mayores en el frontis municipal.
    `,
    autor: "MDLP",

    imagenPrincipal: {
      url: "https://cdn.www.gob.pe/uploads/document/file/9042112/1296182-16.jpg"
    },

    galeria: [
      {
        url: "https://cdn.www.gob.pe/uploads/document/file/9042112/1296182-16.jpg"
      },
      {
        url: "https://cdn.www.gob.pe/uploads/document/file/9042118/1296209-22.jpg"
      }
    ],

    contenido: `
      <p>La Municipalidad realizó una campaña de vacunación destinada a adultos mayores, beneficiando a más de 300 vecinos.</p>

      <p>El personal médico brindó atención prioritaria, información preventiva y vacunación segura.</p>

      <h3>Servicios brindados</h3>
      <ul>
        <li>Vacunación contra influenza</li>
        <li>Chequeos básicos</li>
        <li>Orientación médica</li>
      </ul>

      <p>Estas campañas continuarán realizándose de manera periódica durante el 2025.</p>
    `
  },

  {
    id: 3,
    titulo: "Actividades recreativas por aniversario de La Punta",
    fecha: "17 ene 2025",
    categoria: "Eventos",
    resumen: `
      Vecinos participaron de actividades deportivas, culturales y recreativas en el marco del aniversario.
    `,
    autor: "MDLP",

    imagenPrincipal: {
      url: "https://cdn.www.gob.pe/uploads/document/file/9042118/1296209-22.jpg"
    },

    galeria: [
      {
        url: "https://cdn.www.gob.pe/uploads/document/file/9042118/1296209-22.jpg"
      },
      {
        url: "https://cdn.www.gob.pe/uploads/document/file/9042112/1296182-16.jpg"
      }
    ],

    contenido: `
      <p>El distrito celebró su aniversario con una serie de actividades que incluyeron presentaciones artísticas, talleres deportivos y música en vivo.</p>

      <p>El evento tuvo una gran acogida por parte de vecinos y visitantes.</p>

      <h3>Momentos destacados</h3>
      <ul>
        <li>Show de danzas típicas</li>
        <li>Clases deportivas al aire libre</li>
        <li>Concierto central</li>
      </ul>

      <p>La Municipalidad reafirma su compromiso de fortalecer la participación vecinal a través de actividades inclusivas.</p>
    `
  }
];
