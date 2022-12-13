<script>
    import { products } from '../../store/store';
	import Product from '../../components/Product.svelte';
</script>

<svelte:head>
    <title>E-commerce - Products</title>
</svelte:head>

<main class="container">
    {#each $products as product}
        <Product {product} />
    {/each}
</main>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
    }
    @media (min-width: 560px) {
        .container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 991px) {
        .container {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>