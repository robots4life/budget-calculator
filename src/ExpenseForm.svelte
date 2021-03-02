<script>
	import { getContext } from 'svelte'

	// as it is right now, clicking edit expense will always generate a new expense UUID
	// this is not wanted
	// bp: It's not a good thing that the ID changes on edit.
	// Say this was data from a database.
	// When you change the ID, you lose the link to that row of the database.
	// Now you can't update the database correctly when the user wants to save their data

	// this means we have decouple/change a few things
	// bp: So, if you want to keep the same ID, you need to change some things.
	// First, this is read only variable so it does not need to go into an input.
	// We can use a normal div.
	// But first, we should decouple the value of the ID from the prompt for the ID.
	// The two aren't related, so you shouldn't store the data in the same variable.

	const prompt = 'fill in NAME and AMOUNT'

	// we get the context of the state object and destructure the addSingleExpense function out of it
	const { addSingleExpense } = getContext('state')

	import Title from './Title.svelte'

	// https://discord.com/channels/@me/773194949667323974/816243431562280991
	// wanting to NOT export these properties would ONLY work with a store
	export let expId
	export let expName
	export let expAmount

	export let isEditingSingleExpense

	// this is AWESOME
	// by setting up a reactive statement and logging
	// the variables name and amount that have
	// two way binding in place we can immediately see
	// their new value in the console :))
	$: console.log({ expId, expName, expAmount })

	// check for empty fields in the form
	// remember, a truthy value is considered TRUE
	// when encountered in a boolean context

	// example
	// if name is an empty string it is considered falsy
	// and hence it is not logged
	// however if the name value has a real string value
	// it is considered truthy and hence it is
	// also being logged
	if (expName) {
		console.log(expName)
	}

	/* 	
	UUIDs are a more common format for unique identifiers.
	This is a basic function that is good for testing.
	Here's a reference for the source:
	https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
	*/
	function uuidv4() {
		return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
			(c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
		)
	}

	// 	we need to create the isEmpty variable since our code relies on it later
	let isEmpty = true

	// this is a REACTIVE block where we can assign variables to various values
	// or functions on given conditions..

	// now to not have this logic create a new UUID on edit expense
	// we change the logic to accommodate for the case
	// where the expense_id is already given
	$: {
		isEmpty = !expName || !expAmount

		// if (isEmpty) {
		// 	expense_id = 'fill in NAME and AMOUNT'
		// } else {
		// 	// expense_id = Math.random() * Date.now()
		// 	expense_id = uuidv4()
		// }

		if (!isEmpty && expId == null) {
			// expense_id = Math.random() * Date.now()
			expId = uuidv4()
		}
	}

	// the function that runs when we click on the submit button of the form element
	function formSubmitHandler(event) {
		console.log('form submitted on : ' + new Date())
		console.log(event)

		// console.log(expense_id, name, amount)

		// make sure to call the function with an object as argument
		// this is done, per the tut, to "not have to worry about the sequence of the object properties"
		// better explanation => https://discord.com/channels/@me/773194949667323974/815897450472144896
		addSingleExpense({ expId, expName, expAmount })

		// after submitting the form data we reset the values of
		// name and amount to an empty string and null
		// this resets the form and isEmpty kicks in again
		// disabling the submit button before a new form
		// can be submitted
		expId = null
		expName = ''
		expAmount = null
	}
</script>

<!-- to illustrate two way binding we have two paragraphs
    as we change values in the input fields in the form below
    the values in these paragraphs change as well -->
<p>
	to illustrate two way binding we have two paragraphs as we change values in the input fields in
	the form below the values in these paragraphs change as well
</p>
<p>isEmpty : {isEmpty}</p>
<p>expId : {expId}</p>
<p>expName : {expName}</p>
<p>expAmount: {expAmount}</p>
<p>here we check if we are adding a new expense item OR editing an existing item</p>
<p>isEditingSingleExpense : {isEditingSingleExpense}</p>

<section class="form">
	<Title title="add expense" />
	<!-- the form has a submit event that we can listen to
		here we write on:submit and then work with a submit handler
	// that will include various bits of functionality for the form -->
	<form class="expense-form" on:submit|preventDefault="{formSubmitHandler}">
		<!-- bp
		First, this is read only variable so it does not need to go into an input. We can use a normal div.
		-->
		<!-- <div class="form-control">
			<label for="expense_id">id</label> -->

		<!-- approach 1 -->
		<!-- {#if !isEmpty} -->
		<!-- REMEMBER THIS!!
				DATE vs. FUNCTION
				https://svelte.dev/repl/c2d4e11895724786a848917c69b41ff3?version=3.34.0 -->
		<!-- <input type="text" id="id" value="{Math.random() * Date.now()}" disabled /> -->
		<!-- {/if} -->

		<!-- approach 2 with a function and showing the expense Id field immediately -->
		<!-- <input type="text" id="expense_id" bind:value="{expense_id}" disabled /> -->
		<!-- </div> -->

		<!-- instead of having the above we use a normal div that either shows the
			the expense_id value or a prompt that says 'fill in NAME and AMOUNT' -->
		<p class="expId">{expId || prompt}</p>
		<br />

		<div class="form-control">
			<label for="name">name</label>

			<!-- we bind the value of variable NAME to the value it receives in the input form
                this is two way binding - between the defined variable NAME and the input field value -->
			<input type="text" id="name" bind:value="{expName}" />
		</div>
		<div class="form-control">
			<label for="amount">amount</label>

			<!-- we bind the value of variable AMOUNT to the value it receives in the input form
                this is two way binding - between the defined variable AMOUNT and the input field value -->
			<input type="number" id="amount" bind:value="{expAmount}" />
		</div>
		<!-- here we check if the isEmpty variable is true, that is the case when
		either !name or !amount are given in the bound values of the input elements
		with this in place we can either show or hide the warning message  -->
		<p>
			here we check if the isEmpty variable is true, that is the case when either !name or
			!amount are given in the bound values of the input elements with this in place we can
			either show or hide the warning message
		</p>
		{#if isEmpty}
			<p class="form-empty">please fill out all the form fields</p>
		{/if}
		<!--
			https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled 
			The Boolean disabled attribute, when present, makes the element not mutable, focusable, or even submitted with the form. The user can neither edit nor focus on the control, nor its form control descendants. If the disabled attribute is specified on a form control, the element and its form control descendants do not participate in constraint validation. Often browsers grey out such controls and it won't receive any browsing events, like mouse clicks or focus-related ones.

			so we set the disabled attribute of the button to the reactive value of the result of isEmpty
			if isEmpty is true then the button is disabled

			to also have a "disabled" class that can be toggled on the element we use the class: directive
			and set that equal to the reactive variable of isEmpty
		-->
		<button type="submit" class="btn btn-block" class:disabled="{isEmpty}" disabled="{isEmpty}"
			>add expense</button
		>
		<button type="button" class="close-btn"
			><i class="fas fa-times"></i>
			close</button
		>
	</form>
</section>

<!-- we add some css to make this look a bit better -->
<style>
	.expId {
		color: rgba(0, 0, 0, 0.5);
		padding: 10px 0px;
	}

	.expId::before {
		content: 'expID: ';
	}
</style>
