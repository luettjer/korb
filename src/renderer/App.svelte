<script>
    import { Teams } from "../api/";

    let teams = new Teams();
    let teams_data = teams.fetchTeams();
</script>
{#await teams_data}
    <p>waiting...</p>
{:then teams_data}
    {#each teams_data.league.standard as team}
        {#if team.isNBAFranchise}
            <p>{team.fullName}</p>
        {/if}
    {/each}
{/await}
