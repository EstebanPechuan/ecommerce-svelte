<script>
    export let product
</script>

<div class="card">
    <img src={product.imgs[0]} alt={product.name}>
    
    <div class="card__info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <a href={`/products/${product.id}`}>Ver más</a>
    </div>
</div>

<style>
    .card {
        width: 100%;
    }
    .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
    }
</style>