<template>
    <header>
        <h2>X-Team Vue App</h2>
        <nav>
            <ul>
                <li>
                    <router-link to="/Nested">Nested</router-link>
                </li>
                <li>
                    <router-link to="/Firebase">Firebase</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
  export default {}
</script>

<style scoped>
    header {
        z-index: 999;
        background-color: #000;
        height: 20%;
        min-height: 85px;
        max-height: 85px;
        position: fixed;
        width: 100%;
        top: 0;
        opacity: 0.9;
        border-bottom: 1px solid gray;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.04);
    }

    header > h2 {
        font-family: "Lato", sans-serif;
        position: absolute;
        left: 5%;
        padding: 11px 0 35px 0;
        font-size: 0.9em;
        font-weight: 400;
        color: #fff;
    }

    nav {
        position: absolute;
        left: 55%;
        width: 70%;
    }

    nav > ul > li {
        font-size: 0.75em;
        font-weight: 500;
        padding-right: 5%;
        list-style: none;
        display: inline-block;
    }

    nav > ul > li > a {
        text-decoration: none;
        color: #fff;
    }
</style>