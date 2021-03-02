<script>
	// lib
	// having set tup setContext in App.svelte we now need to
	// also import the counterpart, getContext in SingleExpense.svelte
	import { getContext } from 'svelte'

	// properties
	export let expIndex
	export let expId
	export let expName
	export let expAmount

	let displayExpenseData = true

	function toggleDisplayExpenseData() {
		displayExpenseData = !displayExpenseData
	}

	// here we get the context, make a const variable and set that equal
	// to getContext passing the name of the removeSingleExpense() function
	// from App.svelte as first argument
	// const removeSingleExpense = getContext('removeSingleExpense')
	// const editSingleExpense = getContext('editSingleExpense')

	// approach 1
	// here we destructure the state object and just use
	// the property that we need
	const { removeSingleExpense } = getContext('state')
	// const { editSingleExpense } = getContext('state')

	// approach 2
	const state = getContext('state')
</script>

<article class="single-expense">
	<div class="expense-info">
		<h2>
			{expName}
			<button class="amount-btn" on:click="{toggleDisplayExpenseData}">
				<i class="fas fa-caret-down" expIndex="expIndex-{expIndex}"></i>
			</button>
		</h2>
		{#if displayExpenseData}
			<br />
			<p>expIndex : {expIndex}</p>
			<p>expId : {expId}</p>
			<p>expName : {expName}</p>
			<h4>expAmount : ${expAmount}</h4>
			<h4>getContext from state object : {state.name}</h4>
		{/if}
	</div>
	<div class="expense-buttons">
		<!-- edit button -->
		<!-- approach 2 - when we pass the whole state object the methods can be called with a dot . -->
		<button class="expense-btn edit-btn" on:click="{state.editSingleExpense(expId)}">
			<i class="fas fa-pen"></i>
		</button>

		<!-- delete button -->
		<!-- even though on:click="{removeSingleExpense(id)}" works different in the tutorial
		because of different Svelte versions
		https://svelte.dev/repl/075fd497f3bb45199c62775bf643379b?version=3.32.3
		vs
		https://svelte.dev/repl/075fd497f3bb45199c62775bf643379b?version=3.0.0
		it is  recommended to call the property/function exactly like this
		of course
		on:click="{(element) => {
					console.log(element)
					removeSingleExpense(id)
				}}"
		also works fine -->

		<!-- approach 1 -->
		<button class="expense-btn delete-btn" on:click="{removeSingleExpense(expId)}">
			<i class="fas fa-trash"></i>
		</button>
	</div>
</article>
