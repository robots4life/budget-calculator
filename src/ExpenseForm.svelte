<script>
	import Title from './Title.svelte'
	let name = ''
	let amount = null

	// this is AWESOME
	// by setting up a reactive statement and logging
	// the variables name and amount that have
	// two way binding in place we can immediately see
	// their new value in the console :))
	$: console.log({ name, amount })

	// check for empty fields in the form
	// remember, a truthy value is considered TRUE
	// when encountered in a boolean context

	// example
	// if name is an empty string it is considered falsy
	// and hence it is not logged
	// however if the name value has a real string value
	// it is considered truthy and hence it is
	// also being logged
	if (name) {
		console.log(name)
	}
	$: isEmpty = !name || !amount
</script>

<!-- to illustrate two way binding we have two paragraphs
    as we change values in the input fields in the form below
    the values in these paragraphs change as well -->
<p>
	to illustrate two way binding we have two paragraphs as we change values in the input fields in
	the form below the values in these paragraphs change as well
</p>
<p>name : {name}</p>
<p>amount: {amount}</p>

<section class="form">
	<Title title="add expense" />
	<form class="expense-form">
		<div class="form-control">
			<label for="name">name</label>

			<!-- we bind the value of variable NAME to the value it receives in the input form
                this is two way binding - between the defined variable NAME and the input field value -->
			<input type="text" id="name" bind:value="{name}" />
		</div>

		<div class="form-control">
			<label for="amount">amount</label>
			<!-- we bind the value of variable AMOUNT to the value it receives in the input form
                this is two way binding - between the defined variable AMOUNT and the input field value -->
			<input type="text" id="amount" bind:value="{amount}" />
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
