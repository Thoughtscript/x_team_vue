<template>
    <footer>
        <ul>
            <li><a href="https://x-team.com/">X-Team</a></li>
            <li><a href="https://github.com/Thoughtscript/x_team_vue">GitHub</a></li>
            <li><a href="https://x-team.com/blog/vue-2-5/">Blog</a></li>
        </ul>
    </footer>
</template>

<script>
  export default { }
</script>

<style scoped>
    footer {
        position: absolute;
        width: 100%;
        top: 5000px;
        height: 14%;
        min-height: 2em;
        max-height: 5em;
        background-color: #000;
        opacity: 0.8;
        border-top: 1px solid gray;
        box-shadow: 2px 0 2px rgba(0, 0, 0, 0.06);
    }

    footer > ul {
        position: absolute;
        left: 15%;
        top: 15%;
    }

    footer > ul > li {
        list-style: none;
        display: inline-block;
    }

    footer > ul > li > a {
        padding-left: 2.5em;
        padding-right: 2.5em;
        text-decoration: none;
        color: #fff;
        font-size: 0.65em;
    }
</style>