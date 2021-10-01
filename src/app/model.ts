export interface Paciente{
    nombre: string;
    fechaNac: string;
    estatura: number;
    direccion: string;
    id: string;
    fecha: Date;
}

export interface Triaje{
    peso: number;
    temperatura: number;
    presion: number;
    nivelSat: number;
    id: string;
    fecha: Date;
}