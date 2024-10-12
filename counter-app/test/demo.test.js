describe('Pruebas en <DemoComponet/>', () => { 

  test("Esta prueba no puede fallar", () => {
      // 1.-Inicializacion
    const menssage1 = 'Hola Mundo'
      // 2.-Estimulo
     const menssage2 = menssage1.trim()
      // 3.- Observar el compórtamiento...esperado
      expect(menssage1).toBe(menssage2)
  });
 })
