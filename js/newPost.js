$("#buttonS").click(function () {
  const newProfile = $("#newPostForm").serializeArray(); // missing # for id selector

  const postObject = {};
  newProfile.map(function (value) {
    postObject[value.name] = value.value;
  });

  $.ajax({
    url: "http://localhost:3000/entries",
    method: "POST",
    dataType: "json",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTlkMWFkNzYyODBkM2I2ODA1NTcyYyIsImlhdCI6MTU5NTUzMzE4NX0.ZbyLJGs_8UfaH68xixqkf-tn86sNpRqcYLlYDHr6PFE",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(postObject),
    success: (response) => {
      jQuery.parseJSON(response);
      console.log(response);
      console.log("registro exitoso");
      getPostDb();
    },
  });
  $("#confirmModal").modal("show");
});
