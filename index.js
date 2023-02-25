
function btn(){
    let joke = [
        
                "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
   
                "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.", 
         
                "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",

                "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
     
                "// This line doesn't actually do anything, but the code stops working when I delete it.",
    
                "Algorithm: A word used by programmers when they don't want to explain how their code works.",
              
                "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
                  
            
         
            ];
    let r =  Math.floor(Math.random() * joke.length );
    
    let b = joke[r];
        document.getElementById('joke').innerHTML  = `<h1>${b}</h1>`;
}