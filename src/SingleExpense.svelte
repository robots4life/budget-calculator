<script>
	export let index
	export let id
	export let name
	export let amount

	let displayExpenseData = false

	function toggleDisplayExpenseData() {
		displayExpenseData = !displayExpenseData
	}
</script>

<acrtice class="single-expense">
	<div class="expnese-info">
		<h2>
			{name}
			<button class="amount-btn" on:click="{toggleDisplayExpenseData}">
				<i class="fas fa-caret-down" id="index-{index}"></i>
			</button>
		</h2>
		{#if displayExpenseData}
			<br />
			<p>index : {index}</p>
			<p>id : {id}</p>
			<h4>amount : ${amount}</h4>
		{/if}
	</div>
	<div class="expense-buttons">
		<button class="expense-btn edit-btn">
			<i class="fas fa-pen"></i>
		</button>
		<button class="expense-btn delete-btn">
			<i class="fas fa-trash"></i>
		</button>
	</div>
</acrtice>
