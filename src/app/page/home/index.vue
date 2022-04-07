<template>
    <div class="home">
        <button type="button" @click="go">查看详情</button>
        <ul>
            <li v-for="i in 20" :key="i">我就测试下{{i}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import '@/index.less'
    export default {
        methods: {
            go() {
                this.$router.push('/detail')
            }
        }
    }
</script>

<style lang="less" scoped>
    .home {
        ul {
            display: flex;
            flex-direction: column;
            margin: 10px 0 10px 10px;

            li {
                padding: 10px;
            }
        }
    }
</style>
