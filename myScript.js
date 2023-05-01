document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");
    const scrambleButton = document.getElementById("myScrambleButton");
    const scrambleOutputButton = document.getElementById("tableCreator");
    var outputDiv = document.getElementById("myOutput");
  
    button.addEventListener("click", function() {
        var inputText = document.getElementById("myInput").value;
        var newParagraph = document.createElement("p");
        newParagraph.textContent = inputText;
        outputDiv.appendChild(newParagraph);
        console.log("JS executed.");
        console.log(inputText);
        // window.location.href = "new-page.html";
    });
    scrambleButton.addEventListener("click", function() {
        window.location.href = "new-page.html";
    });
  });
  