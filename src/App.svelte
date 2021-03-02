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
	// after that it is vanilla JavaScript and up to us what to do with the value
	$: total_amount_of_all_expenses = expenses.reduce((accumulator, current_item) => {
		console.log(accumulator, current_item.expAmount)
		return (accumulator = accumulator + current_item.expAmount)
	}, 0)

	import expensesData from './expenses'
	// we define the variable for the expenses data and can name it anything
	// in this case it is named the same as the property "expenses" of the ExpensesList component
	let expenses = [...expensesData]

	// here we count the number of single expenses and make the value reactive to the
	// amount of items in the expenses array of objects
	$: total_number_of_expenses = expenses.length

	// functions
	function removeSingleExpense(expId) {
		// we use the filter method to create a new array without
		// the array item with the particular id

		// in the filter method we get a callback function as argument
		// inside that callback function we get a parameter and can
		// access each and every item in the array

		// if the id of the item in the array MATCHES the id as argument of the removeSingleExpense function, so the id we are passing in, it will NOT be in the new array

		// if the id we are passing is NOT the idem.id of any of the array items it will be in the new array
		expenses = expenses.filter((item) => item.expId !== expId)
	}

	// edit_expense branch
	let setExpId = null
	let setExpName = ''
	let setExpAmount = null

	function editSingleExpense(expId) {
		console.log(expId)

		// here we use the find method to find the expense to be edited by its expense_id
		// if the item id matches the setExpId then that is the item we like to edit
		let expense = expenses.find((item) => item.expId === expId)
		console.table(expense)

		// here we edit the id, name and amount of the expense we found with the find method
		// so the new properties of the expense object will have the values of setExpId, setExpName and setExpAmount
		// later on we need to pass these values to a form to be able to edit them to our
		// liking and then obviously also submit the form with the desired changes to edit the single expense
		setExpId = expense.expId
		setExpName = expense.expName
		setExpAmount = expense.expAmount
		console.table({ setExpId, setExpName, setExpAmount })
	}

	// for clearing all expenses we make a new function and add that to the state object
	function deleteAllExpenses() {
		// we simply set the expenses array of objects each with single expense data to an empty array
		expenses = []
	}

	// function addSingleExpense({ id: expense_id, name, amount }) {
	// 	console.table(expense_id, name, amount)
	// }

	function addSingleExpense({ expId, expName, expAmount }) {
		// console.log(expense_id, name, amount)

		let expense = {
			expId: expId,
			expName: expName,
			expAmount: expAmount
		}
		console.table(expense)

		// here we add the new expense to the existing expenses array of objects
		// that, with the use of the spread operator, allows us to add a new
		// expense array it as a single object with the properties
		// id: expense_id, name: name and amount: amount
		// to the expenses array of objects

		// HA, adding the expense at the beginning of the array
		// always replaces the previously added array item with a new one
		// though it does NOT work, always overwrites the previously added new item!
		// expenses = [expense, ...expensesData]

		// BUT pay attention to what is added and to what is updated!
		// https://discord.com/channels/@me/773194949667323974/815905771543593030
		let my_list = [1, 2, 3]
		let my_new_list = [...my_list, 4]
		console.log(my_new_list)
		my_new_list = [...my_list, 5]
		console.log(my_new_list)

		// SO this here works, because we are not using expensesData but the already
		// existing expenses that have changed
		expenses = [expense, ...expenses]
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
		deleteAllExpenses: deleteAllExpenses,
		addSingleExpense: addSingleExpense
	}

	// here we pass the state object as a second argument to the setContext function
	// in this case all methods of the object are being passed and can be received
	// by the components that need them
	setContext('state', state)
</script>

<Navbar />
<main class="content">
	<!-- let's place the ExpenseForm right at the top of the App.. -->

	<!-- https://discord.com/channels/@me/773194949667323974/816243431562280991 
		wanting to NOT export these properties would ONLY work with a store
		so here we HAVE to pass the properties and their values to the ExpenseForm -->
	<ExpenseForm expId="{setExpId}" expName="{setExpName}" expAmount="{setExpAmount}" />

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
