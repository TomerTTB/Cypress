/// <reference types="cypress" />
import {
    url, firstCheckboxText, firstCheckboxTermsLink, firstCheckboxPl1, firstCheckboxPl2
    , consentCheckbox, inactiveSubmitText
} from '../ourcart/login-functions'

describe('My Test Suite', () => {

    // Runs before each test
    beforeEach('We will open the URL', () => {
        cy.visit(url)
    })

    // Runs after each test
    afterEach(() => {
    })


    // Testing the texts and links of the loging area

    it('Header Text', () => {
        cy.get('.login_form_title_text').should('have.text', 'Grab your rebate');
    })


    it('Text after input fields', () => {
        cy.get('.bottomInputsLabel').should('have.text', 'We will send you a text to verify your phone number');
    })


    it('Mandatory Checkbox text (no links)', () => {
        firstCheckboxText('label.MuiBox-root.jss6');
    })


    it('Mandatory Checkbox Terms of Service', () => {
        firstCheckboxTermsLink('a[href="https://www.ourcart.com/chop-tos"]');
    })


    it('Mandatory Checkbox Privacy Policy 1', () => {
        firstCheckboxPl1('a[href="http://wp.pl');
    })


    it('Mandatory Checkbox Privacy Policy 2', () => {
        firstCheckboxPl2('label.MuiBox-root.jss6 a[href="https://www.ourcart.com/chop-privacy-policy"]');
    })


    it('I consent Checkbox text', () => {
        consentCheckbox('label.MuiBox-root.jss7.LoginCheckbox_terms_container');
    })


    it('Inactive submit button "Send the code" text', () => {
        inactiveSubmitText('[data-testid="submitButton-accountRegistration"]');
    })
})
