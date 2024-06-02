export function numToRupeesText(num: number) {
    const digitsMap: any = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };

    const tensMap: any = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
    };

    const placesMap: any = {
        0: '',
        1: 'thousand',
        2: 'lakh',
        3: 'crore',
    };

    function convertThreeDigits(n: number) {
        let hundredsDigit = Math.floor(n / 100);
        let tensUnit = n % 100;
        let text = '';
        if (hundredsDigit !== 0) {
            text += digitsMap[hundredsDigit] + ' hundred ';
        }
        if (tensUnit !== 0) {
            if (tensUnit < 10) {
                text += digitsMap[tensUnit];
            } else if (tensUnit < 20) {
                text += tensMap[tensUnit];
            } else {
                let tensDigit = Math.floor(tensUnit / 10);
                let unitsDigit = tensUnit % 10;
                text += tensMap[tensDigit];
                if (unitsDigit !== 0) {
                    text += '-' + digitsMap[unitsDigit];
                }
            }
        }
        return text.trim();
    }

    let groups = [];
    while (num > 0) {
        groups.push(num % 1000);
        num = Math.floor(num / 1000);
    }

    let text = '';
    for (let i = 0; i < groups.length; i++) {
        let groupText = convertThreeDigits(groups[i]);
        if (groupText) {
            text = groupText + ' ' + placesMap[i] + ' ' + text;
        }
    }

    return (text.trim() + ' rupees only').toUpperCase();
}

// Example usage:
