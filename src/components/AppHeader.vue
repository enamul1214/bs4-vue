<template>
    <header class="header">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container">
                <div class="logo">
                    <router-link class="text-uppercase" to="/">Basic Vue</router-link>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="mainNavigation">
                    <ul class="navbar-nav ml-auto align-items-center">
                        <li><router-link class="nav-link" to="/">Home</router-link></li>
                        <li><router-link class="nav-link" to="/about">About</router-link></li>
                    </ul>
                </div>
                <!-- <router-view/> -->
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>