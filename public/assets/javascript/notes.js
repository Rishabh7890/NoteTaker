function showNotes() {
  $.ajax({
    url: "api/notes",
    method: "GET"
  })
  .then(function(data) {
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      // create reference to list and fill it with the data 
      var notesList = $("#notes-list");

      var listNote =  $("<li class='list-group-item'>");

      listNote.append(
        $("<h4>").text("Note Number: " + (i + 1)),
              $("<hr>"),
              $("<h4>").text("Title: " + data[i].title),
              $("<h5>").text(data[i].body),
              $("<i class='delete-note fas fa-trash'>")
      );

      listNote.attr("note-data", data[i].id)

      notesList.append(listNote);
    }
    
  })
}

$("#submit").on("click", function(event) {
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
  .then(function(data) {
    $("#note-title").val("");
    $("#note-body").val("")
  })
  $("#note-title").val("");
  $("#note-body").val("");

  $("#notes-list").empty();
  showNotes();
})

showNotes();


