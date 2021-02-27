<script>
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

	console.log(expenses)
</script>

<section>
	<SectionTitle title="expenses list" />

	<ul>
		{#each expenses as expense, index}
			<!-- same as passing down the property and attached click handlet from App to ExpensesList we also need to pass it down one level deeper to the SingleExpense component -->

			<!-- by using createEventDispatcher we can simply forward the event in any components that are
					between the root component and the destination component in the tree

					so we can simply do on:deleteSingleExpense where
					
					deleteSingleExpense

					come from
					
					on:click="{() => dispatch('deleteSingleExpense', { id, name: 'hello from a single expense' })}"
					in SingleExpense.svelte -->

			<SingleExpense index="{index + 1}" {...expense} on:deleteSingleExpense />
		{:else}
			<h2>currently there are no expenses</h2>
		{/each}
	</ul>

	<img src="/images/04_component_communication.png" alt="" />

	<br />
	<br />

	<h1>setContext - getContext</h1>

	<img src="/images/05_setContext_getContext.png" alt="" />

	<br />
	<br />

	<h1>store</h1>

	<img src="/images/06_store.png" alt="" />

	<br />
	<br />

	<h1>no direct communication possible between components</h1>

	<img src="/images/07_no_component_communication_possible.png" alt="" />

	<br />
	<br />

	<h1>component communication over the store</h1>

	<img src="/images/08_component_communication_over_store.png" alt="" />

	<br />
	<br />
</section>
