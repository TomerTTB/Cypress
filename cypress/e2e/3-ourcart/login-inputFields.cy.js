/// <reference types="cypress" />
import {
    defultInputFieldsText, incorrectInputText, url, validInputText
} from '../ourcart/login-functions'

describe('Email and Mobile input fields', () => {

    // Runs before each test
    beforeEach('We will open the URL', () => {
        cy.visit(url)
    })

    // Runs after each test
    afterEach(() => {
    })

    // Testing the functionality and UI of the Email andd Mobile number input fields

    it('Default inputbox Email text', () => {
        defultInputFieldsText('label.MuiFormLabel-root.MuiInputLabel-outlined', 'Email*');
    })


    it('Default inputbox Mobile number text', () => {
        defultInputFieldsText('label.MuiFormLabel-root.MuiInputLabel-outlined', 'Mobile number*');
    })


    it('Incorrect inputbox Email text', () => {
        incorrectInputText('email-input', 'Incorrect email address');
    })


    it('Incorrect inputbox Mobile Number text', () => {
        incorrectInputText('phone-input', 'Incorrect mobile number');
    })


    it('Valid inputbox field Email text', () => {
        validInputText('email-input', 'tomergranit@hotmail.com', 'Email*');
    })


    it('Valid inputbox field Mobile Number text', () => {
        validInputText('phone-input', '+1 1212121212', 'Mobile number*');
    })

})


