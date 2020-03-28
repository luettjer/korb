<script>
    import Scores from "../../data/scores";
    import Teams from "../../data/teams";

    let d = new Date();
    function previousDate() {
        $: d.setDate(d.getDate() - 1);
    }

    let teams = Teams.allTeams(); 
    let scoresData = Scores.getScores(d);
    console.log(scoresData);
</script>
<button on:click={previousDate}>&lt;</button>
{#await scoresData}
    <p>waiting</p>
{:then scoresData}
    {#each scoresData.games as score}
        <div class="score-container">
            {score.vTeam.triCode} [{score.vTeam.score}]
            vs. 
            [{score.hTeam.score}] {score.hTeam.triCode} 
        </div>
    {/each}
{/await}
