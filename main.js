var date = new Date();
weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
document.getElementById("date").textContent = date.toLocaleDateString("en-US", { month: 'long', year: 'numeric' });

for (var i = 0, tdate = new Date(date - 86400000), panel = document.getElementById("dayPanel"); i < 6; i++, tdate.setDate(tdate.getDate() + 1)) {
    panel.children[i].children[0].textContent = tdate.getDate();
    panel.children[i].children[1].textContent = weekday[tdate.getDay()];
    panel.children[i].children[2].textContent = weekday[tdate.getDay()].substring(0, 3);
}

var xhr = new XMLHttpRequest();

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