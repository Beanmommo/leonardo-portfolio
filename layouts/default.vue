<template>
    <!-- <div class="computer">
        <FileExplorer />
        <div class="container">
            <slot />
        </div>
    </div> -->
    <ResizeableBar class="resizeable-bar">
        <template #left>
            <FileExplorer />
        </template>
        <template #right>
            <div class="container">
                <slot />
            </div>
        </template>
    </ResizeableBar>
</template>

<style scoped lang="scss">
.resizeable-bar {
    margin: 0;
}
</style>