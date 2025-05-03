import express from "express";
import { deleteStudent, getAllStudents, saveStudent, updateStudent } from "../controllers/studentController.js";

const studentRouter = new express.Router();

studentRouter.get("/",getAllStudents)

studentRouter.post("/",saveStudent)

studentRouter.put("/",updateStudent)

studentRouter.delete("/",deleteStudent)

export default studentRouter;

/*
app.get("/",
    (req,res)=>{
        Student.find().then(
                (students)=>{
                    res.json(students)
                }
            ).catch(
                ()=>{
                    res.json({
                        message : "An error occured"
                    })
                }
            )
        }
    ) 
app.post("/",
    (req,res)=>{
        const student = new Student(req.body);

        student.save().then(
            ()=>{
                res.json({
                    message : "Student saved successfully"
                })
            }
        ).catch(
            ()=>{
                res.json({
                    message : "Student save failed"
                })
            }
        )
        
    }
)

app.delete("/",(req,res)=>{
        console.log("Delete request recived")
        console.log(req.body)
        res.json({
            message:"Hello World DELETE"
        })
    }
)
app.put("/",(req,res)=>{
        console.log("Put request recived")
        console.log(req.body)
        res.json({
            message : "Hello World PUT"
        })
    }
)
*/