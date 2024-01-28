/// <reference types="cypress" />
import {
    url, email, mobileNumber, dataTestIdEmail, dataTestIdPhone, writeValidCred, checkBoxCheck,
    submitButtonVisible
} from '../ourcart/login-functions'

describe('Fourm functionality, checkboxes, send button logic', () => {

    // Runs before each test
    beforeEach('We will open the URL', () => {
        cy.visit(url)
    })

    // Runs after each test
    afterEach(() => {
    })


    it('Email field is visible and accept valid email', () => {
        writeValidCred(dataTestIdEmail, email);
    })


    it('Mobile Number field is visible and accept valid email', () => {
        writeValidCred(dataTestIdPhone, mobileNumber);
    })


    it('Mandatory checkbox check', () => {
        checkBoxCheck('[data-testid="tos-checkbox"]', 0);
    })


    it('Sent the code button is visible', () => {
        writeValidCred(dataTestIdEmail, email);
        writeValidCred(dataTestIdPhone, mobileNumber);
        checkBoxCheck('[data-testid="tos-checkbox"]', 0);
        submitButtonVisible('[data-testid="submitButton-accountRegistration"]');
    })

    it('I consent checkbox check', () => {
        checkBoxCheck('[data-testid="marketing-checkbox"]', 0);
    })

})