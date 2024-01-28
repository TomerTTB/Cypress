/// <reference types="cypress" />
import {
    url, email, mobileNumber, dataTestIdEmail, dataTestIdPhone, writeValidCred, checkBoxCheck,
    submitButtonVisible, verifyPhoneNumberError
} from '../ourcart/login-functions'

describe('Submit the login fourm and verify next page', () => {

    // Runs before each test
    beforeEach('We will open the URL', () => {
        cy.visit(url)
        writeValidCred(dataTestIdEmail, email);
        writeValidCred(dataTestIdPhone, mobileNumber);
        checkBoxCheck('[data-testid="tos-checkbox"]', 0);
        submitButtonVisible('[data-testid="submitButton-accountRegistration"]');

    })

    // Runs after each test
    afterEach(() => {
    })


    it('Pressing "Send the code" button', () => {
        cy.get('[data-testid="submitButton-accountRegistration"]').click();

        // 'Disable captcha with secretKey or global test mode varible'

        verifyPhoneNumberError('.PhoneNumberError', mobileNumber);
    })

})

