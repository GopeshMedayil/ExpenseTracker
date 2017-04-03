

export default class Utils {

    constructor() { }

    static getCurrentMonth() {
        var date = new Date(),
            locale = "en-us",
            month = date.toLocaleString(locale, { month: "long" });
        return month;

    }

}