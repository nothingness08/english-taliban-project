import { question } from "../const/types";

export const endings: Array<string> = [
    "You stepped on a landmine",
    "You were hit by a stray bullet",
    "You were executed for reisisting The Taliban",
    "You are a social outcast",
    "You joined The Taliban"
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
        answers: ["Sunni", "Shi' a"],
        percentages: [[5, 10, 0, 0], [5, 10, 20, 60]]    
    },
    {
        prompt: "What gender are you?",
        answers: ["Male", "Female", "Other"],
        percentages: [[5, 10, 0, 0], [5, 10, 0, 0], [5, 10, 30, 80]]    
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

export const gameExplanation: string = `This game demonstrates the unpredictability of living under the Taliban; because of the constant violence, there is always a chance that you will be hit by a stray bullet or step on a landmine. 
When you believe or say things that do not conform to The Taliban’s beliefs, there is a possibility of a violent retaliation or being shunned by society. 
If you conform to The Taliban’s way of life, while you may not contribute to the violence directly, you become a part of the system of opression.`;

