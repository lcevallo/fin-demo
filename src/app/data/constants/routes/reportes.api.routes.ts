import  {environment as ENV} from '@environments/environment';



export const API_ROUTES_REPORTES = {
    CONTABILIDAD:{
        PLAN_CUENTAS : `${ENV.baseUrlReportes}/Reportes/contabilidad/plandecuentas/`,
      },

    CTAS_X_PAGAR: {
      DOCUMENTO_PROVEEDOR : `${ENV.baseUrlReportes}/CuentasXPagar/cuentasxpagar/documentos-proveedor/`,
      MOVIMIENTO_BANCARIO: `${ENV.baseUrlReportes}/CuentasXPagar/cuentasxpagar/movimiento-bancario/`,
      MOVIMIENTO_BANCARIO_CHEQUE: `${ENV.baseUrlReportes}/CuentasXPagar/cuentasxpagar/cheque/`,
      // MOVIMIENTO_BANCARIO_CHEQUE_GUAYAQUIL2: `${ENV.baseUrlReportes}/CuentasXPagar/cuentasxpagar-cheque/bancoguayaquil/`,
    },
    CTAS_X_COBRAR: {
      ANTICIPOS : `${ENV.baseUrlReportes}/CuentasXCobrar/listadoanticipos/`,
      // MOVIMIENTO_BANCARIO_CHEQUE_GUAYAQUIL2: `${ENV.baseUrlReportes}/CuentasXPagar/cuentasxpagar-cheque/bancoguayaquil/`,
    },
    FACTURACION: {
      CUADRE_CAJA: `${ENV.baseUrlReportes}/Facturacion/cuadredecaja/`,
      ESTADOS_CUOTAS: `${ENV.baseUrlReportes}/Facturacion/estadodecuotas/`,
      ESTADOS_CUOTAS_PENDIENTES: `${ENV.baseUrlReportes}/Facturacion/cuotaspendientes/`,
      ESTADOS_CUOTAS_PAGADAS: `${ENV.baseUrlReportes}/Facturacion/cuotaspagadas/`,
      DIARIO_DE_VENTAS: `${ENV.baseUrlReportes}/Facturacion/diariodeventas/`,
    }
}
export const API_ROUTES_REPORTE = {
    REPORTES_PDF:{
        DESCARGAR_DOC_PROVEEDOR : `${ENV.baseUrlReporte}/reportes-pdf-doc-proveedor/`,
    },
    REPORTES_EXCEL:{
        DESCARGAR : `${ENV.baseUrlReporte}/reportes-excel/`,
    },
}
