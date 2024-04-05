import  {environment as ENV} from '@environments/environment';

export const EKUDEMIC_API_ROUTES = {
  ESTUDIANTES:{
    CLIENTES : {
      BUSCAR : `${ENV.baseUrlEkudemic}/estudiantes/busqueda/{cedula}`,
      
    },
  },
}