<template>
    <div class="my">
        <div :class="['ball', {'active' : flag}]" ref="bal" @click="handleShowLine">
            <div class="inner"></div>
        </div>
        <button @click="choose">点击触发小球动画</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flag: false,
                showLine: false
            }
        },
        methods: {
            handleShowLine() {
                this.showLine = true
            },
            choose() {
                this.flag = !this.flag
            },
            transitionEnd(e) {
            }
        },
        beforeDestroy() {
            this.$refs.bal.removeEventListener('transitionend', this.transitionEnd, false)
        },
        mounted() {
            this.$refs.bal.addEventListener('transitionend', this.transitionEnd, false)
        }
    }
</script>

<style lang="less" scoped>
    .my {
        height: 100%;

        .ball {
            position: fixed;
            transition: all .5s cubic-bezier(0,-0.3, 1, 0.17);
            transform: translate3d(0,100px,0);

            &.active {
                transform: translate3d(0, 1100px, 0);
                .inner {
                    transform: translate3d(100px, 0, 0);
                }
            }

            .inner {
                transition: all .5s linear;
                transform: translate3d(600px, 0, 0);
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #000;
            }
        }
    }
</style>
