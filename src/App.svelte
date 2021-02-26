<script>
	// lib
	// here we import setContext from Svelte and define
	// a name and function for it so that it can use i.e.
	// the removeSingleExpense() function inside
	// the SingleExpense.svelte compontent SKIPPING the
	// middle component ExpensesList.Ssvelte
	import { setContext } from 'svelte'

	// components
	import Navbar from './Navbar.svelte'
	// when we import the ExpensesList the property "expenses" in it is also importet as part of the component
	import ExpensesList from './ExpensesList.svelte'

	// data
	import expensesData from './expenses'
	// we define the variable for the expenses data and can name it anything
	// in this case it is named the same as the property "expenses" of the ExpensesList component
	let expenses = [...expensesData]

	// functions
	function removeSingleExpense(id) {
		// we use the filter method to create a new array without
		// the array item with the particular id

		// in the filter method we get a callback function as argument
		// inside that callback function we get a parameter and can
		// access each and every item in the array

		// if the id of the item in the array MATCHES the id as argument of the removeSingleExpense function, so the id we are passing in, it will NOT be in the new array

		// if the id we are passing is NOT the idem.id of any of the array items it will be in the new array
		expenses = expenses.filter((item) => item.id !== id)
	}
	// context
	// here we define the context for the removeSingleExpense() function
	setContext('removeSingleExpense', removeSingleExpense)
</script>

<Navbar />
<main class="content">
	<!-- here we are passing down / assigning the expeneses data in the let expenses variable to the property "expenses" from the ExpensesList component -->

	<!-- here we are passing down the removeSingleExpense(id) function to ExpensesList.svelte with a property called  "removeSingleExpense"
	that means we also have to create the property as export let removeSingleExpense inside the ExpensesList.svelte component -->
	<ExpensesList expenses="{expenses}" />
</main>
