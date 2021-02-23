<script>
	import Navbar from './Navbar.svelte'
	import expensesData from './expenses'
	let expenses = [...expensesData]
</script>

<Navbar />
<!-- {#each Object.entries(expenses) as [item.id, item.name, item.amount]}
	console.log({(item.id, item.name, item.amount)})
{/each} -->

{#each expenses as item, id}
	@{@debug item, id}
	<p>{item.id} : {item.name} : {item.amount}</p>
{/each}

<style>
	p {
		font-size: 2rem;
	}
</style>
