<template>
    <div class="computer">
        <AppHeader />
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.computer {
    display: grid;
    row-gap: 16px;
}

.container {
    padding: 16px;
    border: 1px solid #000;
    height: calc(100vh - 8*$padding);
}
</style>