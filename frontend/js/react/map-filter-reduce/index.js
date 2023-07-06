import emojipedia from "./emojipedia";

const meaningList = emojipedia.map(function(emojiEntry) {
    return emojiEntry.meaning.substring(0,100)
})

console.log(meaningList)