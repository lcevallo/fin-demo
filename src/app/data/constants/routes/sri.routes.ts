import  {environment as ENV} from '@environments/environment';

export const SRI_ROUTES = {

  SRI: {
    DOCUMENTOS: {
      LISTA: `${ENV.baseUrlSri}/retenciones/documento/list`,
      FIRMA: `${ENV.baseUrlSri}/retenciones/documento/`
    },
    FIRMAR_DOCUMENTOS_SAFEI: {
      LISTA: `${ENV.baseUrlSri}/Facturas/documento/list`,
      FIRMA: `${ENV.baseUrlSri}/Facturas/documento/`,
      CONSULTA_CLAVE_AUTORIZACION: `${ENV.baseUrlSri}/Facturas/documento/`
    }
  }

}
