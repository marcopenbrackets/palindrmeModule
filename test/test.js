//@ts-noCheck
let asset = require("assert");
const { assert } = require("console");
const { parse } = require("path");
const { isTypedArray } = require("util/types");
let Phrase = require("../index.js");

describe("Phrase", function(){
    //Phras#palindrome
    describe("#palindrome",function(){
        it("should return false for a non-palindrome", function(){
            let nonPalindrome = new Phrase("apple");
            assert(!nonPalindrome.palindrome());
        });

        it("should return true for a plain palindrome", function(){
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("should return true for a mixed-case palindrome", function(){
            let mixedCase = new Phrase("RaceCar");
            assert(mixedCase.palindrome());
        });

        it("should return true for palindrome with punctuation", function(){
            let punctuatedPalindrome = new Phrase("Madam, I'M Adam");
            assert(punctuatedPalindrome.palindrome());
        });

        describe("#letter", function(){
            it("Should return only letters", function(){
                let punctuatedPalindrome = new Phrase("Madam, I'M Adam");
                assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam")   
            })
        });
        it("should return the empty string on no match", function(){
            let noLetters = new Phrase("1234.56");
            assert.strictEqual(noLetters.letters(), "");
        })
    });
});