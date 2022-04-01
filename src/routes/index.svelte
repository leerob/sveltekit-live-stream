<script context="module">
	export const prerender = true;
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<section>
	<h1>
		All Posts
	</h1>
	<ul>
		{#each posts as post (post.id)}
			<li>{post.title}</li>
		{/each}
	</ul>
</section>

<style>
	
</style>
