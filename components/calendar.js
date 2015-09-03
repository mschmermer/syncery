var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
// Annotation section
var CalendarComponent = (function () {
    function CalendarComponent() {
        this.day = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"];
        var d = new Date();
        var dm = d.getMonth() + 1;
        var dj = d.getYear();
        Kalender.init(dm, dj);
        Kalender.writeCalendar();
    }
    CalendarComponent = __decorate([
        angular2_1.Component({
            selector: 'calendar'
        }),
        angular2_1.View({
            templateUrl: 'templates/syncery-calendar.html',
            styleUrls: ['css/syncery-calendar.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarComponent);
    return CalendarComponent;
})();
var Kalender = {
    CalenderData: {},
    Tage: new Array("MO", "DI", "MI", "DO", "FR", "SA", "SO"),
    Monatsname: new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"),
    Monat: 0,
    Jahr: 0,
    init: function (Monat, Jahr) {
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
        this.CalenderData['9-20']['arrival'] = 'true';
        this.CalenderData['9-21']['occupied'] = 'true';
        this.CalenderData['9-22']['occupied'] = 'true';
        this.CalenderData['9-23']['occupied'] = 'true';
        this.CalenderData['9-24']['occupied'] = 'true';
        this.CalenderData['9-25']['occupied'] = 'true';
        this.CalenderData['9-26']['occupied'] = 'true';
        this.CalenderData['9-27']['departure'] = 'true';
        //this.CalenderData['9-2']['today'] = 'true';
        console.log(this.CalenderData);
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
            var position = $('td[data-position="' + this.CalenderData[key].data_position + '"]');
            //var zahl = $('td[data-position="'+this.CalenderData[key].data_position+'"]').find("div");
            position.text(this.CalenderData[key].day);
            position.attr('data-date', this.Jahr + '-' + key);
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
angular2_1.bootstrap(CalendarComponent);
