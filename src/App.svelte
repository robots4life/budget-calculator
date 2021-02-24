<script>
	// components
	import Navbar from './Navbar.svelte'
	// when we import the ExpensesList the property "expenses" in it is also importet as part of the component
	import ExpensesList from './ExpensesList.svelte'

	// data
	import expensesData from './expenses'
	// we define the variable for the expenses data and can name it anything
	// in this case it is named the same as the property "expenses" of the ExpensesList component
	let expenses = [...expensesData]
</script>

<Navbar />
<main class="content">
	<!-- here we are passing down / assigning the expeneses data in the let expenses variable to the property "expenses" from the ExpensesList component -->
	<ExpensesList expenses="{expenses}" />
</main>
