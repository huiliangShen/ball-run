<template>
    <div class="my">
        <div :class="['ball']" ref="ball" @click="handleShowLine" v-show="flag">
            <div class="inner"></div>
        </div>
<!--        <div class="line"></div>-->
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
                // this.flag = !this.flag
                // this.$refs.ball.style.display = 'inline-block'
                this.$refs.ball.style.top = `${50}px`
                this.$refs.ball.children[0].style.left = `${300}px`
                this.flag = true

                this.$nextTick(() => {
                    // setTimeout(() => {
                    this.$refs.ball.style.top = `${505}px`
                    this.$refs.ball.children[0].style.left = `${50}px`
                    // })
                })
            },
            transitionEnd(e) {
                console.log(e)
                if (e.target.classList.contains('inner')) {
                    // this.$refs.ball.style.display = 'none'
                    this.flag = false
                }
                // this.flag = false
            }
        },
        beforeDestroy() {
            this.$refs.ball.removeEventListener('transitionend', this.transitionEnd, false)
        },
        mounted() {
            this.$refs.ball.addEventListener('transitionend', this.transitionEnd, false)
        }
    }
</script>

<style lang="less" scoped>
    .my {
        height: 100%;

        .line {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 99px;
            width: 1px;
            background: blue;
        }

        .ball {
            /*display: none;*/
            position: absolute;
            transition: all .5s cubic-bezier(.19, -0.14, .82, 0);
            /*transform: translate3d(0,100px,0);*/
            /*top: 100px;*/

            &.active {
                /*transform: translate3d(0, 1100px, 0);*/
                /*top: 1100px;*/

                .inner {
                    /*transform: translate3d(100px, 0, 0);*/
                    /*left: 100px;*/
                }
            }

            .inner {
                position: absolute;
                /*transition-timing-function: linear;*/
                transition: all .5s linear;
                /*transform: translate3d(600px, 0, 0);*/
                /*left: 600px;*/
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #000;
            }
        }
    }
</style>
