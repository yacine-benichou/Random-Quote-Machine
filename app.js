const QUOTES = [
    {quote: "Freedom is something that you need to actively acquire. It's not something that's given with no strings attached. To be free means to take responsibility, and to prepare yourself for what's to come.", origin: 'Charles Beams, Eureka Seven' },
    {quote: "All we can do is live until the day we die. Control what we can...and fly free!", origin: "Deneil Young, Uchuu Kyoudai"}, 
    {quote: "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.", origin: "Gildarts Clive, Fairy Tail"},
    {quote: "The country? The skies? You can have them. I’m busy just protecting what’s right in front of me. I don’t know what’ll happen to me in the future, but if something has fallen at my feet, then the least I can do is pick it up.", origin: "Gintoki Sakata, Gintama"},
    {quote: "When do you think people die? When they are shot through the heart by the bullet of a pistol? No. When they are ravaged by an incurable disease? No. When they drink a soup made from a poisonous mushroom!? No! It’s when they are forgotten.", origin: "Hiluluk, One Piece"},
    {quote: "In order for a mediocre man to defeat a genius, he has to become a monster.", origin: "Ikki Kurogane, Rakudai Kishi no Cavalry"},
    {quote: "If you simply obey orders without question to protect your master, that isn't your greatest wish, but your greatest tragedy.", origin: "Jae-ha, Akatsuki no Yona"},
    {quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace. I am protector of the innocent. I am the light in the darkness. I am truth. Ally to good! Nightmare to you!", origin: "Son Gokuu, Dragon Ball Z"},
    {quote: "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.", origin: "Uzumaki Naruto, Naruto"},
    {quote: "If you win, you live. If you lose, you die. If you don’t fight, you can’t win!", origin: "Eren Yaeger, Shingeki no Kyoujin"},
    {quote: "Don't give up, there's no shame in falling down ! True shame is to not stand up again !", origin: "Shintaro Midorima, kuroko no basket"},
    {quote: "Stand up! lift your faces! Take up your weapons! Look at that boy. He's so weak and fragile a breath could blow him away and he's unarmed! He is a powerless boy, whose defeat I have seen with my own eyes! He's weaker than anyone else here! Yet he's shouting louder than anyone that we can still do this so how can we sit down, with downcast gaze? If our weakest man has not given up how is kneeling in defeat acceptable for us? Did you come this far to wallow in shame?", origin: "Crusch Karsten, Re:Zero kara hajimeru isekai seikatsu"},
    {quote: "The scars that you can't see are the hardest to heal", origin: "Nao Tomori, Charlotte"},
]; // list of quotes that i will use for the quote machine 

const Quotes_test = [...QUOTES]; // create a copy of QUOTES for the function below

function getRandomQuotes() { // pick a random quote + origin in the array QUOTES while avoiding repetitions;
    let test = Quotes_test[Math.floor(Math.random() * Quotes_test.length)];
    let x = Quotes_test.indexOf(test);
    Quotes_test.splice(x,1);
    return test;
}

let currentQuote = ''; // store the current quote 
let currentOrigin = ''; // store the current origin of the quote

function getQuote() {
    let randomQuote = getRandomQuotes();
    let currentQuote = randomQuote.quote;
    let currentOrigin = randomQuote.origin;

    $("#text-box").animate( // change the quote when the function getQuote() is called 
        {opacity: 0}, 
        500,
        function() {
            $(this).animate(
                {opacity: 1},
                500
            );
            $("#text").text(currentQuote);
        }
    );

    $("#author-box").animate( // change the origin of the quote when the function getQuote() is called 
        {opacity: 0}, 
        500,
        function() {
            $(this).animate(
                {opacity: 1},
                500
            );
            $("#author").text(currentOrigin); 
        }
    );
}
$(document).ready(getQuote);
$("#new-quote").click(getQuote); // onclick event to get a new quote when i click on the button New quote




