interface TarjetaCredito {
    numero: number;
    vencimiento: string;
    nombre?: string;
}

const datoDeInternet: unknown = {
    numero: 123456,
    vencimiento: "12/26",
    nombre: "juan"
}

function mostrarTarjeta({ numero, vencimiento, nombre }: TarjetaCredito): string { // En esta linea utilizamos la Destructuración para numero y vencimiento
    //const {numero, vencimiento } = Tarjeta; --Es otra forma de hacer Destructuración
    return ` 
        Número: ${numero}
        Vencimiento: ${vencimiento}
        Titular: ${nombre?.toUpperCase()}
        `; // Al signo de interrogación = Operador de Encadenamiento Opcional
} // A las comillas invertidas se les llama, Plantillas de Cadena o Literales de Plantilla 
// (Template Literals o Template Strings)


// Type Guards (Guardianes de Tipo) lo del is TarjetaCredito
function esTarjetaValida(dato: any): dato is TarjetaCredito { // Es como un boolean si devuelve true, jura que es de tipo TarjetaCredito
    if (typeof dato.numero !== 'number' || String(dato.numero).length !== 6) { //Transformación de Datos String(dato.numero)
        return false; 
    }
    if (typeof dato.vencimiento !== 'string' || dato.vencimiento.length !== 5) {
        return false;
    }
    return true;
}

if (esTarjetaValida(datoDeInternet)) {
    const {numero, vencimiento, nombre }= datoDeInternet;
    console.log(`
--- Tarjeta procesada ---
Número:  ${numero}
Vencimiento: ${vencimiento}
Titular: ${nombre}
`);
} else {
    console.log("Error: Eso no es una tarjeta");
}


const tarjetaOriginal: TarjetaCredito = {
    numero: 123456,
    vencimiento: "12/26",
    nombre: "juan"
}

function actualizarVencimiento(tarjetaVieja: TarjetaCredito, nuevoVencimiento: string): TarjetaCredito {
    return {
        ...tarjetaVieja, //Inmutabilidad, "...tarjetaVieja " , es para modificar datos de forma segura
        vencimiento: nuevoVencimiento
    };
}
const tarjetaActualizada = actualizarVencimiento(tarjetaOriginal, "12/30");

console.log("\n--- RESULTADO FINAL ---",
    "\nTarjeta Original: ", mostrarTarjeta(tarjetaOriginal),
    "\nTarjeta Actualizada: ", mostrarTarjeta(tarjetaActualizada));