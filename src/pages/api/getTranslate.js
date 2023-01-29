export const getTranslate = (obj, lang) => {
    let contentPicked = ''
    if (lang !== 'en') {
        contentPicked = obj[`${lang}`];
    } else {
        contentPicked = obj['en'];
    }
    return contentPicked;
};