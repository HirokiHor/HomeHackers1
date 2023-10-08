var commentsArray = [];

function openForm() {
    document.getElementById("myModal").style.display = "block";
}

function closeForm() {
    document.getElementById("myModal").style.display = "none";
}

function submitForm() {
    var userInput = document.getElementById("userInput").value;
    var contactInfo = document.getElementById("contactInfo").value;
    var price = document.getElementById("price").value;

    var userContent = document.getElementById("userContent");
    userContent.innerHTML += "<p>" + userInput + "</p><p>طريقة التواصل: " + contactInfo + "</p><p>الثمن: " + price + "</p><hr>";

    closeForm();

    // Enable comment section after posting content
    document.getElementById("commentInput").disabled = false;
    document.querySelector("#commentForm button").disabled = false;
}

function submitComment() {
    var commentInput = document.getElementById("commentInput").value;

    if (commentInput) {
        commentsArray.push(commentInput);

        var commentsSection = document.getElementById("comments");
        commentsSection.innerHTML = "";

        for (var i = 0; i < commentsArray.length; i++) {
            commentsSection.innerHTML += "<p>" + commentsArray[i] + "</p>";
        }

        document.getElementById("commentInput").value = "";
    }
}