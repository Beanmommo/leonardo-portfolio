export const useTestStore = defineStore("test", () => {
  const test = ref("Hello, World!");
  return { test };
});
