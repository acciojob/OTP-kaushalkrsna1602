document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const current = e.target;
            const next = inputs[index + 1];

            if (current.value && next) {
                next.focus();  
            }
        });

        input.addEventListener("keydown", (e) => {
            const current = e.target;
            const prev = inputs[index - 1];

            
            if (e.key === "Backspace" && !current.value && prev) {
                prev.focus();
            }
        });
    });
});












describe('OTP Input Test', () => {
  it('should fill OTP fields and move focus correctly', () => {
    cy.visit(baseUrl + "/main.html"); // Make sure the URL is correct

    // Ensure the first input gets focus
    cy.get('.code').eq(0).focus().should('have.attr', 'id', 'code-1');
    
    // Typing the OTP and checking focus shift
    cy.get('.code').eq(0).type('5'); // Type into the first input
    cy.focused().should('have.id', 'code-2'); // Ensure focus moves to the next input

    cy.get('.code').eq(1).type('1');
    cy.focused().should('have.id', 'code-3');

    cy.get('.code').eq(2).type('7');
    cy.focused().should('have.id', 'code-4');

    cy.get('.code').eq(3).type('2');
    cy.focused().should('have.id', 'code-5');

    cy.get('.code').eq(4).type('9');
    cy.focused().should('have.id', 'code-6');

    cy.get('.code').eq(5).type('6');
  });

  it('should handle backspace correctly', () => {
    cy.visit(baseUrl + "/main.html");

    // Focus the first input
    cy.get('.code').eq(0).focus().should('have.attr', 'id', 'code-1');

    // Simulate typing and using backspace
    cy.get('.code').eq(0).type('5');
    cy.get('.code').eq(1).type('1');
    cy.get('.code').eq(2).type('7');
    cy.get('.code').eq(3).type('2');
    cy.get('.code').eq(4).type('9');
    cy.get('.code').eq(5).type('6');
    
    // Pressing backspace should focus on the previous input
    cy.get('.code').eq(5).type('{backspace}'); // Move focus back to code-5
    cy.focused().should('have.id', 'code-5');

    cy.get('.code').eq(4).type('{backspace}');
    cy.focused().should('have.id', 'code-4');

    cy.get('.code').eq(3).type('{backspace}');
    cy.focused().should('have.id', 'code-3');

    cy.get('.code').eq(2).type('{backspace}');
    cy.focused().should('have.id', 'code-2');

    cy.get('.code').eq(1).type('{backspace}');
    cy.focused().should('have.id', 'code-1');
  });
});

