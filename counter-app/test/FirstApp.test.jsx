import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
describe('Pruebas en <FirstApp/>', () => {
   test('debe hacer un match con el snapshot', () => {
    const title = 'Hola , soy ryan'
     render(<FirstApp title={title}/>) 
     
   })
   
})
