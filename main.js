var date = new Date();
weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
document.getElementById("date").textContent = date.toLocaleDateString("en-US", { month: 'long', year: 'numeric' });

for (var i = 0, tdate = new Date(date - 86400000), panel = document.getElementById("dayPanel"); i < 6; i++, tdate.setDate(tdate.getDate() + 1)) {
    panel.children[i].children[0].textContent = tdate.getDate();
    panel.children[i].children[1].textContent = weekday[tdate.getDay()];
    panel.children[i].children[2].textContent = weekday[tdate.getDay()].substring(0, 3);
}

var xhr = new XMLHttpRequest();

/*
xhr.onload = function(e) {
    if (xhr.status == 200) {
        var homeworkList = [];
        try {
            homeworkList = JSON.parse(xhr.response);
        } catch (e) {
            console.error("Parse error");
        }
        if (homeworkList) {

        } else {
            console.warn("Response empty");
        }
    }
};
*/

// converting js date to string like 2000-12-01 because sql is string and js is date

function jsDateToStr(date_) {
    var month = date_.getUTCMonth() + 1;
    var day = date_.getUTCDate();
    var year = date_.getUTCFullYear();
    newdate = year + "-";
    if (month < 10)
        newdate += "0" + month;
    else
        newdate += month;
    if (day < 10)
        newdate += "-" + "0" + day;
    else
        newdate += "-" + day;

    return newdate;
}

var url = "https://nodejsclusters-44722-0.cloudclusters.net/homework/week";

$.getJSON('https://nodejsclusters-44722-0.cloudclusters.net/homework/week', function(data) {
    console.log(data);

    panel = document.getElementById("hwDescription");

    console.log("Homework:");

    console.log("Parsed:");
    for (var i = 0; i < data.length; i += 1) {

        var date = new Date();

        date.setDate(date.getDate() - 2);

        for (var ii = 0; ii < 6; ii += 1) {
            date.setDate(date.getDate() + 1);
            if (data[i]["date"].substring(0, 10) == jsDateToStr(date)) {
                panel.children[ii].children[0].innerHTML += data[i]["subject"] + `:<br>` + data[i]["description"] + `<br><br>`;

            }
        }
    }

    if (window.innerWidth <= 700) {
        for (var i = 0; i < 5; i += 1)
            document.getElementById("dayPanel").children[i].style.height = document.getElementById("hwDescription").children[i].clientHeight - 2 + 'px';
        //alert(document.getElementById("hwDescription").children[0].clientHeight);
    }
});



//document.getElementById("two").style.height = document.getElementById("one").clientHeight;