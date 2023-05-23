const input = document.querySelector('.input');

const output = document.querySelector('.output');
const output2 =  document.querySelector('.output-2');


const button = document.querySelector('.button')
const deleteAll = document.querySelector('.button_del');
const markAll = document.querySelector('.button_mark');
const finished = document.querySelector('.counter-finished');
const unfinished = document.querySelector('.counter-unfinished');

finished.innerHTML = 0
let finishedInner = finished.innerHTML
unfinished.innerHTML = 0
let unfinishedInner = unfinished.innerHTML


//for enter click
document.addEventListener('keydown', (event) => {
  
    if(event.code == "Enter") {

    const inputVal = input.value; 

    //creating tasks
        if(inputVal) {
            let task = input.value;


            var newTask = document.createElement("div");
                var taskInput = document.createElement("input");
                newTask.classList.add('newTask');

                taskInput.setAttribute("type", "checkbox");
                taskInput.setAttribute("name", "chk"); 

                var taskLabel = document.createElement("label"); 
                var taskLabelText = document.createTextNode(' '+ task);
                taskLabel.appendChild(taskLabelText)
                
            newTask.appendChild(taskInput);
            newTask.appendChild(taskLabel);


            output.appendChild(newTask);
        }


    //counter for unfinished tasks 
        const count = taskInput.checked
        if(count == false) {
            unfinished.innerHTML = Number(unfinished.innerHTML) + 1
            
        }

    //mark particular task
        taskInput.onclick = function(event) {
            
            const isCheck = taskInput.checked;
            if(isCheck == true) {
                output2.appendChild(newTask)
                taskLabel.style.textDecoration ="line-through";

                //counter for finished tasks
                finished.innerHTML = Number(finished.innerHTML) + 1
                unfinished.innerHTML = Number(unfinished.innerHTML) - 1
            }
            else if(isCheck != true){
                output.appendChild(newTask)
                //counter for unfinished tasks part 2
                taskLabel.style.textDecoration ="none" 
                unfinished.innerHTML = Number(unfinished.innerHTML) + 1
                finished.innerHTML = Number(finished.innerHTML) - 1
            }


            
        }

    //deleteing particular tasks
        taskLabel.onclick = (event) => {
            newTask.remove();

            //delete tasks from the counter
            const countDel = taskInput.checked; 

            if(countDel == true) {
            finished.innerHTML = Number(finished.innerHTML) - 1
            }

            else {
            unfinished.innerHTML = Number(unfinished.innerHTML) - 1 
            }
        }

    //delete all tasks
        deleteAll.addEventListener('click', (event) => {
            newTask.remove(); 
            
            //reset the counter
            finished.innerHTML = 0
            unfinished.innerHTML = 0
        })
    
   
    //mark all tasks
        markAll.addEventListener('click', (event) => {
            output.removeChild(newTask)
            output2.appendChild(newTask);
            

            var checkboxes = document.getElementsByName('chk'); 
            for(let i = 0; i<checkboxes.length; i++) {
                if(checkboxes[i].type == 'checkbox') {
                    checkboxes[i].checked = true;
                    taskLabel.style.textDecoration = "line-through";
                }
            
            }
                //counter for all finished tasks
                finished.innerHTML = checkboxes.length  
                unfinished.innerHTML = checkboxes.length - checkboxes.length
              
        })

    //unmark all tasks 
        markAll.addEventListener('dblclick', (event) => {
            output2.removeChild(newTask)
            output.appendChild(newTask);
        

            var checkboxes = document.getElementsByName('chk'); 
             for(let i = 0; i<checkboxes.length; i++) {
                if(checkboxes[i].type == 'checkbox') {
                    checkboxes[i].checked = false; 
                    taskLabel.style.textDecoration ="none";
                }
            }
                //counter for all unfinished tasks
                unfinished.innerHTML = checkboxes.length  
                finished.innerHTML = checkboxes.length - checkboxes.length
            
        })
 
    

   input.value = '';
   
}

})


//for button click 
button.addEventListener('click', () => {
  
    const inputVal = input.value; 

    //creating tasks
    if(inputVal) {
        let task = input.value;


        var newTask = document.createElement("div");
            var taskInput = document.createElement("input");
            newTask.classList.add('newTask');

            taskInput.setAttribute("type", "checkbox");
            taskInput.setAttribute("name", "chk"); 

            var taskLabel = document.createElement("label"); 
            var taskLabelText = document.createTextNode(' '+ task);
            taskLabel.appendChild(taskLabelText)
            
        newTask.appendChild(taskInput);
        newTask.appendChild(taskLabel);


        output.appendChild(newTask);

       
        //mark particular tasks

        //counter for unfinished tasks 
        const count = taskInput.checked
        if(count == false) {
            unfinished.innerHTML = Number(unfinished.innerHTML) + 1
            
        }

       
        taskInput.onclick = function(event) {
            
            const isCheck = taskInput.checked;

            if(isCheck == true) {
                taskLabel.style.textDecoration ="line-through";  
                
                //counter for finished tasks
                finished.innerHTML = Number(finished.innerHTML) + 1
                unfinished.innerHTML = Number(unfinished.innerHTML) - 1
            }
            else if(isCheck != true){
                //counter for unfinished tasks part 2
                taskLabel.style.textDecoration ="none" 
                unfinished.innerHTML = Number(unfinished.innerHTML) + 1
                finished.innerHTML = Number(finished.innerHTML) - 1
                
            }
            
        }

        //deleteing particular tasks
        taskLabel.onclick = (event) => {
            newTask.remove();

            //delete tasks from the counter
            const countDel = taskInput.checked; 

            if(countDel == true) {
            finished.innerHTML = Number(finished.innerHTML) - 1
            }

            else {
            unfinished.innerHTML = Number(unfinished.innerHTML) - 1 
            }
        }

        //delete all tasks
        deleteAll.addEventListener('click', (event) => {
            newTask.remove(); 
            //reset the counter
            finished.innerHTML = 0
            unfinished.innerHTML = 0
        })
    
        //mark all tasks
        markAll.addEventListener('click', (event) => {
            var checkboxes = document.getElementsByName('chk'); 

            for(let i = 0; i<checkboxes.length; i++) {
                if(checkboxes[i].type == 'checkbox') {
                    checkboxes[i].checked = true;
                    taskLabel.style.textDecoration = "line-through";
                }
            
            }
                //counter for all finished tasks
                finished.innerHTML = checkboxes.length  
                unfinished.innerHTML = checkboxes.length - checkboxes.length 
            
        })
        //unmark all tasks 
        markAll.addEventListener('dblclick', (event) => {
            var checkboxes = document.getElementsByName('chk'); 

             for(let i = 0; i<checkboxes.length; i++) {
                if(checkboxes[i].type == 'checkbox') {
                    checkboxes[i].checked = false; 
                    taskLabel.style.textDecoration ="none";
                }
            }
                //counter for all unfinished tasks
                unfinished.innerHTML = checkboxes.length  
                finished.innerHTML = checkboxes.length - checkboxes.length
            
        })        
   }   

   input.value = '';

})



















