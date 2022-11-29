const form = document.querySelector("form")
const list = document.querySelector("ul")
let borderColor = ""
let currentItem


const toggleForm = () => {
    
    if (form.style.display === "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none"
    }

document.querySelector("#saveBtn").style.display = "none"
document.querySelector("#addBtn").style.display = "inline"
}

const addItem = () => {
   const title = document.querySelector("#title").value
   const date = document.querySelector("#date").value
   const status = document.querySelector("#status").value
   
const listItem = document.createElement("li")
listItem.innerHTML = `<h4>${title}</h4> <p>Deadline: ${date}</p>`
listItem.classList.add("todo_item")

switchColor()

listItem.style.borderLeft = `5px solid ${borderColor}`
list.appendChild(listItem)

insertEditbtn(listItem, title, date, status)
insertDeletebtn(listItem)
resetBtn()
}

const insertEditbtn = (listItem, title, date, status) => {
    const editBtn = document.createElement("button")
editBtn.innerHTML = "Edit"

editBtn.addEventListener("click", (e) => {

    currentItem = e.target.parentNode

    form.style.display = "block"
    document.querySelector("#title").value = title
    document.querySelector("#date").value = date
    document.querySelector("#status").value = status
})

document.querySelector("#addBtn").style.display = "none"
document.querySelector("#saveBtn").style.display = "inline"
listItem.appendChild(editBtn)
}


const insertDeletebtn = (listItem) => {
    const deleteBtn = document.createElement("button")
deleteBtn.innerHTML = "Delete"
listItem.appendChild(deleteBtn)
deleteBtn.addEventListener("click", () => {
    listItem.remove()
})
}

const resetBtn = () => {
    form.style.display = "none"
    document.querySelector("#title").value = ""
    document.querySelector("#date").value = ""
    document.querySelector("#status").value = ""
    
}

const onEdit = () => {

    console.log(form.title.value)

    const editedItem = document.createElement("li")
    editedItem.innerHTML = `<h4>${form.title.value}</h4> <p>Deadline: ${form.date.value}</p>`
    editedItem.classList.add("todo_item")

    switchColor()

    editedItem.style.borderLeft = `5px solid ${borderColor}`

    const parent = currentItem.parentNode
    console.log(parent)
    parent.append(editedItem)
    parent.replaceChild(editedItem, currentItem)

    resetBtn()
}

const switchColor = () => {
    const status = document.querySelector("#status").value
    switch (status) {
        case "done":
            borderColor = "green"
            break
        case "in_progress":
            borderColor = "yellow"
            break
        case "not_started":
            borderColor = "red"
            break
        default:
            borderColor = "green"
    }
}
