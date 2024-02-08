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

    ///div inside li <div class="todo-item"></div>
    const mainWrapper = document.createElement("div");
    mainWrapper.setAttribute("class", "todo-item");

    //div that wraps title and description
    /*
       <div>
          <h4>Hello</h4>
          <p>Description </p>
      </div>
      */
    const titleWrapper = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.innerHTML = todoItem.title;

    const p = document.createElement("p");
    p.innerHTML = todoItem.description;

    titleWrapper.appendChild(h4);
    titleWrapper.appendChild(p);

    /**
       *  <div>
              <button class="button">Complete</button>
              <button class="button bg-red">Delete</button>
          </div>
       */
    const buttonWrapper = document.createElement("div");

    const completeButton = document.createElement("button");
    completeButton.setAttribute("class", "button");
    completeButton.innerHTML = "Complete";

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "button bg-red");
    deleteButton.innerHTML = "Delete";

    buttonWrapper.appendChild(completeButton);
    buttonWrapper.appendChild(deleteButton);

    //add everting to div
    mainWrapper.append(titleWrapper);
    mainWrapper.append(buttonWrapper);

    //add everything to li
    li.appendChild(mainWrapper);

    console.log(li);

    ulList.appendChild(li);


    //clear the form for next todo input
    form["title"].value = ""
    form["description"].value = ""
    form["priority"].value = ""
}