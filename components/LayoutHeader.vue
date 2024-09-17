<template>
    <div class="header__container">
        <div class="header__logo">
            <Image src="https://github.com/Beanmommo/leonardo-portfolio/blob/main/public/header__logo.png?raw=true"
                alt="Logo" width="75" />
            <span>Leonardo Prasetyo</span>
        </div>
        <div>
            <span>Resume</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    &__container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    &__logo {
        display: flex;
        align-items: center;
        font-family: $logo-font;
        font-size: 50px
    }
}
</style>