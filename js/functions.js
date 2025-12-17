const compareStringLength = (string, length) =>  string.length <= length

const isPalindrome = (string) => {
    let newString = '';
    let normalizedString = string.toLowerCase().replaceAll(" ", "");

    for (let i = normalizedString.length - 1; i >= 0; i--) {
       newString+=normalizedString[i];
    }

    return normalizedString === newString ? true : false;
}

const getNumbers = (string) => {
    let numberStr = '';

    let normalizedString;

    if (typeof string === 'number') {
        normalizedString = string.toString();
    } else {
        normalizedString = string.replaceAll(' ', '');
    } 

    for (let i = 0; i < normalizedString.length; i++) {
        if (!isNaN(normalizedString[i])) {
            numberStr+=normalizedString[i];
        }
    }
    
    if (numberStr === '') {
        return 'NaN'
    } else {
        return parseInt(numberStr, 10);
    }
}


