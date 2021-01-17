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
            transition: all .5s cubic-bezier(0,-0.3, 1, 0.17);
            position: absolute;
            top: 100px;
            /*left: 600px;*/
           /* width: 50px;
            height: 50px;
            background: #fff; */
            /*border-radius: 50%;*/
            /*transform: translate3d(0,0,0);*/

            &.active {
                /*top: 1100px;*/
                top: 1100px;
                /*left: 100px;*/
                /*transform: translate3d(-300px, 1100px, 0);*/
                .inner {
                    left: 100px;
                }
            }

            .inner {
                transition: all .5s linear;
                position: absolute;
                left: 600px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #000;
            }
        }
    }
</style>
