<script>
    import teams from "../../data/teams";

    let teamsData = teams.allTeams();
</script>
{#await teamsData}
    <p>waiting...</p>
{:then teamsData}
    <ul>
    {#each teamsData.teams as team}
        {#if team.isNBAFranchise}
            <li>{team.fullName}</li>
        {/if}
    {/each}
    </ul>
{/await}
