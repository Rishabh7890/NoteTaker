// create function to show the notes in db 
function showNotes() {
  $.ajax({
      url: "api/notes",
      method: "GET"
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
        // create reference to list and fill it with the data 
        var notesList = $("#notes-list");

        var listNote = $("<li class='list-group-item'>");

        // append listNote to the list
        listNote.append(
          $("<h5>").text("Title: " + data[i].title),
          $("<h6>").text(data[i].body),
          $("<hr>"),
          $("<i class='delete-note fas fa-trash'>")
        );

        listNote.attr("note-data", data[i].id)

        notesList.append(listNote);
      }

    })
}

// create an on click listner for submit button and add note to db and html 
$("#submit").on("click", function (event) {
  event.preventDefault();

  var newNote = {
    title: $("#note-title").val().trim(),
    body: $("#note-body").val().trim()
  };

  console.log(newNote);

  $.ajax({
      url: "/api/notes",
      method: "POST",
      data: newNote
    })
    .then(function (data) {
      $("#note-title").val("");
      $("#note-body").val("")
    })
  $("#note-title").val("");
  $("#note-body").val("");

  $("#notes-list").empty();
  showNotes();
})

// create delete button to remove note 
$(document).on("click", ".delete-note", function (event) {

  var $noteID = $(this).parent().attr("note-data");
  var $noteIDInt = parseInt($noteID);

  $.ajax({
      url: "/api/notes/" + $noteIDInt,
      method: "DELETE"
    })
    .then(function () {
      $("#notes-list").empty();
      showNotes();
    })
})

// run showNotes at end
showNotes();