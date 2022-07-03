document.addEventListener("alpine:init", () => {
    Alpine.data ("wordWidget", () => ({  
        sentence: "",
        longWord: "",
        shortWord: "",
        wordLength: "",
        calculate() {

            
            this.longWord = longestWord(this.sentence)
            this.shortWord = shortestWord(this.sentence)
            this.wordLength = wordLengths(this.sentence)


            setTimeout(() => {
                this.sentence = '';
                this.longWord = '';
                this.shortWord = '';
                this.wordLength = '';
            }, 4000);
        }
    }))
})
