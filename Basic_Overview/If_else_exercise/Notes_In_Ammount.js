function Notes(Ammount, Notes) {
    if (Notes == 2000 || Notes == 500 || Notes == 100 || Notes == 50 || Notes == 20 || Notes == 10) {
        return Math.floor( Ammount / Notes);
    } else {
        console.log(`${Notes} are not valid denomination`);
    }
}

let AmmountRupees = 2800;
let NotesRupees = 500;

console.log(`Amount = ${AmmountRupees} and Number of Notes is : ${Notes(AmmountRupees, NotesRupees)}`);


// output ==> Amount = 2800 and Number of Notes is : 5