//@ts-noCheck
module.exports = Phrase;

//Add `reverse` to all strings.

String.prototype.reverse = function reverse(){
    return Array.from(this).reverse().join("");
};

//Defines a Prase object.
function Phrase(content){
    this.content = content;
    
    //Return content processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    }

    //Returns the letters in the content.
    //for example:
    //new Phrase("Hello, world").letters() === "Helloworld"
    this.letters = function letter(){
        let theLetters = [];
        for(let i = 0; i < this.content.length; i++){
            if(this.content.charAt(i).match(/[a-zA-Z]/)){
                theLetters.push(this.content.charAt(i))
            }
        }
        return theLetters.join("");
    }


    //Return true for a palindrome, false otherwise
    this.palindrome = function palindrome(){
    return this.processedContent() === this.processedContent().reverse();
    }
}

