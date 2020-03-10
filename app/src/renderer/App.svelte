<script>
    import { Scores } from "../api/scores/";

    let scores = new Scores();
    let today = scores.fetchScores(new Date());
</script>
<h1>This is made by Svelte</h1>
{#await today}
    <p>waiting...</p>
{:then today_games}
    {#each today_games.games as score}
        <p>{score.nugget}</p>
    {/each}
{/await}
