<script>
	import Title from './Title.svelte'
	let name = 'dinner'
	let amount = 500

	// this is AWESOME
	// by setting up a reactive statement and logging
	// the variables name and amount that have
	// two way binding in place we can immediately see
	// their new value in the console :))
	$: console.log({ name, amount })
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

		<p class="form-empty">please fill out all the form fields</p>
		<button type="submit" class="btn btn-block">add expense</button>
		<button type="button" class="close-btn"
			><i class="fas fa-times"></i>
			close</button
		>
	</form>
</section>
