<script>
	// components
	import SectionTitle from './Title.svelte'
	import SingleExpense from './SingleExpense.svelte'
	// data
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
