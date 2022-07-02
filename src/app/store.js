import { configureStore } from '@reduxjs/toolkit';

// Por lo general se va a requerir compartir el estado de la aplicacion en multiples archivos
// para poder manternerlo, lo que hace configureStore es agrupar todos esos archivos para poder acceder
// al estado desde cualquier lugar de la app
export const store = configureStore({
    reducer: {
        
    }
});