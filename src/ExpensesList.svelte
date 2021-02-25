<script>
	// components
	import SectionTitle from './Title.svelte'
	import SingleExpense from './SingleExpense.svelte'
	// data
	// this is the property "expenses" of the ExpensesList component
	// we can make this available in App.svelte by exporting it
	// in the case of the tut this variable is set to an empty array
	// export let expenses = []
	// however we can also leave as is with the default value
	// meaning it is already an array of objects as seen in expenses.js
	export let expenses

	console.log(expenses)
	// 0: Object { id: 892813082361.6912, name: "rent", amount: 2300 }
	// ​
	// 1: Object { id: 831137134672.7599, name: "car payment", amount: 400 }
	// ​
	// 2: Object { id: 675227527766.1556, name: "student loan", amount: 400 }
	// ​
	// 3: Object { id: 1162592561934.1555, name: "credit card", amount: 2000 }
</script>

<section>
	<SectionTitle title="expenses list" />

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

	<ul>
		{#each expenses as expense, index}
			<SingleExpense index="{index + 1}" {...expense} />
		{:else}
			<h2>currently there are no expenses</h2>
		{/each}
	</ul>
</section>
