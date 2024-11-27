import { persona, usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas para 06-deses-obj', () => { 
    test(' usContext debe retorart un objeto', () => { 
        
        const userTest = {
            nombreClave: persona.clave,
            anios: persona.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        const user = usContext({...persona})
        expect(user).toEqual(userTest)
    })
 })