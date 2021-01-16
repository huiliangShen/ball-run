<template>
    <div class="store">
        <div class="store-header">商家内容</div>
        <div class="store-body">
            <aside>
                <ul class="store-category-list">
                    <li class="store-category-item" v-for="item in 20" :key="item">分类{{item}}</li>
                </ul>
            </aside>
            <div class="store-content">
                <ul class="store-good-list">
                    <li class="store-good-item" v-for="item in 20" :key="item">
                        <div class="store-good-item-img"></div>
                        <div class="store-good-item-detail">
                            <h2>超级爆款{{item}}</h2>
                            <p>月售2000</p>
                            <p>36.6</p>
                        </div>
                        <a class="add-good" @click.prevent="addGood">+</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '../../helper'
    export default {
        methods: {
            addGood(e) {
                bus.$emit('addBar', e.target)
            }
        }
    }
</script>

<style lang="less" scoped>
    .store {
        display: flex;
        flex-direction: column;
        height: 100%;
        .store-header {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 220px;
            background: rgba(135, 206, 250, 0.99);
            font-size: 40px;
        }
        .store-body {
            flex: 1;
            display: flex;
            overflow: hidden;

            aside {
                height: 100%;
                width: 180px;
                border-right: 1px solid #eee;
                overflow: auto;

                .store-category-list {
                    text-align: center;
                    .store-category-item {
                        padding: 15px;
                        font-size: 36px;
                        border-bottom: 1px solid #eee;
                    }
                }
            }
            .store-content {
                flex: 1;
                height: 100%;
                overflow: auto;
                .store-good-list {
                    .store-good-item {
                        position: relative;
                        display: flex;
                        align-items: center;
                        padding: 15px;
                        border-bottom: 1px solid #eee;
                        .store-good-item-img {
                            width: 130px;
                            height: 130px;
                            background: deepskyblue;
                        }
                        .store-good-item-detail {
                            flex: 1;
                            margin-left: 15px;
                            h2 {
                                font-size: 34px;
                            }
                            p {
                                padding-top: 20px;
                                font-size: 24px;
                                &:last-of-type {
                                    font-size: 30px;
                                    color: red;
                                }
                            }
                        }
                        .add-good {
                            position: absolute;
                            bottom: 10px;
                            right: 25px;
                            width: 45px;
                            height: 45px;
                            line-height: 40px;
                            text-align: center;
                            border-radius: 50%;
                            color: #fff;
                            background: deepskyblue;
                        }
                    }
                }
            }
        }
    }
</style>
