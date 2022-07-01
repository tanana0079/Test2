var Test = create_random_string(4);
const readline = require('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
console.log(Test)
r1.question('Enter your alphabet',function(name) {
    var Check = check_random_string(name);
    var RCheck = rcheck_random_string(name);
    console.log("Answer is " + Test);
    console.log("Correct position is " + Check);
    console.log("Correct alphabet is " + RCheck);
    
    r1.close;
}
)

r1.on("close", function() {process.exit(0)});

function create_random_string(string_length){
    var random_string = '';
    var characters = 'ABCDEFG';
    for (var i, i = 0; i < string_length; i++){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    };
    return random_string;
}

function check_random_string(name){
    var count = 0;
    for (var i, i = 0; i < 4; i++){
        if(name[i] == Test[i]){
            count = count + 1;
        }
    };
    return count;
}

function rcheck_random_string(name){
    var count = 0;
    for (var i, i = 0; i < 4; i++){
        for(var j, j = 0; j < 4; j++){
            if(name[j] == Test[i]){
                count = count + 1;
                break;
            }
        };
    };
    return count;
}

