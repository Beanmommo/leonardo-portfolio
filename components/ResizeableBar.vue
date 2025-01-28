<template>
    <div class="container">
        <div class="panel left" :style="{ width: leftPanelWidth + 'px' }">
            <slot name="left" />
        </div>
        <div class="resizer" @mousedown="onMouseDown"></div>
        <div class="panel right" :style="{ width: rightPanelWidth + 'px' }">
            <slot name="right" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// State variables
const leftPanelWidth = ref(300);
const rightPanelWidth = ref(300);
let startX = 0;
let isResizing = false;

// Methods
const onMouseDown = (event: MouseEvent) => {
    isResizing = true;
    startX = event.clientX;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
};

const onMouseMove = (event: MouseEvent) => {
    if (!isResizing) return;

    const dx = event.clientX - startX;
    leftPanelWidth.value += dx;
    rightPanelWidth.value -= dx;
    startX = event.clientX;
};

const onMouseUp = () => {
    isResizing = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
};

// Cleanup listeners on component unmount
onUnmounted(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
});

onMounted(() => {
    leftPanelWidth.value = (window.innerWidth / 2) - 2.5;
    rightPanelWidth.value = (window.innerWidth / 2) - 2.5;
})
</script>

<style scoped>
.container {
    display: flex;
    height: calc(100vh - 16px);
    overflow: hidden;
}

.panel {
    flex-shrink: 0;
    height: 100vh;
}

.left {
    background-color: #f0f0f0;
}

.right {
    background-color: #d0d0d0;
}

.resizer {
    width: 5px;
    cursor: ew-resize;
    background-color: #ccc;
}
</style>
