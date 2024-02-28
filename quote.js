const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");
date=document.querySelector(".date");


function randomQuote(){
    try{
        
        
        quoteBtn.classList.add("loading");
        quoteBtn.innerText="loading quote....";
        fetch("https://api.quotable.io/random")
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            quoteText.innerText=result.content;
            
            authorName.innerText=result.author;
            date.innerText=result.dateAdded;
            quoteBtn.innerText="New Quote";
            quoteBtn.classList.remove("loading");
        
        });
    }catch(error){
        console.log.error("error in randomQuot",error);
    };
};
//for sound & speack active function
soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML} writen in date ${date.innerHTML}`);
    speechSynthesis.speak(utterance);
});

//active copy button
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerHTML);
});



//active & work on twitter
twitterBtn.addEventListener("click",()=>{
    let tweeturl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweeturl,"-blank");
}


)


quoteBtn.addEventListener("click",randomQuote);







