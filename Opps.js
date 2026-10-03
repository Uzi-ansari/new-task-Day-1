 let num = document.querySelector("#num")
  let nameInput = document.querySelector("#name")
  let allContainer = document.querySelector("#all_students_container")
  
  let arr = []
  let St_name = ""
  let St_age = ""

  document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault()

    if(St_name && St_age){
      
      class Student {
        constructor(name , age){
          this.StudentName = name,
          this.StudentAge = age
        }
      }

      let newStudent = new Student(St_name , St_age)
      arr.push(newStudent)
      console.log(arr);

      renderCards()

      document.querySelector("#form").reset()
      St_name = ""
      St_age = ""
      
    }else{
      alert("Please Enter the Validations")
    }
  })

  function renderCards(){
    allContainer.innerHTML = ""
    arr.map((student)=>{
      allContainer.innerHTML += `
        <div class="student-card">
          <h3>Student Name:</h3>
          <p>${student.StudentName}</p>
          <h3>Student Age:</h3>
          <p>${student.StudentAge}</p>
        </div>
      `
    })
  }

  nameInput.addEventListener("input",(e)=>{
    St_name = e.target.value
  })

  num.addEventListener("input",(e)=>{
    St_age = e.target.value
  })