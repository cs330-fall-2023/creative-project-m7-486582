import { PoemType } from "../types/PoemTypes"

const welcomePoem: PoemType = [

    // Title stanza
    {
        text: "Welcome",
        isTitle: true,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "by Katherine Han",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },

    // Poem body
    {
        text: "Mix and match lines of poetry",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: true
    },
    {
        text: "written by me and my dear friends",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "RuthAnne Dunn and Flo Lee",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "and enjoy the music and art",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "done by yours truly",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },

    // Link stanza
    {
        text: "click here to start",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false
    }
]
 
export { welcomePoem }