function setLocalStorageItem(todoArray) {
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
}

function getLocalStorageItem() {
    const todoArray = localStorage.getItem("todoArray");
    const parsedTodo = JSON.parse(todoArray);
    return parsedTodo;
}

function mapTodoItem() {
    const arrays = getLocalStorageItem();

    console.log(arrays);

    if (arrays) {
        arrays.forEach((item) => {
            const ulList = document.getElementById("ul-list");

            //li item  <li class="todo"></li>
            const li = document.createElement("li");
            li.setAttribute("class", "todo");

            const liElement = `
            <div class="todo-item">
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.description} </p>
                </div>
                <div>
                    <button class="button">Complete</button>
                    <button class="button bg-red">Delete</button>
                </div>
            </div>
            
            `;

            li.innerHTML = liElement;
            ulList.appendChild(li);
        });
    }
}
mapTodoItem();

getLocalStorageItem();

function submitForm(event) {
    event.preventDefault();

    const form = document.forms["todo-form"];

    const title = form["title"].value;
    const description = form["description"].value;
    const priority = form["priority"].value;

    const todoItem = {
        title: title,
        description: description,
        priority: priority,
    };

    const ulList = document.getElementById("ul-list");

    //li item  <li class="todo"></li>
    const li = document.createElement("li");
    li.setAttribute("class", "todo");

    const liElement = `
        <div class="todo-item">
            <div>
                <h4>${title}</h4>
                <p>${description} </p>
            </div>
            <div>
                <button class="button">Complete</button>
                <button class="button bg-red">Delete</button>
            </div>
        </div>

    `;

    li.innerHTML = liElement;
    ulList.appendChild(li);

    //clear the form for next todo input
    form["title"].value = "";
    form["description"].value = "";
    form["priority"].value = "";


    //save data to storage
    const arrays = getLocalStorageItem();

    let newArray = [];

    if (arrays) {
        newArray = [...arrays, todoItem];
    } else {
        newArray = [todoItem];
    }

    setLocalStorageItem(newArray);
}