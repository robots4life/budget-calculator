<script>
	// lib
	// here we import setContext from Svelte and define
	// a name and function for it so that it can use i.e.
	// the removeSingleExpense() function inside
	// the SingleExpense.svelte component SKIPPING the
	// middle component ExpensesList.Svelte
	import { setContext } from 'svelte'

	// components
	import Navbar from './Navbar.svelte'
	// when we import the ExpensesList the property "expenses" in it is also imported as part of the component
	import ExpensesList from './ExpensesList.svelte'

	// to work the the total amount of all expenses as well as the number of expenses
	// we import the ExpensesTotal.svelte component
	import TotalExpenses from './TotalExpenses.svelte'

	// have the ability to enter a new expense or edit an existing expense we
	// make an ExpenseForm component and import it to App
	import ExpenseForm from './ExpenseForm.svelte'

	// data
	// to work the the total amount of all expenses as well as the number of expenses
	// we also export the properties of that component
	let totals_title
	let total_amount_of_all_expenses = 0
	let total_number_of_expenses = 0

	// beloved reactivity
	// so to introduce reactivity to the App we use the $ dollar sing and a colon
	// after that it is vanilla JavasScript and up to us what to do with the value
	$: total_amount_of_all_expenses = expenses.reduce((accumulator, current_item) => {
		console.log(accumulator, current_item.amount)
		return (accumulator = accumulator + current_item.amount)
	}, 0)

	import expensesData from './expenses'
	// we define the variable for the expenses data and can name it anything
	// in this case it is named the same as the property "expenses" of the ExpensesList component
	let expenses = [...expensesData]

	// here we count the number of single expenses and make the value reactive to the
	// amount of items in the expenses array of objects
	$: total_number_of_expenses = expenses.length

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

	function editSingleExpense(id, name, amount) {
		console.log(id, name, amount)
	}

	// for clearing all expenses we make a new function and add that to the state object
	function deleteAllExpenses() {
		// we simply set the expenses array of objects each with single expense data to an empty array
		expenses = []
	}

	// context
	// approach 1
	// here we define the context for the removeSingleExpense() function
	// setContext('removeSingleExpense', removeSingleExpense)

	// if we want multiple function we define them line by line
	// setContext('editSingleExpense', editSingleExpense)

	// this is NOT possible, to have multiple functions you like to pass with set- & getContext
	// you have to use an object with keys and values, where the value is the function
	// you like to pass
	// setContext('removeSingleExpense, editSingleExpense', removeSingleExpense, editSingleExpense)

	// approach 2
	// the name 'state' can be any other value if you like
	// here we set up multiple functions to be passed by set- and received by getContext
	const state = {
		name: 'hello world',
		removeSingleExpense: removeSingleExpense,
		editSingleExpense: editSingleExpense,
		deleteAllExpenses: deleteAllExpenses
	}

	// here we pass the state object as a second argument to the setContext function
	// in this case all methods of the object are being passed and can be received
	// by the components that need them
	setContext('state', state)
</script>

<Navbar />
<main class="content">
	<!-- let's place the ExpenseForm right at the top of the App.. -->
	<ExpenseForm />

	<!-- let's place the TotalExpenses component at the beginning of the App.. -->
	<TotalExpenses
		totals_title="{totals_title}"
		total_amount_of_all_expenses="{total_amount_of_all_expenses}"
		total_number_of_expenses="{total_number_of_expenses}"
	/>

	<!-- here we are passing down / assigning the expenses data in the let expenses variable to the property "expenses" from the ExpensesList component -->

	<!-- here we are passing down the removeSingleExpense(id) function to ExpensesList.svelte with a property called  "removeSingleExpense"
	that means we also have to create the property as export let removeSingleExpense inside the ExpensesList.svelte component -->
	<ExpensesList expenses="{expenses}" />

	<br />
	<br />

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
</main>

<style>
	img {
		width: 100%;
	}
</style>
