fetch("./qz7.json")
//<!--$("#row").html("<td>123</td>");-->
    data.done(function (msg) {
        $("#row").html(
            "<tr><td>" + info[0].stationNo + "</td><td>" + info[0].stationName + "</td><td>" + info[0].rectime + "</td><td>" + info[0].rain + "</td></tr>" + "<tr><td>" + info[1].stationNo + "</td><td>" + info[1].stationName + "</td><td>" + info[1].rectime + "</td><td>" + info[1].rain + "</td></tr>" + "<tr><td>" + info[2].stationNo + "</td><td>" + info[2].stationName + "</td><td>" + info[2].rectime + "</td><td>" + info[2].rain + "</td></tr>"
            + "<tr><td>" + info[3].stationNo + "</td><td>" + info[3].stationName + "</td><td>" + info[3].rectime + "</td><td>" + info[3].rain + "</td></tr>" + "<tr><td>" + info[4].stationNo + "</td><td>" + info[4].stationName + "</td><td>" + info[4].rectime + "</td><td>" + info[4].rain + "</td></tr>"
        )
    });