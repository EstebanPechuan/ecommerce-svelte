<script></script>

<header>
    <div class="container">
        <div class="logo">
            <h2>
                <a href="/">e-com.svelte</a>
            </h2>
        </div>
        
        <nav>
            <ul class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/categories">Categories</a></li>
            </ul>
        </nav>
    
        <div class="cart">
            <a href="/cart">
                <i class='bx bxs-cart'></i>
            </a>
        </div>
    </div>
</header>

<style>
    header {
        height: 80px;
        box-shadow: 0 2px 10px #0004;
        margin-bottom: 30px;
    }
    header .container {
        width: 100%;
        height: 100%;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu {
        display: flex;
        gap: 10px;
    }
    .menu li:nth-child(odd) {
        display: none;
    }
    @media (min-width: 560px) {
        .menu {
            display: flex;
        }
        .menu li:nth-child(odd) {
        display: block;
    }
    }
</style>