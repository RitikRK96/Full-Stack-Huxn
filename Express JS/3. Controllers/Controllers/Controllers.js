import express from 'express';

const allStudents = (req, res) => {
    res.send("All students")
}

const createStudent = (req, res) => {
    res.send("Create a student")
}

const updateStudent = (req, res) => {
    res.send("Update a student")
}

const deleteStudent = (req, res) => {
    res.send("Delete a student")
}

export { allStudents, createStudent, updateStudent, deleteStudent }