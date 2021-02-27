<script>
	// lib

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
	// function removeSingleExpense(id) {
	// 	// we use the filter method to create a new array without
	// 	// the array item with the particular id

	// 	// in the filter method we get a callback function as argument
	// 	// inside that callback function we get a parameter and can
	// 	// access each and every item in the array

	// 	// if the id of the item in the array MATCHES the id as argument of the removeSingleExpense function, so the id we are passing in, it will NOT be in the new array

	// 	// if the id we are passing is NOT the idem.id of any of the array items it will be in the new array
	// 	expenses = expenses.filter((item) => item.id !== id)
	// }

	function editSingleExpense(id, name, amount) {
		console.log(id, name, amount)
	}

	// function for createEventDispather
	// createDispatcher has an event argument that gives details about the event
	// let's log that event
	function deleteSingleExpense(event) {
		// expenses = expenses.filter((item) => item.id !== id)
		console.log(event)

		// here we destructure the id and name properties
		// out of the event object

		// so we assing a const the properties id and name
		// and set those equal to the event object and inside that the detail property
		const { id, name } = event.detail

		// so here we can just log the name property from
		// dispatch('deleteSingleExpense', { id, name: 'hello from a single expense' })}
		// inside SingleExpense.svelte
		console.log(name)

		// last not least, just like in function removeSingleExpense
		// we filter over the expenses and if them item.id IS THE SAME as the id
		// that we pass we do NOT include that in the new expenses array of objects

		// make sure to understand that we can reference the id from the
		// exported property inside SingleExpense.svelte
		// this because we are passing down the event from the root component App.svlete
		// all the way down to SingleExpense.svelte
		expenses = expenses.filter((item) => item.id !== id)
	}
</script>

<Navbar />

<h1>log of function deleteSingleExpense(event) => console.log(event)</h1>
<img src="images/09_createEventDispatcher_event_log_deleteSingleExpense.png" alt="" />
<br />
<h2>we are interested in the event => detail => Object properties, so ID and NAME</h2>
<br />
<br />
<main class="content">
	<!-- here we are passing down / assigning the expeneses data in the let expenses variable to the property "expenses" from the ExpensesList component -->

	<!-- here we are passing down the removeSingleExpense(id) function to ExpensesList.svelte with a property called  "removeSingleExpense"
	that means we also have to create the property as export let removeSingleExpense inside the ExpensesList.svelte component -->

	<!-- by using createEventDispatcher we can simply forward the event in any components that are
		between the root component and the destination component in the tree

		so we can simply do on:deleteSingleExpense where
		
		deleteSingleExpense

		come from
		
		on:click="{() => dispatch('deleteSingleExpense', { id, name: 'hello from a single expense' })}"
		in SingleExpense.svelte -->
	<ExpensesList expenses="{expenses}" on:deleteSingleExpense="{deleteSingleExpense}" />
</main>
