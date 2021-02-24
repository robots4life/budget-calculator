<script>
	// components
	import SectionTitle from './Title.svelte'
	import SingleExpense from './SingleExpense.svelte'
	import App from './App.svelte'
	import Navbar from './Navbar.svelte'
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

	<pre>
	<code>
		{`

Case 1
SingleExpense.svelte
====================

<script>
	export let index
	export let expense
<\/script>

<div>
	<h1>index : {index}</h1>
	<p>id : {expense.id}</p>
	<p>name : {expense.name}</p>
	<p>amount : {expense.amount}</p>
</div>



Case 2
SingleExpense.svelte
====================

<script>
	export let index
	export let expense
	let { id, name, amount } = expense
<\/script>

<div>
	<h1>index : {index}</h1>
	<p>id : {id}</p>
	<p>name : {name}</p>
	<p>amount : {amount}</p>
</div>


Case 3
SingleExpense.svelte
====================

<script>
	export let index
	export let id
	export let name
	export let amount
<\/script>

<div>
	<h1>index : {index}</h1>
	<p>id : {id}</p>
	<p>name : {name}</p>
	<p>amount : {amount}</p>
</div>

ExpensesList.svelte

Note there is NO exported property 'expense' in
SingleExpense.svelte any more
so we CANNOT do

<SingleExpense index="{index + 1}" expense={...expense} />

but HAVE to use the spread operator WITHOUT the property!!

<SingleExpense index="{index + 1}" {...expense} />


`}
	</code>
</pre>

	<hr />
	<hr />

	<ul>
		{#each expenses as expense, index}
			<SingleExpense index="{index + 1}" {...expense} />
		{:else}
			<h2>currently there are no expenses</h2>
		{/each}
	</ul>
</section>
