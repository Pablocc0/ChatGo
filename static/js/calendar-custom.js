document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar-start");
  var startDate = document.querySelector(".valDate-start");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    selectable: true,
    initialView: "dayGridMonth",
    firstDay: 1,
    dateClick: function (info) {
      this.select(info.dateStr);
      startDate.innerHTML = info.dateStr;
    },
  });
  calendar.render();
});

//-------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var calendarElDue = document.getElementById("calendar-due");
  var dueDate = document.querySelector(".valDate-due");

  var calendar2 = new FullCalendar.Calendar(calendarElDue, {
    selectable: true,
    initialView: "dayGridMonth",
    firstDay: 1,
    dateClick: function (info) {
      this.select(info.dateStr);
      dueDate.innerHTML = info.dateStr;
    },
  });
  calendar2.render();
});
