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
		{/each}
	</ul>
</section>
