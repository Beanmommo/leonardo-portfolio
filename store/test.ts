export const useTestStore = defineStore("test", () => {
  const test = ref("Hello, Daphlyn!");
  return { test };
});
