import lodash from 'lodash';


export function truncateDescription(text, length) {
    return lodash.truncate(text, { length: length });
}

export function truncate(text) {
    return text;
}
