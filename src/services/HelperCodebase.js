import Axios from 'axios';

class HelperCodebase {
    array_search_multidim = (kk, vv, z) => {
        var out = [];
        var ln = Object.keys(z).length;
        for (var i = 0; i < ln; i++) {
            var itm = z[i];
            if (itm[kk] == vv) {
                out.push(itm);
            }
        }
        return out;
    };

    daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    getSundays(year, month) {
        var day, counter, date;

        day = 1;
        counter = 0;
        date = new Date(year, month, day);
        while (date.getMonth() === month) {
            if (date.getDay() === 0) {
                // Sun=0, Mon=1, Tue=2, etc.
                counter += 1;
            }
            day += 1;
            date = new Date(year, month, day);
        }
        return counter;
    }

    formatDate_ymd(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    add_days(curdt, numz) {
        var tt = new Date(curdt.getTime() + parseInt(numz) * 24 * 60 * 60 * 1000);

        return this.formatDate_ymd(tt);
    }

    dummy = (txt) => {
        return '-00000------';
    };
    weekdata = () => {
        return '-00000------';
    };
}

export default new HelperCodebase();
