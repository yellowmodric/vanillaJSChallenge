const quotes = [
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up",
        author: "Thomas A. Edison"
    },
    {
        quote: "Never lose sight of the face that the most important yard stick to your success is how you treat other people",
        author: "Barbara Bush"
    },
    {
        quote: "I don't go by the rule book… I lead from the heart, not the head",
        author: "Princess Diana"
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top",
        author: "Maxime Lagace"
    },
    {
        quote: "If you spend too much time thinking about a thing, you'll never get it done",
        author: "Bruce Lee"
    },
    {
        quote: "Life can only be understood backwards, but it must be lived forwards",
        author: "Soren Kierkegaard"
    },
    {
        quote: "Despite the forecast, live like it's spring",
        author: "Lilly Pulitzer"
    },
    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney"
    },
    {
        quote: "If you really look closely, most overnight successes took a long time",
        author: "Steve Jobs"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have",
        author: "Thomas Jefferson"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;