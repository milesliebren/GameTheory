// use ID in DB

function displayInfoRedBlack(){
    let gameName1 = localStorage.getItem("gameName_1");
    let gameDate1 = localStorage.getItem("gameDate_1");
    let playerNum1 = localStorage.getItem("playerNum_1");
    let pairNum1 = localStorage.getItem("pairNum_1");
    let roundNum1 = localStorage.getItem("roundNum_1");

    let blackTotal = localStorage.getItem("blackTotal");
    let blackAverage = localStorage.getItem("blackAverage");
    let redTotal = localStorage.getItem("redTotal");
    let redAverage = localStorage.getItem("redAverage");

    let highestName = localStorage.getItem("highestName");
    let highestScore = localStorage.getItem("highestScore");
    let lowestName = localStorage.getItem("lowestName");
    let lowestScore = localStorage.getItem("lowestScore");

    let highestBlackName = localStorage.getItem("highestBlackName");
    let highestBlackScore = localStorage.getItem("highestBlackScore");
    let lowestBlackName = localStorage.getItem("lowestBlackName");
    let lowestBlackScore = localStorage.getItem("lowestBlackScore");
    let highestRedName = localStorage.getItem("highestRedName");
    let highestRedScore = localStorage.getItem("highestRedScore");
    let lowestRedName = localStorage.getItem("lowestRedName");
    let lowestRedScore = localStorage.getItem("lowestRedScore");

    document.getElementById('studentHeader_1').innerHTML = "Game (" + gameName1 + ")";
    document.getElementById('gameName_1').innerHTML = gameName1;
    document.getElementById('gameDate_1').innerHTML = gameDate1;
    document.getElementById('playerNum_1').innerHTML = playerNum1;
    document.getElementById('pairNum_1').innerHTML = pairNum1;
    document.getElementById('roundNum_1').innerHTML = roundNum1;

    document.getElementById('blackTotal').innerHTML = blackTotal;
    document.getElementById('blackAverage').innerHTML = blackAverage;
    document.getElementById('redTotal').innerHTML = redTotal;
    document.getElementById('redAverage').innerHTML = redAverage;

    document.getElementById('highestName').innerHTML = highestName;
    document.getElementById('highestScore').innerHTML = highestScore;
    document.getElementById('lowestName').innerHTML = lowestName;
    document.getElementById('lowestScore').innerHTML = lowestScore;

    document.getElementById('highestBlackName').innerHTML = highestBlackName;
    document.getElementById('highestBlackScore').innerHTML = highestBlackScore;
    document.getElementById('lowestBlackName').innerHTML = lowestBlackName;
    document.getElementById('lowestBlackScore').innerHTML = lowestBlackScore;
    document.getElementById('highestRedName').innerHTML = highestRedName;
    document.getElementById('highestRedScore').innerHTML = highestRedScore;
    document.getElementById('lowestRedName').innerHTML = lowestRedName;
    document.getElementById('lowestRedScore').innerHTML = lowestRedScore;
}
function displayInfoWheatSteel(){
    let gameName2 = localStorage.getItem("gameName_2");
    let gameDate2 = localStorage.getItem("gameDate_2");
    let playerNum2 = localStorage.getItem("playerNum_2");
    let teamsFour = localStorage.getItem("teamsFour");
    let periodNum = localStorage.getItem("periodNum");

    // set in local storage as one string
        // need to loop through the array to display a space after each name
    let bothGoals = localStorage.getItem("bothGoals");
    for (let i = 0; i < bothGoals.length; i++) {
        if (bothGoals[i] == ","){
            bothGoals = bothGoals.slice(0, (i + 1)) + " " + bothGoals.slice((i + 1));
        }
    }
    let oneGoal = localStorage.getItem("oneGoal");
    for (let i = 0; i < oneGoal.length; i++) {
        if (oneGoal[i] == ","){
            oneGoal = oneGoal.slice(0, (i + 1)) + " " + oneGoal.slice((i + 1));
        }
    }
    let noGoals = localStorage.getItem("noGoals");
    for (let i = 0; i < noGoals.length; i++) {
        if (noGoals[i] == ","){
            noGoals = noGoals.slice(0, (i + 1)) + " " + noGoals.slice((i + 1));
        }
    }

    let wheatProduceTotal = localStorage.getItem("wheatProduceTotal");
    let wheatProduceAverage = localStorage.getItem("wheatProduceAverage");
    let wheatConsumeTotal = localStorage.getItem("wheatConsumeTotal");
    let wheatConsumeAverage = localStorage.getItem("wheatConsumeAverage");
    let wheatTradeTotal = localStorage.getItem("wheatTradeTotal");
    let wheatTradeAverage = localStorage.getItem("wheatTradeAverage");

    let steelProduceTotal = localStorage.getItem("steelProduceTotal");
    let steelProduceAverage = localStorage.getItem("steelProduceAverage");
    let steelConsumeTotal = localStorage.getItem("steelConsumeTotal");
    let steelConsumeAverage = localStorage.getItem("steelConsumeAverage");
    let steelTradeTotal = localStorage.getItem("steelTradeTotal");
    let steelTradeAverage = localStorage.getItem("steelTradeAverage");

    document.getElementById('studentHeader_2').innerHTML = "Game (" + gameName2 + ")";
    document.getElementById('gameName_2').innerHTML = gameName2;
    document.getElementById('gameDate_2').innerHTML = gameDate2;
    document.getElementById('playerNum_2').innerHTML = playerNum2;
    document.getElementById('teamsFour').innerHTML = teamsFour;
    document.getElementById('periodNum').innerHTML = periodNum;

    document.getElementById('bothGoalNames').innerHTML = bothGoals;
    document.getElementById('oneGoalNames').innerHTML = oneGoal;
    document.getElementById('noGoalNames').innerHTML = noGoals;

    document.getElementById('wheatProduceTotal').innerHTML = wheatProduceTotal;
    document.getElementById('wheatProduceAverage').innerHTML = wheatProduceAverage;
    document.getElementById('wheatConsumeTotal').innerHTML = wheatConsumeTotal;
    document.getElementById('wheatConsumeAverage').innerHTML = wheatConsumeAverage;
    document.getElementById('wheatTradeTotal').innerHTML = wheatTradeTotal;
    document.getElementById('wheatTradeAverage').innerHTML = wheatTradeAverage;

    document.getElementById('steelProduceTotal').innerHTML = steelProduceTotal;
    document.getElementById('steelProduceAverage').innerHTML = steelProduceAverage;
    document.getElementById('steelConsumeTotal').innerHTML = steelConsumeTotal;
    document.getElementById('steelConsumeAverage').innerHTML = steelConsumeAverage;
    document.getElementById('steelTradeTotal').innerHTML = steelTradeTotal;
    document.getElementById('steelTradeAverage').innerHTML = steelTradeAverage;
}