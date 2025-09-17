export interface question{
    prompt: string,
    answers: string[],
    percentages: number[][], //[answer][percent chance of each thing happening]
    skip: boolean[],
} 