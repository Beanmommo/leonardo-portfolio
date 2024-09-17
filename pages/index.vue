<script setup lang="ts">
import { useTestStore } from '~/store/test';

const testStore = useTestStore();
const { test } = storeToRefs(testStore);
</script>

<template>
    <Button label="Check" icon="pi pi-check" />
    {{ test }}
</template>