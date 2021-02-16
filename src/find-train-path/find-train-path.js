
const schedule = [
    ['13:00', 'A', '15:30', 'B'],
    ['12:00', 'C', '16:00', 'D'],
    ['10:00', 'B', '11:00', 'C'],
    ['10:00', 'A', '11:00', 'C']
];

function convert(time) {
    const [h, m] = time.split(':');
    return parseInt(h) + (m[0] == '0' ? (m[1] == '0' ? 0 : 60 / m[1]) : 60 / m) / 100
}

function find(city, time) {
    const inputTime = convert(time);

    return schedule.filter(([sTime, sCity]) => city === sCity && convert(sTime) >= inputTime);
}

function find2(sCity, sTime, city, time) {
    const cTime = convert(time);

    const p = find(sCity, sTime);

    for (const s of p) {
        if (city === s[3] && cTime >= convert(s[2])) {
            return true;
        } else if (convert(s[2]) < cTime) {
            const r = find2(s[3], s[2], city, time);
            if (r) {
                return true;
            }
        }
    }

    return false;

}


console.log(find2('A', '09:00', 'D', '13:30'));