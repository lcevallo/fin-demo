export class Cuota {
    CuotaId: string= crypto.randomUUID();
    CarreraId: string= '';
    nivel: string= '';
    fechaInicial: Date | null = null;
    fechaFinal: Date | null = null;
    nocuotas:number= 0;
    diacorte:number= 5;
    valor:number= 0.0; 
}
