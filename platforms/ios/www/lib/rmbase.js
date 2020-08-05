function customParseFloat(val) {
    if (val == null) {
        val = 0;
    }

    return parseFloat(val);
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
};

function isdate(date) {
    return (new Date(date) !== false && !isNaN(new Date(date))) ? true : false;
}

function formatDate(val, row) {
    if (val == null) {
        return null;
    } else {
        var date = new Date(val);
        var ms = (date.getMonth() + 1) + "";
        if ((date.getMonth() + 1) < 10)
            ms = "0" + ms;

        var ds = date.getDate() + "";
        if (date.getDate() < 10)
            ds = "0" + ds;
        return (date.getFullYear() + "-" + ms + "-" + ds);
    }
}
function getFormatDateAndTime(date) {
    var ms = (date.getMonth() + 1) + "";
    if ((date.getMonth() + 1) < 10)
        ms = "0" + ms;

    var ds = date.getDate() + "";
    if (date.getDate() < 10)
        ds = "0" + ds;

    var hs = date.getHours() + "";
    if (date.getHours() < 10)
        hs = "0" + hs;

    var minutes = date.getMinutes() + "";
    if (date.getMinutes() < 10)
        minutes = "0" + minutes;


    var secs = date.getSeconds() + "";
    if (date.getSeconds() < 10)
        secs = "0" + secs;
    var str = date.getFullYear() + "-" + ms + "-" + ds + " " + hs + ":" + minutes + ":" + secs;

    return str;
}

function formatNumber(value, row) {
    return convertFormatNumber(value);
}

function convertFormatNumber(value) {
    if (!isNaN(value)) {
        var num = new Number(value);
        return formatNumberToString(num);
    }
    else {
        var num = new Number(0);
        return formatNumberToString(num);
    }
}

function formatCurrency(n) {
    return n.toFixed(2).replace(/./g, function (c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
}

function formatNumberToString(number) {
    return number.toFixed(2).replace(/./g, function (c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
}

function getMonday(date) {
    var day = date.getDay() || 7;
    if (day !== 1)
        date.setHours(-24 * (day - 1));
    return date;

}
function dedup_and_sum(arr, prop) {
    var seen = {},
        order = [];
    arr.forEach(function (o) {
        var id = o[prop].substr(0, 10);
        if (id in seen) {
            var stocklevel = parseFloat(seen[id].invoiceqty) + parseFloat(o.invoiceqty)
            var total = parseFloat(seen[id].total) + parseFloat(o.total)
            seen[id] = o;
            seen[id].invoiceqty = stocklevel;
            seen[id].total = total;
            order.push(order.splice(order.indexOf(id), 1));
        }
        else {
            seen[id] = o;
            order.push(id);
        }
    });

    return order.map(function (k) { return seen[k]; });
};
function sortdate(a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c - d;
};
function getMax(arr, prop) {
    var max;
    for (var i = 0 ; i < arr.length ; i++) {
        if (!max || parseFloat(arr[i][prop]) > parseFloat(max[prop]))
            max = arr[i];
    }
    return max;
};

function changeString2(userdata) {
    var newstring = [];
    for (var i = 0; i < userdata.length; i += 2) {
        newstring[i] = userdata[i + 1];
        newstring[i + 1] = userdata[i];
    }
    return newstring.join("");
}
