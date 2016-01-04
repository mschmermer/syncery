angular.module('syncery')

    .constant({
        languageVariables: {
            de: {
                /*Buchungen*/
                booking: "Buchung",
                bookings: "Buchungen",
                customer: "Kunde",
                change_booking: "Buchung bearbeiten",
                show_booking: "Buchung anzeigen",
                payment: "Zahlung",
                date: "Datum",
                selection: "Auswahl",
                /*Buchung hinzufügen */
                add_booking: "Buchung hinzufügen",
                travel_data: "Reisedaten",
                arrival_date: "Anreisedatum",
                departure_date: "Abreisedatum",
                payment_data: "Zahlungsdaten",
                target_date: "Zieldatum",
                payment_date: "Gezahlt am",
                deposit: "Anzahlung",
                final_payment: "Restzahlung",
                notes: 'Notizen',
                /* Unterkünfte*/
                back: "Zurück",
                last_booking: "letzte Buchung",
                next_booking: "nächste Buchung",
                edit: "Bearbeiten",
                delete: "Löschen",
                cancel: "Abbruch",
                search: "Suche",
                accommodations: "Unterkünfte",
                accommodation: "Unterkunft",
                description: "Beschreibung",
                master_data: "Stammdaten",
                title: "Titel",
                first_name: "Vorname",
                name: "Nachname",
                address: "Adresse",
                city: "Stadt",
                country: "Land",
                telephone: "Telefon",
                mobile: "Mobil Telefon",
                // Menü
                search_menu: "SUCHE",
                bookings_menu: "BUCHUNGEN",
                accommodations_menu: "UNTERKÜNFTE",
                customer_menu: "KUNDEN",
                portals_menu: "PORTALE",
                settings_menu: "EINSTELLUNGEN",
                menu_menu: "MENÜ",
                add_menu: "Profil hinzufügen",
                add_mapping: "Mapping hinzufügen",
                // Unterkunft hinzufügen
                required: "Pflichtfeld",
                add_accommodation: "Unterkunft hinzufügen",
                gender: "Anrede",
                title: "Titel",
                enter_accommodation_data: "Unterkunftsdaten eintragen",
                add_picture: "Bild hinzufügen",
                save_accommodation: "Unterkunft speichern",
                // Einstellungen
                settings: "Einstellungen",
                general: "Allgemein",
                agreement: "Vertrag",
                sign_off: "abmelden",
                informations: "Informationen",
                // Allgemein
                timezone: 'Zeitzone',
                currency: 'Währung',
                language: 'Sprache',
                notifications: "Benachrichtigungen",
                change_password: "Passwort ändern",
                data_save: "Daten sichern",
                user_datas: "Benutzerdaten",
                nationality: "Nationalität",
                save_general: "SPEICHERN",
                yes: "Ja",
                no: "Nein",
                // Vetrag
                invoice_address: "Rechnungsanschrift",
                change_data: "Daten bearbeiten",
                invoices: "Rechnungen",
                // Kundenübersicht
                customers: "Kunden",
                // Kunden Details
                profit: "Gewinn",
                open_bill: "offene Rechnung",
                contact: "Kontakt",
                contact_data: "Kontaktdaten",
                // Kunden Buchungs Übersicht
                from: "von",
                to: "bis",
                // Kunde hinzufügen
                enter_customer_data: "Kundendaten eintragen",
                save_customer: "Kunde speichern",
                add_customer: "Kunde hinzufügen",
                // Home
                testphase_time: "Ihre Testphase endet in {{lastdays}} Tagen.",
                unpaid_bookings: "Sie haben noch {{unpaid}} unbezahlte Buchungen.",
                unfinished_bookings: "Sie haben noch {{unfinished}} unfertige Buchungen.",
                extend_contract: "Jetzt vertrag verlängern",
                messages: "Nachrichten",
                accommodation_capacity: "Die Auslastung Ihrer Unterkünfte",
                // Syncery Contract Days Directive
                days: "Tage",
                // Syncery Extend Contract Directive
                change_package: "Ändern Sie Ihr Paket",
                numbers_accommodations: "Anzahl Ihrer Ferienwohnungen",
                annually: "jährlich",
                monthly: "monatlich",
                // Portale
                portals: "Portale",
                portal_data: "Portaldaten",
                add_portal: "Portal hinzufügen",
                key: "Schlüssel",
                save: "Speichern",
                validation_error: "Bitte eingabe überprüfen.",
                // login
                forgot_password: "Haben Sie Ihr Passwort vergessen?",
                dont_account: "Haben Sie keinen Account?",
                create_account: "Account erstellen",
                password: "Passwort",
                repeat_password: "Passwort wiederholen",
                repeat_mail: "E-Mail wiederholen",
                account_data: "Accountdaten",
                request_password: "Neues Passwort anfordern",
                forgot: "Passwort vergessen?"
            },
            en: {
                /*Booking*/
                booking: "Booking",
                bookings: "Bookings",
                customer: "Customer",
                change_booking: "change booking",
                show_booking: "show booking",
                payment: "Payment",
                date: "Date",
                selection: "Selection",
                /*Add Booking */
                add_booking: "Add booking",
                travel_data: "Traveldata",
                arrival_date: "Arrivaldate",
                departure_date: "Departuredate",
                payment_data: "Paymentdata",
                target_date: "Targetdate",
                payment_date: "Paid on",
                deposit: "Deposit",
                final_payment: "Final payment",
                notes: 'Notes',
                /* Accommodations */
                back: "Back",
                last_booking: "Last booking",
                next_booking: "Next booking",
                edit: "Edit",
                delete: "Delete",
                cancel: "Cancel",
                search: "Search",
                accommodations: "Accommodations",
                accommodation: "Accommodation",
                description: "Description",
                master_data: "Master Data",
                title: "Title",
                first_name: "First name",
                name: "Name",
                address: "Address",
                city: "City",
                country: "Country",
                telephone: "Telephone",
                mobile: "Mobile",
                search_menu: "SEARCH",
                bookings_menu: "BOOKINGS",
                accommodations_menu: "ACCOMMODATIONS",
                customer_menu: "CUSTOMER",
                portals_menu: "PORTALS",
                settings_menu: "SETTINGS",
                menu_menu: "MENU",
                add_mapping: "Add Mapping",
                add_menu: "Add Profil",
                // Add accommodation
                required: "required",
                add_accommodation: "Add accommodation",
                gender: "Gender",
                title: "Title",
                enter_accommodation_data: "Enter accommodationdata",
                add_picture: "Add Picture",
                save_accommodation: "Save Accommodation",
                // Settings
                settings: "Settings",
                general: "General",
                agreement: "Agreement",
                sign_off: "sign off",
                informations: "Informations",
                //General
                timezone: 'Timezone',
                currency: 'Currency',
                language: 'Language',
                notifications: "Notifications",
                change_password: "Change password",
                data_save: "Data save",
                user_datas: "User Datas",
                nationality: "Nationality",
                save_general: "SAVE",
                yes: "Yes",
                no: "No",
                // Agreement
                invoice_address: "Invoice address",
                change_data: "Change data",
                invoices: "Invoices",
                // Customer Overview
                customers: "Customers",
                // Customer Details
                profit: "Profit",
                open_bill: "Open bill",
                contact: "Contact",
                contact_data: "Contact Data",
                // Customer Bookings Overview
                from: "from",
                to: "to",
                // Add Customer
                enter_customer_data: "Enter customer-data",
                add_cutomer: "Add customer",
                save_customer: "Save Cutomer",
                // Home
                testphase_time: "Your Testphase ends in {{lastdays}} days.",
                unpaid_bookings: "You have {{unpaid}} unpaid bookings.",
                unfinished_bookings: "You have {{unfinished}} unfinished bookings.",
                extend_contract: "Now extend contract",
                messages: "Messages",
                accommodation_capacity: "The capacity utilization of your accommodations",
                // Syncery Contract Days Directive
                days: "days",
                // Syncery Extend Contract Directive
                change_package: "Change your package",
                numbers_accommodations: "Number of their apartments",
                monthly: "monthly",
                annually: "annually",
                // Portals
                portals: "Portals",
                portal_data: "Portaldata",
                add_portal: "Add portal",
                key: "Key",
                save: "Save",
                validation_error: "Please check your input.",
                // login
                forgot_password: "Forgot your Password?",
                dont_account: "You don't have an account?",
                create_account: "Create account",
                password: "password",
                repeat_password: "Repeat password",
                repeat_mail: "Repeat E-Mail",
                account_data: "Account data",
                // forgot password
                request_password: "request a new password",
                forgot: "Forgot password?"
            }
        }
    });