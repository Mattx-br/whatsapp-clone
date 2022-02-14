class Format {
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
}