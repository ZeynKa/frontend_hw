var input = document.querySelector('#input')
var createButton = document.querySelector('#create_button')
var todolist = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return alert('пусто')
    }

    var div = document.createElement('div')
    var text = document.createElement('h3')
    div.setAttribute('class', 'block_text')

    var editButton = document.createElement("button");
    editButton.classList.add("edit_button");
    editButton.innerText = "edit"

    editButton.addEventListener("click", function (){
        var newText = prompt('введите новый текст', )

        if (newText !== null) {
            var trimmedText = newText.trim();

            if (trimmedText !== "") {
                div.innerText = trimmedText
            } else {
                alert('error')
            }
        }
    });

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {

        div.remove();
        deleteButton.remove()
        editButton.remove()
    });



    todolist.append(div)
    div.innerText = input.value
    input.value = ''
    todolist.appendChild(deleteButton)
    todolist.appendChild(editButton)

}


createButton.onclick = () => createTodo()