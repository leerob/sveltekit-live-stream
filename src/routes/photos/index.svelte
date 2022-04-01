<script context="module">
	export const prerender = true;
</script>

<script>
	export let photos;
</script>

<svelte:head>
	<title>Photos</title>
</svelte:head>

<div>
	<h1>
		Photos
	</h1>
	{#each photos as photo (photo.id)}
		<img 
			src={photo.url}
			alt={photo.title}
			loading="lazy"
			width="400"
			height="400"
			decoding="async"
		>
	{/each}
</div>

<style>
	
</style>
