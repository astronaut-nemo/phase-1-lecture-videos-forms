document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        buildToDo(e.target.new_todo.value)
        form.reset();
    })
})

function buildToDo(todo){
    // Create an element
    let p = document.createElement('p');
    let button = document.createElement('button');
    // Add event listener to the button
    button.addEventListener('click', handleDelete)

    // Assign it a value and change its attributes (if necessary)
    p.textContent = `${todo}  `;
    button.textContent = 'X';
    
    // Append to the DOM; specifically, the #todo_container <div>
    p.appendChild(button);
    document.querySelector('#todo_container').appendChild(p);
}

function handleDelete(e){
    e.target.parentNode.remove();

}