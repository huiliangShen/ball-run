<template>
    <div class="line" v-if="show">
        123
    </div>
</template>

<script>
    export default {
        name: 'vLine',
        props: {
            show: Boolean,
            line: [[1, 1], [2, 2], [3, 3], []]
        },
        watch: {
            show(val) {
                if (val) {
                    this.init()
                }
            }
        },
        methods: {
            init() {
                this.drawLine(1, [[10, 10], [20, 20], [20, 10]])
            },
            drawLine(t, points) {
               // const x = (1 - t) * A + t * B
            },
            /*commonLine(t, points) {
                if (points.length > 2) {
                    return []
                }
                const [x0, y0] = points[0]
                const [x1, y1] = points[1]
                const x = (1 - t) * x0 + t * x1
                const y = (1 - t) * y0 + t * y1

                return [x, y]
            }*/
        }
    }
</script>

<style scoped lang="less">
    .line {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 9;
        background: #fff;
    }
</style>
