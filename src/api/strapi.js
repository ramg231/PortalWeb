// src/services/strapi.js
import axios from "axios";

const api = axios.create({
  baseURL:   "/api"   ,   /* "http://10.150.80.40:1337/api"  */ 
});

export const getActivePopover = () =>
  api.get(
    "/popovers" +
      "?filters[activo][$eq]=true" +
      "&fields[0]=activo" +
      "&fields[1]=delayMinutos" +
      "&populate[slides][filters][activo][$eq]=true" +
      "&populate[slides][fields][0]=link" +
      "&populate[slides][fields][1]=nuevaPestana" +
      "&populate[slides][populate][imagen][fields][0]=url"
  );
// src/services/strapi.js
export const getNoticiaBySlug = (slug) =>
  api.get(
    "/noticias" +
      `?filters[slug][$eq]=${slug}` +
      "&populate[galeria][fields][0]=url" +
      "&populate[imagenPrincipal][fields][0]=url"
  );

// Listado de noticias
export const getNoticias = () =>
  api.get(
    "/noticias" +
      "?sort[0]=fecha:desc" +
      "&fields[0]=titulo" +
      "&fields[1]=slug" +
      "&fields[2]=fecha" +
      "&fields[3]=categoria" +
      "&fields[4]=resumen" +
      "&fields[5]=autor" +
      "&populate[imagenPrincipal][fields][0]=url"
  );

// Noticias recientes (Home)
export const getUltimasNoticias = () =>
  api.get(
    "/noticias" +
      "?sort[0]=fecha:desc" +
      "&pagination[limit]=3" +
      "&fields[0]=titulo" +
      "&fields[1]=slug" +
      "&fields[2]=fecha" +
      "&fields[3]=categoria" +
      "&fields[4]=resumen" +
      "&fields[5]=autor" +
      "&populate[imagenPrincipal][fields][0]=url"
  );
//
export const getCanesAdopcion = () =>
  api.get(
    "/canes-adopcions" +
      "?sort=createdAt:asc" +
      "&pagination[pageSize]=100" +

      // Campos del can
      "&fields[0]=nombre" +
      "&fields[1]=edad" +
      "&fields[2]=tamano" +
      "&fields[3]=sexo" +
      "&fields[4]=url" +
      "&fields[5]=documentId" +
      "&fields[6]=caracteristicas" +
      "&fields[7]=raza" +
      "&fields[8]=contacto" +

      // Imágenes (galería)
      "&populate[images][fields][0]=url" +
      "&populate[images][fields][1]=name" +
      "&populate[images][fields][2]=width" +
      "&populate[images][fields][3]=height" +
      "&populate[images][fields][4]=documentId" +

      // Imagen principal
      "&populate[principal][fields][0]=url" +
      "&populate[principal][fields][1]=name" +
      "&populate[principal][fields][2]=documentId"
  );
export const getCanesExitos = () =>
  api.get(
    "/canes-exitos" +
      "?filters[activo][$eq]=true" +
      "&sort=orden" +
      "&pagination[pageSize]=100" +

      // Campos del caso de éxito
      "&fields[0]=orden" +
      "&fields[1]=activo" +

      // Imagen (media multiple → solo traemos url)
      "&populate[imagen][fields][0]=url"
  );

export const getCanesPerdidos = () =>
  api.get(
    "/canes-perdidos" +
      "?fields[0]=id" +
      "&populate[imgper][fields][0]=url"
  );

export const getCanesRescatados = () =>
  api.get(
    "/canes-rescatados" +
      "?fields[0]=id" +
      "&populate[rescatados][fields][0]=url" +
      "&pagination[pageSize]=1000"
  );






  export default api;
