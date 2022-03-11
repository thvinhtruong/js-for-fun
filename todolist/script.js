const btn = document.querySelector(".btn-submit");
const inputText = document.getElementById("add");

btn.onclick = () => {
    let temp = inputText.value;
    if (temp.length == 0) {
        alert("please fill in the field");
    } else {
        let tag = document.createElement("li");
        let todo = document.createTextNode(temp);
        console.log(inputText.value);
        tag.appendChild(todo);
        let element = document.getElementById("new-todo");
        element.appendChild(tag);

        let b = document.createElement("button");
        b.innerHTML = "delete";
        b.classList.add("btn-delete");
        element.appendChild(b);
        b.addEventListener("click", () => {
            element.removeChild(tag);
            element.removeChild(b);
        })
    }
}