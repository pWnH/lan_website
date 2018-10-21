<template>
    <label class="game-card" :class="{'checked': checked}">
        <img class="game-img" :src="game.img"/>
        <input type="checkbox" v-model="checked" :name="game.id">
        {{game.title}}
    </label>
</template>

<script>
export default {
    props: {
        game: {
            default: null,
            required: true
        },
    },
    data() {
        return {
            checked: false,
        }
    },

}
</script>

<style lang="scss" scoped>
    .game-card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 150px;
        max-height: 150px;
        color: var(--font-color-light);

        background-color: var(--background-color);

        border: 2px solid transparent;
        border-radius: 4px;
        padding: 15px;

        transition: all ease .27s;

        text-align: left;
        &.checked {
            background-color: var(--primary-color);
            color: var(--background-color);
        }
        input {
            opacity: 0;
        }
    }

    .game-img {
        width: 100px;
        max-height: 100px;
        
    }
    .game-desc {
        height: 0;
        opacity: 0;
        padding: 10px;
        margin:0;
        transition: all ease .3s;
    }

    .game-card:hover {
        border-color: var(--primary-color);
        cursor: pointer;
        .game-desc {
            height: auto;
            opacity: 1;
            padding: 10px;
        }
        label {
            color: var(--font-color-light);
        }
    }

</style>

