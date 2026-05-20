// 1. Definimos el contrato del objeto
interface Usuario {
    id: number;
    nombre: string;
    estaActivo: boolean;
}

// 2. Creamos un ARRAY de objetos tipados (fíjate en el 'Usuario[]')
const listaUsuarios: Usuario[] = [
    { id: 1, nombre: "Juan", estaActivo: true },
    { id: 2, nombre: "María", estaActivo: false },
    { id: 3, nombre: "Pedro", estaActivo: true }
];

// 3. Una función profesional con cláusula de guarda para procesar la lista
function mostrarUsuariosActivos(usuarios: Usuario[]): void {
    if (usuarios.length === 0) {
        console.log("No hay usuarios en la lista.");
        return; 
    }

    // Filtramos solo los activos y los mostramos
    const activos = usuarios.filter(u => u.estaActivo);
    console.log("Usuarios activos encontrados:", activos);
}

// 4. Ejecutamos la función
mostrarUsuariosActivos(listaUsuarios);
