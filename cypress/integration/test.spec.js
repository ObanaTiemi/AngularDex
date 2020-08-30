describe("Pokedex Jenkins test", ()=>{

    it("Acessar pokedex", ()=>{
        cy.visit('localhost:4000')
        cy.contains('Charmander').click()
    })
    
})