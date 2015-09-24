var Kalender = {
    CalenderData: {},
    Tage: new Array("MO", "DI", "MI", "DO", "FR", "SA", "SO"),
    Monatsname: new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"),
    Monat: 0,
    Jahr: 0,
    init: function (Monat, Jahr) {
        this.CalenderData = {};
        if (Jahr < 999)
            Jahr += 1900;
        this.Monat = Monat;
        this.Jahr = Jahr;
        var jetzt = new Date();
        var DieserMonat = jetzt.getMonth() + 1;
        var DiesesJahr = jetzt.getYear();
        var DieserTag = jetzt.getDate();
        if (DiesesJahr < 999)
            DiesesJahr += 1900;
        var Zeit = new Date(Jahr, Monat - 1, 1);
        var Start = Zeit.getDay();
        if (Start > 0) {
            Start--;
        }
        else {
            Start = 6;
        }
        var Stop = berechneLetzterMonatstag(Monat, Jahr);
        var Tageszahl = 1;
        var TageszahlnextMounth = 1;
        for (var Zelle = 0; Zelle <= 5; Zelle++) {
            for (var Spalte = 0; Spalte <= 6; Spalte++) {
                // letzter Monat
                if (Zelle == 0 && Spalte < Start) {
                    var Tag1 = berechneLetzterMonatstag(Monat - 1, Jahr) + (Spalte - Start + 1);
                    var Monat1 = Monat - 1;
                }
                if (Monat - 1 == Monat1 && Tag1 <= berechneLetzterMonatstag(Monat - 1, Jahr)) {
                    this.CalenderData[Monat1 + '-' + Tag1] = {
                        day: Tag1,
                        mounth: Monat1,
                        data_position: (Zelle + 1) + '-' + (Spalte + 1),
                        arrival: 'none',
                        occupied: 'none',
                        departure: 'none',
                        today: 'none',
                        other_mounth: 'true'
                    };
                }
                //aktueller Monat
                if (Zelle == 0 && Spalte == Start) {
                    Tag1 = 1;
                    Monat1 = Monat;
                }
                if (Monat == Monat1 && Tag1 <= berechneLetzterMonatstag(Monat, Jahr)) {
                    this.CalenderData[Monat1 + '-' + Tag1] = {
                        day: Tag1,
                        mounth: Monat1,
                        data_position: (Zelle + 1) + '-' + (Spalte + 1),
                        arrival: 'none',
                        occupied: 'none',
                        departure: 'none',
                        today: 'none',
                        other_mounth: 'none'
                    };
                }
                //nächster Monat
                if (Tag1 > berechneLetzterMonatstag(Monat, Jahr)) {
                    Tag1 = 1;
                    Monat1 = Monat1 + 1;
                }
                if (Monat + 1 == Monat1) {
                    this.CalenderData[Monat1 + '-' + Tag1] = {
                        day: Tag1,
                        mounth: Monat1,
                        data_position: (Zelle + 1) + '-' + (Spalte + 1),
                        arrival: 'none',
                        occupied: 'none',
                        departure: 'none',
                        today: 'none',
                        other_mounth: 'true'
                    };
                }
                if (Jahr == DiesesJahr && DieserMonat == Monat1 && DieserTag == Tag1) {
                    this.CalenderData[Monat1 + '-' + Tag1].today = 'true';
                }
                Tag1++;
            }
        }

        if(this.CalenderData['9-10']){
            this.CalenderData['9-10']['arrival'] = 'true';
            this.CalenderData['9-11']['occupied'] = 'true';
            this.CalenderData['9-12']['occupied'] = 'true';
            this.CalenderData['9-13']['occupied'] = 'true';
            this.CalenderData['9-14']['occupied'] = 'true';
            this.CalenderData['9-15']['occupied'] = 'true';
            this.CalenderData['9-16']['occupied'] = 'true';
            this.CalenderData['9-17']['occupied'] = 'true';
            this.CalenderData['9-18']['occupied'] = 'true';
            this.CalenderData['9-19']['occupied'] = 'true';
            this.CalenderData['9-20']['departure'] = 'true';
            this.CalenderData['9-10']['bookingId'] = '1a';
            this.CalenderData['9-11']['bookingId'] = '1';
            this.CalenderData['9-12']['bookingId'] = '1';
            this.CalenderData['9-13']['bookingId'] = '1';
            this.CalenderData['9-14']['bookingId'] = '1';
            this.CalenderData['9-15']['bookingId'] = '1';
            this.CalenderData['9-16']['bookingId'] = '1';
            this.CalenderData['9-17']['bookingId'] = '1';
            this.CalenderData['9-18']['bookingId'] = '1';
            this.CalenderData['9-19']['bookingId'] = '1';
            this.CalenderData['9-20']['bookingId'] = '1d';
            this.CalenderData['9-20']['arrival'] = 'true';
            this.CalenderData['9-21']['occupied'] = 'true';
            this.CalenderData['9-22']['occupied'] = 'true';
            this.CalenderData['9-23']['occupied'] = 'true';
            this.CalenderData['9-24']['occupied'] = 'true';
            this.CalenderData['9-25']['occupied'] = 'true';
            this.CalenderData['9-26']['occupied'] = 'true';
            this.CalenderData['9-27']['departure'] = 'true';
        }

        function berechneLetzterMonatstag(Monat, Jahr) {
            var Stop = 31;
            if (Monat == 4 || Monat == 6 || Monat == 9 || Monat == 11)
                --Stop;
            if (Monat == 2) {
                Stop = Stop - 3;
                if (Jahr % 4 == 0)
                    Stop++;
                if (Jahr % 100 == 0)
                    Stop--;
                if (Jahr % 400 == 0)
                    Stop++;
            }
            return Stop;
        }
    },
    writeCalendar: function () {
        for (var key in this.CalenderData) {
            //alert(this.CalenderData[key].day);
            var position = $('td[data-position="' + this.CalenderData[key].data_position + '"]');
            position.removeClass();
            position.text(this.CalenderData[key].day);
            position.attr('data-date', this.Jahr + '-' + key);

            if (this.CalenderData[key].bookingId){
                position.attr('data-booking-id', this.CalenderData[key].bookingId);
            }

            if (this.CalenderData[key].arrival == 'true') {
                position.addClass('arrival');
            }
            if (this.CalenderData[key].occupied == 'true') {
                position.addClass('occupied');
            }
            if (this.CalenderData[key].departure == 'true') {
                position.addClass('departure');
            }
            if (this.CalenderData[key].other_mounth == 'true') {
                position.addClass('other-mounth');
            }
            if (this.CalenderData[key].today == 'true') {
                position.append('<div class="today">' + this.CalenderData[key].day + '</div>');
            }
        }
    }
};