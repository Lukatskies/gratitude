//create function addGratitude and user input with .textContent//
function addGratitude() {
    const gratitudeInput = document.getElementById("gratitude").value;
    const newGratitudeItem = document.createElement("li");
    newGratitudeItem.textContent = gratitudeInput;

//append the list item to the gratitude list//
    const gratitudeList = document.querySelector(".gratitude ul");
    gratitudeList.appendChild(newGratitudeItem);
}