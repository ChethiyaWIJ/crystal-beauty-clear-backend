import Student from "../models/student.js"

export function getAllStudents(req,res){
    Student.find().then(
        (students)=>{
            res.json(students)
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error"
            })
        }
    )
}
export function saveStudent(req,res){
    const student = new Student(req.body)
    student.save().then(
        ()=>{
            res.json({
                message : "Student saved"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error while saving"
            })
        }
    )
}

export function updateStudent(req,res){
    res.json({
        message : "Student updated"
    })
}

export function deleteStudent(req,res){
    res.json({
        message : "Student deleted"
    })
}