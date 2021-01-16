<template>
    <div id="app">
        <div class="main">
            <router-view></router-view>
        </div>
        <ul class="tab-list">
            <li class="tab-item box" ref="box">box</li>
            <router-link tag="li" class="tab-item" to="/">首页</router-link>
            <router-link tag="li" class="tab-item" to="/store">购物</router-link>
            <router-link tag="li" class="tab-item" to="/my">我的</router-link>
        </ul>
        <transition :duration="500" v-on:before-enter="beforeEnter"
                    v-on:after-enter="afterEnter"
                    v-bind:css="false"
                    v-on:enter="enter">
            <div class="ball" ref="ball" v-show="flag">
                <div class="inner" ref="ballInner"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import bus from './helper'

    export default {
        data() {
            return {
                flag: false
            }
        },
        methods: {
            addBar(target) {
                // const box = this.box.getBoundingClientRect()
                this.tar = target.getBoundingClientRect()
                this.$nextTick(() => {
                    this.flag = true
                })
            },
            beforeEnter: function (el) {
                el.style.transform = `translate3d(0, ${this.tar.y}px, 0)`
                el.children[0].style.transform = `translate3d(${this.tar.x}px, 0, 0)`
            },
            enter: function (el, done) {
                // 使用强制重绘，防止浏览器优化重排，导致只出现最后一刻的显示
                // 强制重绘会让渲染引擎重绘当前界面后继续后面的逻辑
                const rp = el.clientHeight
                console.log(rp)
                this.$nextTick(() => {
                    el.style.transform = `translate3d(0, ${this.box.y}px, 0)`
                    el.children[0].style.transform = `translate3d(${this.box.x}px, 0, 0)`
                    done()
                })
            },
            afterEnter() {
                setTimeout(() => {
                    this.flag = false
                }, 520)
            }
        },
        mounted() {
            this.tar = null
            this.box = this.$refs.box.getBoundingClientRect()
            bus.$off('addBar').$on('addBar', this.addBar)
        }
    }
</script>

<style scoped lang="less">
    #app {
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1;
        overflow-y: auto;
    }

    .tab-list {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background: #eee;
        height: 90px;
        line-height: 90px;
        font-size: 24px; /*no*/

        .tab-item {
            color: #000;

            &.router-link-exact-active {
                color: rgb(25, 212, 25);
            }

            &.box {
                width: 60px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                border-radius: 15px;
                background: skyblue;
            }
        }
    }

    .ball {
        position: fixed;
        transition: all .5s cubic-bezier(0.46, -0.13, 0.86, 0.00);
        width: 50px;
        height: 50px;
        background: rgba(0, 0, 0, 0);
        z-index: 99;

        .inner {
            transition: all .5s linear;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: skyblue;
        }
    }
</style>
