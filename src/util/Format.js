export class Format {
    static getCamelCase(text) {

        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];

    }

    static toTime(durations) {
        let seconds = parseInt((durations / 1000) % 60);
        let minutes = parseInt((durations / (1000 * 60)) % 60);
        let hours = parseInt((durations / (1000 * 60 * 60)) % 60 * 24);

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    static dateToTime(date, locale = 'pt-BR') {

        console.log(date.toLocaleTimeString(locale, {

            hours: '2-digit',
            minutes: '2-digit'

        }));

        return date.toLocaleTimeString(locale, {

            hours: '2-digit',
            minutes: '2-digit'

        });

    }

    static timeStampToTime(timeStamp) {
        let date = new Date(timeStamp);

        // teacher's version
        // return (timeStamp && typeof timeStamp.toDate === 'function') ?
        //     Format.dateToTime(timeStamp.toDate()) :
        //     '';


        return (timeStamp) ?
            date.getHours() + ':' + date.getMinutes() :
            '';

    }
}