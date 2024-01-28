// Variables 

export const url = 'https://app.cm.ourcart.com/internal?d=internal_rebate';
export const email = 'tomergranit@hotmail.com';
export const mobileNumber = '+1 1212121212';
export const dataTestIdEmail = "email-input";
export const dataTestIdPhone = "phone-input";


// Functions for login-text-links.cy.js

export function firstCheckboxText(element) {
    cy.get(element).as('termsLabel');
    // Verify text content of non-link elements
    cy.get('@termsLabel').contains('*');
    cy.get('@termsLabel').contains('I consent to the');
    cy.get('@termsLabel').contains(', to share my information with');
    cy.get('@termsLabel').contains('and Ourcart');
    cy.get('@termsLabel').contains('and to receive messages about my rebate.');
}

export function firstCheckboxTermsLink(element) {
    cy.get(element).should('have.text', 'Terms of Service');
    cy.get(element).should('have.attr', 'href', 'https://www.ourcart.com/chop-tos');
}

export function firstCheckboxPl1(element) {
    cy.get(element).should('have.text', 'Privacy Policy');
    cy.get(element).should('have.attr', 'href', 'http://wp.pl');
}

export function firstCheckboxPl2(element) {
    cy.get(element).should('have.text', 'Privacy Policy');
    cy.get(element).should('have.attr', 'href', 'https://www.ourcart.com/chop-privacy-policy');
}

export function consentCheckbox(element) {
    cy.get(element).should('have.text', 'I consent to receive marketing offers from Ourcart and 8Display Name8 and their affiliates, including by automated means. Consent to receive such offers is not conditioned upon a purchase. Reply STOP to Opt Out.');
}

export function inactiveSubmitText(element) {
    cy.get(element).should('have.text', 'Send the code');
}


// -------------------------------------------------------------------------------------------
// Functions for login-inputFields.cy.js

export function defultInputFieldsText(element, text) {
    cy.get('label.MuiFormLabel-root.MuiInputLabel-outlined')
        .should('have.attr', 'data-shrink', 'false')
        .and('have.class', 'MuiInputLabel-animated')
        .and('contain', text)
}

export function incorrectInputText(element, text) {
    // Checking the "incorrect email address" text - In/Out of focus 
    cy.get(`[data-testid="${element}"]`).click()
    // Click outside the input somewhere  
    cy.get('body').click(0, 0)
    // Confirm input is no longer focused
    cy.get(`[data-testid="${element}"]`).should('not.have.focus')
    // attributes and text
    cy.get('p.MuiFormHelperText-root')
        .should('have.class', 'MuiFormHelperText-contained Mui-error')
        .and('contain', text)
}

export function validInputText(element, input, text) {
    // Entering a valid email to get the top email text
    cy.get(`[data-testid="${element}"]`).should('be.visible').type(input);
    // Getting the new CSS controled element 
    cy.get('.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-shrink.MuiInputLabel-outlined.MuiFormLabel-filled').as('Label');
    // Verify the text
    cy.get('@Label').should('have.text', text);
}


// -------------------------------------------------------------------------------------------
// Functions for login-functionality.cy.js

export function writeValidCred(element, text) {
    cy.get(`[data-testid="${element}"]`).should('be.visible').type(text);
}

export function checkBoxCheck(element, order) {
    cy.get(element)
        .should('not.be.checked')
        .check({ force: true })
        .should('be.checked');
    // The class is updated after checking the box
    cy.get('span.login-checkbox-custom.login-checkbox-custom_checked').eq(order).should('exist');
}

export function submitButtonVisible(element) {
    // Assuming this is inside a Cypress test
    cy.get('[data-testid="submitButton-accountRegistration"][tabindex="0"]').as('submitButton');;
    // cy.get('[data-testid="submitButton-accountRegistration"]').as('submitButton');
    cy.get('@submitButton').should('be.visible');
    cy.get('@submitButton').find('.MuiButton-label').should('have.text', 'Send the code');
    cy.get('@submitButton').should('have.attr', 'type', 'button');
}


// -------------------------------------------------------------------------------------------
// Functions for login-submit.cy.js
export function verifyPhoneNumberError(element, number) {
    cy.get(`.${element}_title__GqUu4`).should('have.text', 'Phone number error');
    cy.get(`.${element}_redText__2bk09`).should('have.text', 'A problem occurred with this phone number:');
    cy.get(`.${element}_text__1Y3CN'`).should('have.text', number);
    cy.get(`.${element}_btnContainer__3Wt4f button'`).should('have.text', 'Try again');

}

