<script>
	import Navbar from './Navbar.svelte'
	let fruits = ['watermelon', 'lemon', 'kiwi', 'orange', 'banana', 'cherry', 'blueberry']
	let fruits2 = {
		1: 'watermelon',
		2: 'lemon',
		3: 'kiwi',
		4: 'orange',
		5: 'banana',
		6: 'cherry',
		7: 'blueberry'
	}
</script>

<Navbar />

<img src="images/01_iterate_over_array_vs_object.png" alt="" />

<!-- https://stackoverflow.com/a/61089468 -->
<pre>
	<code>
		{`
{#each fruits as fruit, index}
	<p>{fruit} | {index}</p>
{/each}
		`}
	</code>
</pre>

{#each fruits as fruit, index}
	<p>{fruit} | {index}</p>
{/each}

<pre>
	<code>
		{`
Iterate over objects		
https://github.com/sveltejs/svelte/issues/894

{#each Object.entries(fruits2) as [fruit_2_key, fruit_2_value]}
	<p>{fruit_2_key}: {fruit_2_value} |</p>
{/each}
		`}
</code>
</pre>

{#each Object.entries(fruits2) as [fruit_2_key, fruit_2_value]}
	<p>{fruit_2_key}: {fruit_2_value} |</p>
{/each}

<style>
	pre {
		color: white;
		background-color: black;
	}
	p {
		font-size: 2rem;
	}
</style>
