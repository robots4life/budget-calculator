<script>
	import Navbar from './Navbar.svelte'
	import Title from './Title.svelte'
	import Example from './Example.svelte'
</script>

<Navbar />
<Title />
<Title title="a title coming from the outside of the component Title.svelte logic" />

<Example />
<p>hello from a span element outside of the Example.svelte component</p>

<style>
	p {
		background-color: blue;
		color: white;
	}
</style>
