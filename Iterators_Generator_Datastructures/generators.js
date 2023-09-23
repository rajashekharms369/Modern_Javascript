function* createTeamIterator(teams){
    for(let i=0; i<teams.length; i++){
        yield teams[i];
    }
}

const teams = ['a', 'b', 'c', 'd'];
const iterator =  createTeamIterator(teams);

for(const team of teams){
    console.log(team);
} 