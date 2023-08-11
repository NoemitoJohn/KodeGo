// multiTable();
// halfTree();
sentenceChecker();

function multiTable() {

    const number = 8;
    const range = 5;
    let index = 1;

    while (index <= range) {
        const multi = number * index;
        console.log(index + " * " + number + " = " + multi);
        index++;
        
    }
}



function halfTree() {
    
    let height = 10;
    const char = "*";

    for (let index = 1; index <= height; index++) {
        let content = char.repeat(index); 
        document.write("<div>" + content + "</div>");
    }
}


function sentenceChecker(){

    let sentence = "this is as3som3";
    
    let consonants = 0;
    let digit = 0;
    let vowels = 0;
    let spaces = 0;
    // let spaces = words.length - 1;

    for (let i = 0; i < sentence.length; i++) {
        
        const char = sentence[i].toLowerCase();

        if(char >= 'a' && char <= 'z'){
            
            switch(char)
            {
                case 'a':
                case 'e':
                case 'i':
                case 'o':   
                case 'u':
                    vowels++;
                    break;
                default:
                    consonants++
                    break;
                
            }
        }
        else 
        {
            if(char == " ")
                spaces++;
            else
                digit++;
        }        
    }

    console.log("sentence: " + sentence);
    console.log("digit: " + digit);
    console.log("spaces: " + spaces);
    console.log("vowels: " + vowels);
    console.log("consonants: " + consonants);
}





