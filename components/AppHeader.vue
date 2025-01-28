<template>
    <section class="header">
        <AppHeaderNavigation text="leonardo-prasetyo" nuxtTo="/" />
        <div class="nav">
            <AppHeaderNavigation text="._about" nuxtTo="/" />
            <AppHeaderNavigation text="._workExperience" nuxtTo="/" />
            <AppHeaderNavigation text="._projects" nuxtTo="/" />
        </div>
        <div style="text-align: right;">
            ._contactMe
        </div>
    </section>
</template>

<style scoped lang="scss">
.header {
    border: 1px solid #000;
    padding: 16px;
    display: grid;
    grid-template-columns: 256px 1fr 256px;
    align-items: center;
}

.nav {
    text-align: center;
    display: flex;
    column-gap: 16px;

}
</style>