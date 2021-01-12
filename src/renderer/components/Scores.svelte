<script>
    import Scores from "../../data/scores";

    let d = new Date("2020-01-17");
    let scoresData = Scores.getScores(d);

    function previousDay() {
        d.setDate(d.getDate() - 1);
        scores();
    }

    function nextDay() {
        d.setDate(d.getDate() + 1);
        scores();
    }

    function scores() {
        scoresData = Scores.getScores(d);
    }
</script>
<button on:click={ previousDay }>&lt;</button>
<button on:click={ nextDay }>&gt;</button>
{ #await scoresData }
    <p>waiting</p>
{ :then scoresData }
    <p>{ d.toISOString() }</p>
    { #each scoresData.games as score }
        <div class="score-container">
            <div class="score-team-container">
                { score.vTeam.triCode } 
            </div>
            <div class="score-team-score-container">
                { score.vTeam.score }
            </div>
            <div class="score-team-score-container">
                { score.hTeam.score }
            </div>
            <div class="score-team-container">
                { score.hTeam.triCode } 
            </div>
        </div>
    { /each }
{ /await }
