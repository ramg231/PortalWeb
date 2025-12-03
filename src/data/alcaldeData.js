import alcaldeImg from "@/assets/alcalde.png";

export const alcaldeData = {
  nombre: "RAMON RICARDO GARAY LEON",
  periodo: "2023 - 2026",
  frase: "Trabajamos juntos por un distrito seguro, ordenado y con calidad de vida.",
  
   imagenPrincipal: alcaldeImg, // ✔ esto sí funciona

  biografia: [
    "El alcalde cuenta con una trayectoria destacada en la gestión pública y privada, promoviendo siempre el desarrollo sostenible del distrito.",
    "Es profesional en áreas vinculadas a la administración municipal, con experiencia en seguridad ciudadana, gestión ambiental y participación vecinal.",
    "Su compromiso es modernizar los servicios municipales y fortalecer el desarrollo social del distrito."
  ],

  funciones: [
    "Representar al distrito ante instituciones públicas y privadas.",
    "Dirigir las políticas y planes de desarrollo municipal.",
    "Organizar y supervisar los servicios públicos locales.",
    "Promover la seguridad ciudadana y el orden vecinal.",
    "Gestionar recursos y proyectos en beneficio del distrito."
  ],

  enlaces: [
    {
      titulo: "Hoja de Vida (PDF)",
      descripcion: "Documento oficial con formación y experiencia.",
      url: "#"
    },
    {
      titulo: "Declaración Jurada",
      descripcion: "Información pública de transparencia.",
      url: "#"
    },
    {
      titulo: "Gestión y Resultados",
      descripcion: "Reportes y avances de la gestión municipal.",
      url: "#"
    }
  ]
};
