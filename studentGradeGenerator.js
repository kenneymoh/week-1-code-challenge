//  Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


function studentGradingGenerator(){
    let grade = prompt('Type here');
 
    // Nested if else
        if (grade  <= 100 && grade >= 79) {
            console.log('A');
        ;}
         if (grade >= 60 && grade <= 78) {
                console. log('B');
            };
        if (grade >= 49 && grade <= 59) {
                    console. log('C');
                }
                else if (grade >= 40 && grade <= 48) {
                        console. log('D');
                    }
                    else if (grade < 39 ){
                        console.log('E')
                    }
                    
    };
studentGradingGenerator()