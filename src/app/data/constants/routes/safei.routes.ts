import  {environment as ENV} from '@environments/environment';

export const SAFEI_ROUTES = {

  SAFEI: {
    MAESTRANTES: {
      COMBOUNIDADACADEMICA: `${ENV.baseSafei}/safei-combo/unidadacademica/`,
      COMBOCARRERA: `${ENV.baseSafei}/safei-combo/carrera/`,
      COMBONIVEL: `${ENV.baseSafei}/safei-combo/nivel_maestrante/`,
      COMBOCOHORTE: `${ENV.baseSafei}/safei-combo/grupoperiodo_maestrante/`,
      CARGAREXCEL: `${ENV.baseSafei}/safei-clientes/clientes/`,
      GUARDARLIGAPRO: `${ENV.baseSafei}/safei-clientes/clientes_ligapro/`

    }
  }

}
