<template>
    <div class="detail">
        <div class="back" @click="back">&langle;</div>
        <div class="detail-content" ref="detailContent">
            <div class="fliter" :style="blurStyle"/>
        </div>
        <div class="ul" ref="ul" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" :style="bgStyle">
            <ul>
                <li v-for="i in 20" :key="i">详情页测试下{{i}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        data() {
            return {
                originTop: 0,
                top: 0,
                blur: 0,
                touch: {
                    start: false,
                    y: 0
                }
            }
        },
        computed: {
            bgStyle() {
                return `top: ${this.top}px;`
            },
            blurStyle() {
                return `backdrop-filter:blur(${this.blur}px);`
            }
        },
        methods: {
            touchStart(e) {
                this.$refs.ul.style.transition = ''
                this.$refs.detailContent.style.transition = ''
                this.touch.start = true
                const {touches} = e
                if (touches.length > 0) {
                    this.touch.y = touches[0].pageY
                }
            },
            touchMove(e) {
                if (!this.touch.start) {
                    return false
                }
                const {touches} = e
                const y = touches[0].pageY
                const top = Math.floor(this.top + y - this.touch.y)
                if (top < this.originTop) {
                    this.top = top <= 40 ? 40 : top
                    this.blur = top >= this.originTop ? 0 : Math.floor((top * -1.05 + this.originTop) / 10)
                } else {
                    this.top = top
                    this.blur = 0
                    const deltaY = Math.abs(this.originTop - top)
                    const scale = 1 + deltaY / this.originTop
                    this.$refs.detailContent.style.transform = `scale(${scale < 1 ? 1 : scale})`
                }
                this.touch.y = y
            },
            touchEnd() {
                this.touch.start = false
                const y = this.touch.y
                const top = Math.floor(this.top + y - this.touch.y)
                if (top > this.originTop) {
                    this.$refs.ul.style.transition = 'all .2s'
                    this.$refs.detailContent.style.transition = 'all .2s'
                    this.top = this.originTop
                    this.$refs.detailContent.style.transform = 'scale(1)'
                } else {
                    this.$refs.ul.children[0].style.overflowY = 'auto'
                }
                this.touch.y = 0
            },
            back() {
                this.$router.back()
            }
        },
        mounted() {
            const detailContent = this.$refs.detailContent
            const height = detailContent.clientHeight
            this.originTop = this.top = Math.floor(height)
        }
    }
</script>

<style lang="less" scoped>
    .detail {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
        background: #110f0f;
        overflow: hidden;

        .back {
            position: absolute;
            top: 30px;
            left: 30px;
            z-index: 9;
            color: #fff;
            background: rgba(255, 255, 255, .3);
            width: 80px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            border-radius: 50%;
            font-weight: bolder;
        }

        .detail-content {
            position: relative;
            padding-top: 70%;
            height: 0;
            background-image: url("http://p.qpic.cn/music_cover/bglUEFSMMhA3eiblfHXvQRNdaS8PNdcfEUDH9AsGAiaJkafgBZKyUzdw/600?n=1");
            background-size: cover;
            transform-origin: top;

            .fliter {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .2);
            }
        }

        .ul {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            padding-left: 30px;
            background: #110f0f;
            color: #fff;

            ul {
                overflow: auto;
            }

            li {
                padding: 10px;
            }
        }
    }
</style>
