//get the element from the DOM
const quoteText = document.getElementById
    ("quote");
const quoteAuthor = document.
    getElementById("author");
const newQuoteButton = document.
    getElementById("new-quote");
const tweetQuoteButton = document.
    getElementById("tweet-quote");

//Array of the quotes

const quote = [
    {
        text: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        author: "Louis L’Amour"
    },
{
    text: "The first draft is just you telling yourself the story.",
        author: "Terry Pratchett"
},

{
    text: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
        author: "William Faulkner"
},
{
    text: "The only way to do great work is to love what you do",
        author: "Steve Jobs"
},
{
    text: "You can always edit a bad page. You can’t edit a blank page",
        author: "Jodi Picoult"
},
{
    text: "You can’t wait for inspiration. You have to go after it with a club",
        author: "Jack London"
},
{
    text: "I have never started a poem yet whose end I knew. Writing a poem is discovering.",
        author: "Robert Frost"
},
{
    text: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        author: "Toni Morrison"
},
{
    text: "Most writers regard the truth as their most valuable possession, and therefore are most economical in its use.",
        author: "Mark Twain"
}          
];

//generate the random quote

function getRandomQuote(){

    return quote [Math. floor (Math. random()
    *quote.length)];
    }
    
    //Update and Display quote and author
    function displayQuote(){
    const {text, author} = getRandomQuote();
    quoteText. textContent = text;
    quoteAuthor. textContent = author;
    }
    //Tweet the current quote
    
    function tweetQuote(){
    const tweetText = `${quoteText.
    textContent} - ${quoteAuthor.
    textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
    }
    //Event Listener
    newQuoteButton.addEventListener("click",displayQuote);
    tweetQuoteButton.addEventListener("click",tweetQuote);


    // initial quote display
displayQuote();