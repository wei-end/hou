
const dataRes = function (params) {
    let token = params.url.split('?')[1].split('=')[1]
    if (token == 'token_admin') {
        return {
            code: 201,
            data: {
                list: [
                    {
                        meta: {
                            title: "mock接口",
                        },
                        index: "/home/mock",
                        component: '/mock/mock',
                        path: 'mock',
                        name: 'mock'
                    },
                    {
                        meta: {
                            title: "测试页面",
                        },
                        index: "/home/ceshi",
                        component: '/ceshi/ceshi',
                        path: 'ceshi',
                        name: 'ceshi'
                    },
                    {
                        meta: {
                            title: "扩展包",
                        },
                        index: "/a",
                        children: [
                            {
                                index: "/home/pinyin",
                                meta: {
                                    title: "拼音插件",
                                },
                                component: '/plugin/pinyin/pinyin',
                                path: 'pinyin'
                            },
                            {
                                index: "/home/clip",
                                meta: {
                                    title: "复制",
                                },
                                component: '/plugin/clipboard/clipboard',
                                path: 'clip'
                            },
                            {
                                index: "/home/scroll",
                                meta: {
                                    title: "表格无限滚动插件",
                                },
                                component: '/plugin/tableScroll/tableScroll',
                                path: 'scroll'
                            },
                            {
                                index: "/home/draggle",
                                meta: {
                                    title: "vue拖拽插件",
                                },
                                component: '/plugin/vuedraggle/vuedraggle',
                                path: 'draggle'
                            },
                            {
                                index: "/home/chinaEng",
                                meta: {
                                    title: "中英文切换插件",
                                },
                                component: '/plugin/chinaEng/chinaEng',
                                path: 'chinaEng'
                            },
                        ],
                    },
                    {
                        index: "/b",
                        meta: {
                            title: "文件",
                        },
                        children: [
                            {
                                index: "/home/upload",
                                meta: {
                                    title: "文件上传",
                                },
                                component: '/file/upload/upload',
                                path: 'upload'
                            },
                            {
                                index: "/ba",
                                meta: {
                                    title: "xlsx",
                                },
                                children: [
                                    {
                                        index: "/home/xlsx",
                                        meta: {
                                            title: "xlsx",
                                        },
                                        component: '/file/xlsx/index',
                                        path: 'xlsx'
                                    },
                                    {
                                        index: "/home/xpreview",
                                        meta: {
                                            title: "xlsx预览",
                                        },
                                        component: '/file/xlsx/preview',
                                        path: 'xpreview'
                                    },
                                ]
                            },
                            {
                                index: "/bb",
                                meta: {
                                    title: "doc",
                                },
                                children: [
                                    {
                                        index: "/home/doc",
                                        meta: {
                                            title: "doc预览",
                                        },
                                        component: '/file/doc/preview',
                                        path: 'doc'
                                    },
                                ]
                            },
                            {
                                index: "/home/bc",
                                meta: {
                                    title: "canvas",
                                },
                                children: [
                                    {
                                        index: '/home/zip',
                                        meta: {
                                            title: "图片压缩",
                                        },
                                        component: '/file/canvas/zip',
                                        path: 'zip'
                                    },
                                    {
                                        index: '/home/snipatepage',
                                        meta: {
                                            title: "页面截图",
                                        },
                                        component: '/file/canvas/snipatePage',
                                        path: 'snipatepage'
                                    },
                                    {
                                        index: '/home/filter',
                                        meta: {
                                            title: "滤镜",
                                        },
                                        component: '/file/canvas/filter',
                                        path: 'filter'
                                    },
                                    {
                                        index: '/home/snipateimg',
                                        meta: {
                                            title: "剪贴图片",
                                        },
                                        component: '/file/canvas/snipateImg',
                                        path: 'snipateimg'
                                    },
                                ]

                            },
                        ],
                    },
                    {
                        index: "/c",
                        meta: {
                            title: "知识总结",
                        },
                        children: [
                            {
                                index: "/ca",
                                meta: {
                                    title: "插槽",
                                },
                                children: [
                                    {
                                        index: "/home/niming",
                                        meta: {
                                            title: "匿名插槽",
                                        },
                                        component: '/knowledge/slot/niming',
                                        path: 'niming'
                                    },
                                    {
                                        index: "/home/juming",
                                        meta: {
                                            title: "具名插槽",
                                        },
                                        component: '/knowledge/slot/juming',
                                        path: 'juming'
                                    },
                                    {
                                        index: "/home/zyy",
                                        meta: {
                                            title: "作用域插槽",
                                        },
                                        component: '/knowledge/slot/zyy',
                                        path: 'zyy'
                                    },
                                ],
                            },
                            {
                                index: '/cb',
                                meta: {
                                    title: 'iframe'
                                },
                                children: [
                                    {
                                        index: "/home/iframe",
                                        meta: {
                                            title: "iframe",
                                        },
                                        component: '/knowledge/iframe/index',
                                        path: 'iframe'
                                    },
                                ]
                            },
                            {
                                index: '/cc',
                                meta: {
                                    title: '静态文件切换'
                                },
                                children: [
                                    {
                                        index: "/home/staticimg",
                                        meta: {
                                            title: "静态图片切换",
                                        },
                                        component: '/knowledge/staticfile/staticImg/image',
                                        path: 'staticimg'
                                    },
                                    {
                                        index: "/home/headerimg",
                                        meta: {
                                            title: "静态头像切换",
                                        },
                                        component: '/knowledge/staticfile/headerImg/index',
                                        path: 'headerimg'
                                    },
                                ]
                            },
                            {
                                index: '/cd',
                                meta: { title: '组件封装' },
                                children: [
                                    {
                                        index: "/home/form",
                                        meta: {
                                            title: "form表单传值",
                                        },
                                        component: '/knowledge/componentpackage/form/index.vue',
                                        path: 'form'
                                    },
                                    {
                                        index: "/home/component",
                                        meta: {
                                            title: "动态组件",
                                        },
                                        component: '/knowledge/componentpackage/component-package/index.vue',
                                        path: 'component'
                                    },
                                    {
                                        index: "/home/calendar",
                                        meta: {
                                            title: "render日历",
                                        },
                                        component: '/knowledge/componentpackage/calendar/index.vue',
                                        path: 'calendar'
                                    },
                                    {
                                        index: "/home/drag",
                                        meta: {
                                            title: "拖拽弹窗",
                                        },
                                        component: '/knowledge/componentpackage/drag/index.vue',
                                        path: 'drag'
                                    },
                                ]
                            },
                            {
                                index: '/ce',
                                meta: {
                                    title: '锚点跳转'
                                },
                                children: [
                                    {
                                        index: "/home/anchor",
                                        meta: {
                                            title: "锚点跳转",
                                        },
                                        component: '/knowledge/anchorPoint/index',
                                        path: 'anchor'
                                    }
                                ]
                            },
                            {
                                index: '/cf',
                                meta: {
                                    title: '划线评论'
                                },
                                children: [
                                    {
                                        index: "/home/diyline",
                                        meta: {
                                            title: "划线评论",
                                        },
                                        component: '/knowledge/diyLine/index',
                                        path: 'diyline'
                                    }
                                ]
                            }

                        ],
                    },
                    {
                        index: '/d',
                        meta: { title: '自定义指令' },
                        children: [
                            {
                                index: "/home/diydom",
                                meta: {
                                    title: '点击dom不是自己'
                                },
                                component: '/directive/clickOutside/index',
                                path: 'diydom'
                            },
                            {
                                index: "/home/diydrag",
                                meta: {
                                    title: '拖拽'
                                },
                                component: '/directive/drag/index',
                                path: 'diydrag'
                            },
                            {
                                index: "/home/textelli",
                                meta: {
                                    title: '文本溢出'
                                },
                                component: '/directive/text/index',
                                path: 'textelli'
                            }
                        ]
                    }
                ]
            }
        }
    } else {
        return {
            code: 201,
            data: {
                list: [
                    {
                        meta: {
                            title: "mock接口",
                        },
                        index: "/home/mock",
                        component: '/mock/mock',
                        path: 'mock',
                        name: 'mock'
                    },
                ]
            }
        }

    }
}
export {
    dataRes
}

