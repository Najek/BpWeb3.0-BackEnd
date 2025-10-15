export declare function authenticateUser(username: string, password: string): Promise<{
    id: number;
    username: string;
    permisos: string[];
    empleado: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombres: string;
        apellidos: string;
        cedula: string;
        nacimiento: Date | null;
        sangre: string;
        correo: string;
        celular: string | null;
        direccion: string | null;
        cargo: string | null;
        contactoEmergencia: string | null;
        numeroEmergencia: string | null;
        eps: string | null;
        pensiones: string | null;
        arl: string | null;
        salario: number | null;
        fechaIngreso: Date | null;
        fechaTermino: Date | null;
        fotoUrl: string | null;
    };
} | null>;
//# sourceMappingURL=auth.service.d.ts.map