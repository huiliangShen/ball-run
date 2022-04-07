<template>
    <div class="my">
        <div :class="['ball', {'active' : flag}]" ref="bal" @click="handleShowLine">
            <div class="inner"></div>
        </div>
        <div class="cycle" @click="choose"></div>
        <button @click="choose">点击触发小球动画</button>
       <!-- <VLine :show="showLine"/>-->
    </div>
</template>

<script>
    import '@/index.less'
    // import VLine from '@/app/components/line'
    export default {
        data() {
            return {
                flag: false,
                showLine: false
            }
        },
        /* components: {
            VLine
        }, */
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
      /*  display: flex;
        align-items: center;
        justify-content: center;*/
        height: 100%;

        .cycle {
            width: 120px;
            height: 120px;
            background: #146147;
            animation-name: cycle;
            // animation-fill-mode: backwards;
            animation-duration: 1.5s;
            // animation-play-state: running;
            animation-iteration-count: infinite;
        }

        .ball {
            position: absolute;
            top: 100px;
            right: 100px;
            transition: all .5s cubic-bezier(0.46, -0.13, 0.86, 0.00);
            width: 50px;
            height: 50px;
            background: #fff;
            /*top: 100px;*/
            transform: translate3d(0, 100px, 0);

            &.active {
                top: 1100px;
                /*transform: translate3d(0, 1100px, 0);*/

                .inner {
                    left: 100px;
                   /*transform: translate3d(100px, 0, 0);*/
                }
            }

            .inner {
                /*position: absolute;*/
                transition: all .5s linear;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #000;
                /*left: 600px;*/
                /*transform: translate3d(600px, 0, 0);*/
            }
        }
    }

    @keyframes cycle {
        0% {
            border-radius: 0;
            transform: scale(1) rotate(0deg);
        }
        50% {
            border-radius: 50%;
            transform: scale(.5) rotate(180deg);
        }
        100% {
            border-radius: 0;
            transform: scale(1) rotate(360deg);
        }
    }

    @keyframes slidein {
        from {
            transform: translate3d(0px, 0px, 0)
        }
        to {
            transform: translate3d(200px, 200px, 0)
        }
    }
</style>
