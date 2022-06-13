/* toTitleCase */

/* Version 1 */
String.prototype.toJadenCase = function () {
    return (this.split(" ").reduce((sentence, word) => {
        return `${sentence} ${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
    },"")).replace(" ","");
}

/* Version 2 */
String.prototype.toJadenCase2 = function () {
    return this.toLowerCase().split(" ").map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(" ");
}

console.log(("ThE qUicK brOwn foX juMped ovEr the laZy dOg").toJadenCase());
console.log(("ThE qUicK brOwn foX juMped ovEr the laZy dOg").toJadenCase2());