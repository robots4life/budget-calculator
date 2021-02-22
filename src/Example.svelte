<p>hello from a span element inside the example.svelte component</p>

<div class="main-title">
	<h2>example title from inside example.svelte component with the same main-title CSS class</h2>
</div>

<div class="another-element">
	<p>
		another random element from inside the example.svelte component styled with CSS from the
		gloabal styles found in global.css file
	</p>
</div>

<style>
	p {
		background-color: rgb(36, 197, 98);
		color: darkred;
	}
	.main-title {
		color: red;
	}
	.another-element p {
		background-color: var(--primaryColor);
	}
</style>
