<script>
    import Teams from "../../data/teams";

    let teams = Teams.allTeams();
    console.log(teams);
</script>
{#await teams}
    <p>waiting...</p>
{:then teams}
    <ul>
    {#each teams as team}
        {console.log(team)}
        {#if team.isNBAFranchise}
            <li>{team.fullName}</li>
        {/if}
    {/each}
    </ul>
{/await}
