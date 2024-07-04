"use strict";
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 22,
    },
    {
        nome: "Ana",
        cursos: ["Python", "UX/UI"],
        idade: 20,
    }
];
alunos.push({
    nome: "Fred",
    cursos: ["Front-end", "Back-end", "UX/UI"],
    idade: 20
});
const newStudent = {
    nome: "Juca",
    idade: 19
};
alunos.push(newStudent);
const showStudent = () => {
    alunos.forEach(aluno => {
        console.log(`Nome do aluno: ${aluno.nome}`);
    });
};
console.log(showStudent());
