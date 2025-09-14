import { question } from "../const/types";

export const endings: Array<string> = [
    "You stepped on a landmine",
    "You were hit by a stray bullet",
    "You were executed for being un-Islamic",
    "You are a social outcast"
]

export const questions: Array<question> = [
    {
        prompt: "Do you have a disability?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 40, 70], [5, 10, 0, 0]]
    },
    {
        prompt: "Do you listen to music on a radio?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 40, 70], [5, 10, 0, 0]]    
    },
    {
        prompt: "Are you muslim?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 0, 0], [5, 10, 60, 80]]    
    },
    {
        prompt: "What branch of Islam do you practice?",
        answers: ["Sunni", "Shia"],
        percentages: [[5, 10, 0, 0], [5, 10, 20, 60]]    
    },
    {
        prompt: "What gender are you?",
        answers: ["Male", "Female", "Other"],
        percentages: [[5, 10, 0, 0], [5, 10, 0, 0], [5, 10, 40, 80]]    
    },
    {
        prompt: "Are you married?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 0, 0], [5, 10, 0, 0]]    
    },
    {
        prompt: "Do you have children?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 0, 0], [5, 10, 0, 0]]    
    },
    {
        prompt: "Do you have a beard?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 0, 0], [5, 10, 50, 70]]    
    },

] 

