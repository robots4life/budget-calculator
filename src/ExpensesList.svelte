<script>
	// lib
	import { getContext } from 'svelte'

	// components
	import SectionTitle from './Title.svelte'
	import SingleExpense from './SingleExpense.svelte'

	// properties
	// this is the property "expenses" of the ExpensesList component
	// we can make this available in App.svelte by exporting it
	// in the case of the tut this variable is set to an empty array
	// export let expenses = []
	// however we can also leave as is with the default value
	// meaning it is already an array of objects as seen in expenses.js
	export let expenses

	console.table(expenses)

	const { deleteAllExpenses } = getContext('state')
</script>

<section>
	<SectionTitle title="expenses list" />

	<ul>
		{#each expenses as expense, expIndex}
			<!-- same as passing down the property and attached click handler from App to ExpensesList we also need to pass it down one level deeper to the SingleExpense component -->
			<SingleExpense expIndex="{expIndex + 1}" {...expense} />
		{:else}
			<h2>currently there are no expenses</h2>
		{/each}
	</ul>

	<button class="btn btn-primary btn-block" on:click="{deleteAllExpenses}"
		>clear all expenses</button
	>
</section>
