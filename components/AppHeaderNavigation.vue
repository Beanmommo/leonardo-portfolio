<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: '._nav'
    },
    nuxtTo: {
        type: String,
        default: '/',
    }
})
</script>

<template>
    <NuxtLink :to="nuxtTo" style="text-decoration: none;">
        <span class="nav-link">
            {{ text }}
        </span>
    </NuxtLink>
</template>

<style scoped lang="scss">
.nav-link {
    text-align: center;
    color: black;
}
</style>