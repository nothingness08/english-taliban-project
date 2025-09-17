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
        percentages: [[5, 10, 40, 70], [5, 10, 0, 0]],
        skip: [false, false],
    },
    {
        prompt: "Do you listen to music on a radio?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 40, 70], [5, 10, 0, 0]],
        skip: [false, false],
    },
    {
        prompt: "Are you muslim?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 0, 0], [5, 10, 40, 70]],
        skip: [false, true],
    },
    {
        prompt: "What branch of Islam do you practice?",
        answers: ["Sunni", "Shi' a"],
        percentages: [[5, 10, 0, 0], [5, 10, 20, 60]],
        skip: [false, false],    
    },
    {
        prompt: "What gender are you?",
        answers: ["Male", "Female", "Other"],
        percentages: [[5, 10, 0, 0], [5, 10, 0, 0], [5, 10, 30, 80]],
        skip: [false, true, true],    
    },
    {
        prompt: "Do you have a beard?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 0, 0], [5, 10, 40, 70]],
        skip: [false, false],    
    },
    {
        prompt: "Are you married?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 0, 0], [5, 10, 0, 0]],
        skip: [false, false],    
    },
    {
        prompt: "Do you have children?",
        answers: ["Yes", "No"],
        percentages: [[5, 10, 0, 0], [5, 10, 0, 0]],
        skip: [false, false],    
    },
    

] 

export const gameExplanation: string = `This game demonstrates the unpredictability of living under the Taliban, because of the constant violence, there is always a chance that you will be hit by a stray bullet or step on a landmine. 
When you believe or say things that do not conform to the Taliban’s beliefs, there is a possibility of violent retaliation or being shunned by society. 
If you conform to the Taliban’s way of life, while you may not contribute to the violence directly, by being a bystander, you indirectly enable and legitimize their control, in a sense, “joining the Taliban”. `;

export const homeSummary: string = `For our project, we researched the history of the Taliban in Afghanistan, the importance of the Taliban in Kite Runner, and current events relating to the Taliban. 
For our interactive element, we made a simulation to see how well you would fare under the Taliban.`;

export const currentEvents: Array<string> = [
    `In 2021, after the U.S. withdrawal from Afghanistan, the Taliban quickly retook the country from the central government. 
    Despite early promises to respect freedoms and democratic ideals, they reestablished strict rules, controlling women’s ability to attend school, work, and speak. 
    They maintain control by ruling with fear, making public examples of people who resist with executions, amputations, and floggings.`,

    `This turmoil and uncertainty led to a large humanitarian crisis where, in March 2022, 95 percent of Afghan households did not have enough to eat. 
    In response, the UN deployed support for “8.2 million people [in the form of] life-saving and life-sustaining food assistance”. 
    This has been worsened by Global Warming, which contributes to stronger and more frequent natural disasters and more extreme weather that destroys crops. `,

    `Additionally, the economy in Afghanistan under the Taliban is on the verge of collapse. Without a central government, banks have no backing or support, leading to less money flow and a slower economy. 
    Inflation is also rising, decreasing the spending power of average citizens. 
    Because of the Taliban’s violent and radical nature, many countries have imposed sanctions on Afghanistan and not recognized it formally as a nation; 
    this makes it impossible to trade or receive financial relief, further crippling the economy.`
]

export const history: Array<string> = [
    `The Taliban is a conservative Sunni Islamist faction in Afghanistan. It was formed in the mid-1990s by religious students who wanted to get rid of the corruption and improve the country. 
    After the Afghan War (1978-1992) the new government was unable to establish complete control, leading to fighting between different factions vying for control of the country. 
    They managed to take power from the other groups that were fighting for dominance and solidified power by 1996. 
    They established a strict regime for many years, closely guided by the Quran.`,

    `The Taliban’s relations with al-Qaeda led them to shelter Osama Bin Laden after the 9/11 attacks on the U.S. This led to the U.S. and NATO attacking Afghanistan. 
    The alliance helped support the Northern Alliance, which was a group of anti-Taliban factions in Afghanistan who had already been fighting against the Taliban. 
    The Northern Alliance eventually was able to take control of the country by December 2001.`,

    `While the Taliban had been removed from power, they were still present and were fighting against the U.S. during the Afghanistan War (2001-2014). 
    In 2021, after finally coming to an agreement, the U.S. withdrew its troops, and within months the Taliban had retaken the country and toppled the central government, once again coming to power in Afghanistan.`
]

export const kiteRunner: Array<string> = [
    `When Amir returns to Afghanistan, Rahim Khan explains to him the extreme violence that took place in Kabul under the Northern Alliance (an anti-Taliban military group backed by the US, Iran, India, and Russia) from 1992-1996. 
    So, when the Taliban arrived, Rahim Khan and many others celebrated them, hoping for peace and safety. 
    However, it soon became apparent that the Taliban was just as extreme and violent. 
    In Hassan’s letter to Amir, he describes the Taliban as “savages who rule [without] human decency” and daily life in Kabul as fearful and riddled with killings.`,
    
    `When Rahim Khan left Kabul and Hassan and his family were staying in the house alone, members of the Taliban confronted Hassan and ordered him out of the house. 
    When Hassan protested, he and his wife were shot. 
    Because of the fear of the Taliban and Hassan being Hazara, no one stood up to the Taliban members who claimed they had acted in self-defence.`,

    `When Amir returns to Kabul, a Taliban vehicle passes by him, and a beggar describes them as a pack of dogs, waiting to be provoked so that they can lash out with violence, and when nobody offends them, they resort to random acts of violence. 
    When Amir tries to retrieve Sohrab, Hassan’s son, he encounters his childhood bully, Assef, who joined the Taliban, and has to fight him to gain his freedom.`,
]

