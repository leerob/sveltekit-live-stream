<script>
	import '../app.css';
</script>

<nav>
	<li class="">
		<a href="/">
			Posts
		</a>
	</li>
	<li class="">
		<a href="/photos">
			Photos
		</a>
	</li>
	<li class="">
		<a href="/todos">
			Todos
		</a>
	</li>
</nav>

<main>
	
	<slot />
</main>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem;
	}

	nav li {
		list-style: none;
	}

	nav li a {
		color: #333;
		text-decoration: none;
	}

	nav li a:hover {
		color: #000;
	}

	main {
		padding: 0.5rem;
	}
</style>
