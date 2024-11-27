import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('pruebas en 08-imp-exp', () => {
  test('getHeroById debe retornar un heroe por Id', () => { 
   const id = 1 
   const hero = getHeroeById(id)
   expect(hero).toEqual({id:1 , name:'Batman',owner:'DC'}) 

   })
   test('getHeroById debe retornar un undefined si no existe', () => { 
    const id = 100
    const hero = getHeroeById(id)
    expect(hero).toBeFalsy()
    })

    test('getHeroesByOwner debe retornar un arreglo de 3 personajes', () => { 
        const owner = 'DC'
        const heros = getHeroesByOwner(owner)
        expect(heros.length).toEqual(3) 
     })

      test('getHeroesByOwner debe retornar un arreglo de 2 personajes ', () => { 
        const owner = 'Marvel'
        const heros = getHeroesByOwner(owner)        
        expect(heros.length).toEqual(2) 
      })
})
