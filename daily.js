var date = new Date();
weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
document.getElementById("dateToday").textContent = weekday[date.getDay()] + ", " + date.getDate();
var timeCompare = 0;

function clock() {
    date = new Date();
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('subTime').innerHTML = hours + ':' + minutes + ':' + seconds;
    var timeLeft = (endTimeNow.getTime() - date.getTime()) / 1000;
    if (timeLeft <= 0)
        location.reload();
    document.getElementById('timeleft').textContent = parseInt(timeLeft / 60) + ":" + ((parseInt(timeLeft % 60) < 10) ? '0' : '') + parseInt(timeLeft % 60);
}

//trash

var table = [
    [ //sunday
        ["Chill", '00:00', '23:59', " "]
    ],
    [ //monday
        ["\"Free\" time1", '00:00', '08:25', " "],
        ["Subject1", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time1", '15:15', '23:59', " "]
    ],
    [ // tuesday
        ["\"Free\" time2", '00:00', '08:25', " "],
        ["Subject1 long name", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time2", '15:15', '23:59', " "]
    ],
    [ // wednesday
        ["\"Free\" time3", '00:00', '08:25', " "],
        ["Ukrainian history", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time3", '15:15', '23:59', " "]
    ],
    [ // thursday
        ["\"Free\" time4", '00:00', '08:25', " "],
        ["Subject1", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time4", '15:15', '23:59', " "]
    ],
    [ // Friday
        ["\"Free\" time5", '00:00', '08:25', " "],
        ["Subject1", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time5", '15:15', '23:59', " "]
    ],
    [ // Saturday
        ["\"Free\" time6", '00:00', '08:25', " "],
        ["Subject1", '08:25', '09:10', "121"],
        ["Break", '09:10', '09:20', " "],
        ["Subject2", '09:20', '10:05', "121"],
        ["Lunch", '10:05', '10:20', " "],
        ["Subject3", '10:20', '11:05', "121/317"],
        ["Break", '11:05', '11:20', " "],
        ["Subject4", '11:20', '12:05', "-"],
        ["Break", '12:05', '12:15', " "],
        ["Subject5", '12:15', '13:00', "121"],
        ["Break", '13:00', '13:15', " "],
        ["Subject6", '13:15', '14:00', "121"],
        ["Break", '14:00', '14:15', " "],
        ["Subject7", '14:15', '15:00', "121"],
        ["Dinner", '15:00', '15:15', " "],
        ["\"Free\" time6", '15:15', '23:59', " "]
    ]
]

//date.setHours(9);

var dayPos = date.getDay();
console.log("Day: " + dayPos);
var isFirst = 1;
var cabinet = "";
var isId = "";
var endTimeNow = null;
for (var i = 0; i < table[dayPos].length; i += 1) {
    cabinet = table[dayPos][i][3];

    var startTime = new Date();
    startTime.setHours(table[dayPos][i][1].substring(0, 2));
    startTime.setMinutes(table[dayPos][i][1].substring(3, 5));
    startTime.setSeconds(0);

    var endTime = new Date();
    endTime.setHours(table[dayPos][i][2].substring(0, 2));
    endTime.setMinutes(table[dayPos][i][2].substring(3, 5));
    endTime.setSeconds(0);

    isId = "";
    now = "";
    if (isFirst == 1) {
        now = "Now: ";
        isId = ` id="timeleft" `;
        timeCompare = i;
        endTimeNow = endTime;
    }

    console.log(startTime + " " + endTime);
    console.log(startTime.getTime() - endTime.getTime());

    if (startTime.getTime() - date.getTime() > 0 || endTime.getTime() - date.getTime() > 0) {
        isFirst = 0;
        var newElement = document.createElement("tr");
        newElement.innerHTML = `<td style="border-top: transparent;border-left: transparent;">
        <p class="subject">` + now + table[dayPos][i][0] + `</p>
        <p class="subjectTime">` + table[dayPos][i][1] + `-` + table[dayPos][i][2] + `</p>
    </td>
    <td style = "border-left: transparent;border-top: transparent;">
        <p class = "timeLeft" ` + isId + `>` + cabinet + `</p></td>`;
        document.getElementById("table").appendChild(newElement);
    }
}

setInterval(clock, 1000);
clock();