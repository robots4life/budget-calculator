<script>
	// components
	import SectionTitle from './Title.svelte'
	import SingleExpense from './SingleExpense.svelte'
	// data
	// this is the property "expenses" of the ExpensesList component
	// we can make this available in App.svelte by exporting it
	export let expenses = []
</script>

<section>
	<SectionTitle title="expenses list" />
	<ul>
		{#each expenses as expense}
			<SingleExpense />
			<!-- at the beginning there are no expenses in the budget calculator -->
			<!-- so we use the {#else} block to display something before the first expense is added to the budget calculator -->
		{:else}
			<h2>currently there are no expenses</h2>
		{/each}
	</ul>
</section>
