/**
 * Convert 12 Hour Time to 24 Hour Time
 */

function timeConversion(s) {
    const time = s.slice(0, s.length -2)
    const [HH, mm, ss] = s.slice(0, s.length -2).split(':');
    const meridiem = s.replace(time, '');

    if(meridiem === 'PM') {
        return parseInt(HH) === 12 ? `${12}:${mm}:${ss}` : `${parseInt(HH) + 12}:${mm}:${ss}`;
    }
    else if(meridiem === 'AM') {
        return parseInt(HH) === 12 ? `00:${mm}:${ss}` : time
    }
}

console.log(timeConversion('12:00:01AM'));
