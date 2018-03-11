function populationGrowth (simulationLength) {
    
    var ans = ['a'];
    var babies = 0;

    for(var i=1; i<=simulationLength;i++){
        for(var j=0; j<ans.length;j++){
            if(ans[j] == 'a'){
                ans[j] = 'A';
            }
            else if(ans[j] == 'A'){
                babies++;
            } 
        }
        while(babies > 0){
            ans.push('a');
            babies--;
        }  
    }
    return ans.length;
}

console.log(populationGrowth(1));
console.log(populationGrowth(2));
console.log(populationGrowth(3));
console.log(populationGrowth(4));
console.log(populationGrowth(5));