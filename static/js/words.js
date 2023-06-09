const colorList = [
    "rgb(12,57,176)",
    "rgb(16,83,190)",
    "rgb(18,102,201)",
    "rgb(21,122,214)",
    "rgb(25,140,220)",
    "rgb(29,161,223)",
    "rgb(32,180,226)",
    "rgb(37,205,231)"
]
option = {
    tooltip: {
        backgroundColor: "#fff",
        axisPointer: {
            type: "none"
        },
        textStyle: {
            color: "#565656",
            lineHeight: 28
        },
        padding: 12,
        extraCssText: "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;",
        formatter: function(p) {
            return `热度：${p.data.count}<br/>趋势：${(
              p.data.heat_diff_num * 100
            ).toFixed(2)}%`;
        }
    },
    series: [{
        type: "wordCloud",

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
        shape: "circle",
        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        // maskImage: "",

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: "center",
        top: "center",
        width: "80%",
        height: "80%",
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [20, 40],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [0, 0],

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 16,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // Global text style
        textStyle: {
            normal: {
                fontFamily: "sans-serif",
                color: function() {
                    let index = Math.floor(Math.random() * colorList.length);
                    return colorList[index];
                }
            },
            emphasis: {
                fontWeight: "bold"
            }
        },
        data: [{
            "word": "unine",
            "count": 2041,
            "heat_diff_num": 2040,
            "name": "unine",
            "value": 2040
        }, {
            "word": "生日快乐",
            "count": 13369,
            "heat_diff_num": 667.45,
            "name": "生日快乐",
            "value": 667.45
        }, {
            "word": "男星",
            "count": 512,
            "heat_diff_num": 511,
            "name": "男星",
            "value": 511
        }, {
            "word": "迪士尼",
            "count": 961,
            "heat_diff_num": 479.5,
            "name": "迪士尼",
            "value": 479.5
        }, {
            "word": "羽毛",
            "count": 11753,
            "heat_diff_num": 404.2758620689655,
            "name": "羽毛",
            "value": 404.2758620689655
        }, {
            "word": "超级",
            "count": 3083,
            "heat_diff_num": 384.375,
            "name": "超级",
            "value": 384.375
        }, {
            "word": "教程",
            "count": 615,
            "heat_diff_num": 306.5,
            "name": "教程",
            "value": 306.5
        }, {
            "word": "安卓",
            "count": 4405,
            "heat_diff_num": 292.6666666666667,
            "name": "安卓",
            "value": 292.6666666666667
        }, {
            "word": "信用",
            "count": 989,
            "heat_diff_num": 196.8,
            "name": "信用",
            "value": 196.8
        }, {
            "word": "pv",
            "count": 1630,
            "heat_diff_num": 180.11111111111111,
            "name": "pv",
            "value": 180.11111111111111
        }, {
            "word": "苹果",
            "count": 532,
            "heat_diff_num": 176.33333333333334,
            "name": "苹果",
            "value": 176.33333333333334
        }, {
            "word": "互关",
            "count": 748,
            "heat_diff_num": 148.6,
            "name": "互关",
            "value": 148.6
        }, {
            "word": "注册",
            "count": 1232,
            "heat_diff_num": 111,
            "name": "注册",
            "value": 111
        }, {
            "word": "大佬",
            "count": 817,
            "heat_diff_num": 101.125,
            "name": "大佬",
            "value": 101.125
        }, {
            "word": "网页链接",
            "count": 1522,
            "heat_diff_num": 100.46666666666667,
            "name": "网页链接",
            "value": 100.46666666666667
        }, {
            "word": "预告",
            "count": 464,
            "heat_diff_num": 76.33333333333333,
            "name": "预告",
            "value": 76.33333333333333
        }, {
            "word": "期待",
            "count": 463,
            "heat_diff_num": 65.14285714285714,
            "name": "期待",
            "value": 65.14285714285714
        }, {
            "word": "恋爱",
            "count": 543,
            "heat_diff_num": 59.333333333333336,
            "name": "恋爱",
            "value": 59.333333333333336
        }, {
            "word": "周边",
            "count": 450,
            "heat_diff_num": 55.25,
            "name": "周边",
            "value": 55.25
        }, {
            "word": "主线",
            "count": 535,
            "heat_diff_num": 43.583333333333336,
            "name": "主线",
            "value": 43.583333333333336
        }, {
            "word": "ios",
            "count": 2718,
            "heat_diff_num": 36.75,
            "name": "ios",
            "value": 36.75
        }, {
            "word": "微博",
            "count": 1086,
            "heat_diff_num": 35.2,
            "name": "微博",
            "value": 35.2
        }, {
            "word": "氪金",
            "count": 709,
            "heat_diff_num": 34.45,
            "name": "氪金",
            "value": 34.45
        }, {
            "word": "官方",
            "count": 458,
            "heat_diff_num": 34.23076923076923,
            "name": "官方",
            "value": 34.23076923076923
        }, {
            "word": "可爱",
            "count": 2280,
            "heat_diff_num": 33.02985074626866,
            "name": "可爱",
            "value": 33.02985074626866
        }, {
            "word": "吵架",
            "count": 560,
            "heat_diff_num": 30.11111111111111,
            "name": "吵架",
            "value": 30.11111111111111
        }, {
            "word": "开心",
            "count": 871,
            "heat_diff_num": 30.107142857142858,
            "name": "开心",
            "value": 30.107142857142858
        }, {
            "word": "老公",
            "count": 551,
            "heat_diff_num": 29.61111111111111,
            "name": "老公",
            "value": 29.61111111111111
        }, {
            "word": "回来",
            "count": 608,
            "heat_diff_num": 29.4,
            "name": "回来",
            "value": 29.4
        }, {
            "word": "衣服",
            "count": 699,
            "heat_diff_num": 29.391304347826086,
            "name": "衣服",
            "value": 29.391304347826086
        }, {
            "word": "踢踢",
            "count": 724,
            "heat_diff_num": 29.166666666666668,
            "name": "踢踢",
            "value": 29.166666666666668
        }, {
            "word": "快乐",
            "count": 907,
            "heat_diff_num": 28.258064516129032,
            "name": "快乐",
            "value": 28.258064516129032
        }, {
            "word": "客服",
            "count": 733,
            "heat_diff_num": 26.14814814814815,
            "name": "客服",
            "value": 26.14814814814815
        }, {
            "word": "升华",
            "count": 569,
            "heat_diff_num": 26.095238095238095,
            "name": "升华",
            "value": 26.095238095238095
        }, {
            "word": "生日",
            "count": 950,
            "heat_diff_num": 23.358974358974358,
            "name": "生日",
            "value": 23.358974358974358
        }, {
            "word": "李泽言",
            "count": 3382,
            "heat_diff_num": 23.15714285714286,
            "name": "李泽言",
            "value": 23.15714285714286
        }, {
            "word": "男主",
            "count": 606,
            "heat_diff_num": 21.444444444444443,
            "name": "男主",
            "value": 21.444444444444443
        }, {
            "word": "卡面",
            "count": 567,
            "heat_diff_num": 20.807692307692307,
            "name": "卡面",
            "value": 20.807692307692307
        }, {
            "word": "粉丝",
            "count": 649,
            "heat_diff_num": 20.633333333333333,
            "name": "粉丝",
            "value": 20.633333333333333
        }, {
            "word": "时间",
            "count": 431,
            "heat_diff_num": 20.55,
            "name": "时间",
            "value": 20.55
        }, {
            "word": "叠纸",
            "count": 831,
            "heat_diff_num": 19.775,
            "name": "叠纸",
            "value": 19.775
        }, {
            "word": "视频",
            "count": 456,
            "heat_diff_num": 19.727272727272727,
            "name": "视频",
            "value": 19.727272727272727
        }, {
            "word": "进化",
            "count": 588,
            "heat_diff_num": 19.275862068965516,
            "name": "进化",
            "value": 19.275862068965516
        }, {
            "word": "明天",
            "count": 646,
            "heat_diff_num": 19.1875,
            "name": "明天",
            "value": 19.1875
        }, {
            "word": "好看",
            "count": 1125,
            "heat_diff_num": 18.736842105263158,
            "name": "好看",
            "value": 18.736842105263158
        }, {
            "word": "夫人",
            "count": 3994,
            "heat_diff_num": 18.294685990338163,
            "name": "夫人",
            "value": 18.294685990338163
        }, {
            "word": "东西",
            "count": 454,
            "heat_diff_num": 17.916666666666668,
            "name": "东西",
            "value": 17.916666666666668
        }, {
            "word": "好多",
            "count": 481,
            "heat_diff_num": 17.5,
            "name": "好多",
            "value": 17.5
        }, {
            "word": "剧情",
            "count": 1665,
            "heat_diff_num": 17.296703296703296,
            "name": "剧情",
            "value": 17.296703296703296
        }, {
            "word": "老李",
            "count": 2078,
            "heat_diff_num": 16.316666666666666,
            "name": "老李",
            "value": 16.316666666666666
        }, {
            "word": "复刻",
            "count": 1461,
            "heat_diff_num": 15.988372093023257,
            "name": "复刻",
            "value": 15.988372093023257
        }, {
            "word": "洛洛",
            "count": 2998,
            "heat_diff_num": 15.937853107344633,
            "name": "洛洛",
            "value": 15.937853107344633
        }, {
            "word": "希望",
            "count": 1197,
            "heat_diff_num": 15.175675675675675,
            "name": "希望",
            "value": 15.175675675675675
        }, {
            "word": "钻石",
            "count": 515,
            "heat_diff_num": 15.09375,
            "name": "钻石",
            "value": 15.09375
        }, {
            "word": "sr",
            "count": 689,
            "heat_diff_num": 15.023255813953488,
            "name": "sr",
            "value": 15.023255813953488
        }, {
            "word": "女主",
            "count": 437,
            "heat_diff_num": 14.607142857142858,
            "name": "女主",
            "value": 14.607142857142858
        }, {
            "word": "狗叠",
            "count": 1782,
            "heat_diff_num": 13.974789915966387,
            "name": "狗叠",
            "value": 13.974789915966387
        }, {
            "word": "安官",
            "count": 577,
            "heat_diff_num": 13.794871794871796,
            "name": "安官",
            "value": 13.794871794871796
        }, {
            "word": "交易",
            "count": 1480,
            "heat_diff_num": 13.509803921568627,
            "name": "交易",
            "value": 13.509803921568627
        }, {
            "word": "起子",
            "count": 1299,
            "heat_diff_num": 13.119565217391305,
            "name": "起子",
            "value": 13.119565217391305
        }, {
            "word": "评论",
            "count": 1363,
            "heat_diff_num": 12.495049504950495,
            "name": "评论",
            "value": 12.495049504950495
        }, {
            "word": "凌肖",
            "count": 2415,
            "heat_diff_num": 12.416666666666666,
            "name": "凌肖",
            "value": 12.416666666666666
        }, {
            "word": "白起",
            "count": 6127,
            "heat_diff_num": 12.407002188183807,
            "name": "白起",
            "value": 12.407002188183807
        }, {
            "word": "谢谢",
            "count": 4156,
            "heat_diff_num": 11.787692307692307,
            "name": "谢谢",
            "value": 11.787692307692307
        }, {
            "word": "金币",
            "count": 508,
            "heat_diff_num": 11.7,
            "name": "金币",
            "value": 11.7
        }, {
            "word": "太太",
            "count": 2969,
            "heat_diff_num": 11.370833333333334,
            "name": "太太",
            "value": 11.370833333333334
        }, {
            "word": "约会",
            "count": 521,
            "heat_diff_num": 10.840909090909092,
            "name": "约会",
            "value": 10.840909090909092
        }, {
            "word": "sp",
            "count": 914,
            "heat_diff_num": 10.012048192771084,
            "name": "sp",
            "value": 10.012048192771084
        }, {
            "word": "姐妹",
            "count": 6893,
            "heat_diff_num": 9.83805031446541,
            "name": "姐妹",
            "value": 9.83805031446541
        }, {
            "word": "小号",
            "count": 440,
            "heat_diff_num": 8.777777777777779,
            "name": "小号",
            "value": 8.777777777777779
        }, {
            "word": "体力",
            "count": 572,
            "heat_diff_num": 7.411764705882353,
            "name": "体力",
            "value": 7.411764705882353
        }, {
            "word": "吸吸",
            "count": 3183,
            "heat_diff_num": 7.246113989637306,
            "name": "吸吸",
            "value": 7.246113989637306
        }, {
            "word": "恋与制作人",
            "count": 45901,
            "heat_diff_num": 6.704095334004699,
            "name": "恋与制作人",
            "value": 6.704095334004699
        }, {
            "word": "活动",
            "count": 2796,
            "heat_diff_num": 6.096446700507614,
            "name": "活动",
            "value": 6.096446700507614
        }, {
            "word": "抽到",
            "count": 704,
            "heat_diff_num": 6.04,
            "name": "抽到",
            "value": 6.04
        }, {
            "word": "星河",
            "count": 496,
            "heat_diff_num": 5.2784810126582276,
            "name": "星河",
            "value": 5.2784810126582276
        }, {
            "word": "少女",
            "count": 9373,
            "heat_diff_num": 4.102340772999455,
            "name": "少女",
            "value": 4.102340772999455
        }, {
            "word": "超现实",
            "count": 9306,
            "heat_diff_num": 4.0880262438490975,
            "name": "超现实",
            "value": 4.0880262438490975
        }, {
            "word": "恋爱吧",
            "count": 9184,
            "heat_diff_num": 4.057268722466961,
            "name": "恋爱吧",
            "value": 4.057268722466961
        }, {
            "word": "许墨",
            "count": 2642,
            "heat_diff_num": 2.931547619047619,
            "name": "许墨",
            "value": 2.931547619047619
        }, {
            "word": "周棋洛",
            "count": 2864,
            "heat_diff_num": 1.7778855480116391,
            "name": "周棋洛",
            "value": 1.7778855480116391
        }, {
            "word": "喜欢",
            "count": 3233,
            "heat_diff_num": 1.7774914089347078,
            "name": "喜欢",
            "value": 1.7774914089347078
        }, {
            "word": "ssr",
            "count": 1701,
            "heat_diff_num": 1.2955465587044535,
            "name": "ssr",
            "value": 1.2955465587044535
        }, {
            "word": "奔赴",
            "count": 11753,
            "heat_diff_num": 0,
            "name": "奔赴",
            "value": 0
        }, {
            "word": "飘舞",
            "count": 11753,
            "heat_diff_num": 0,
            "name": "飘舞",
            "value": 0
        }, {
            "word": "开口",
            "count": 5845,
            "heat_diff_num": 0,
            "name": "开口",
            "value": 0
        }, {
            "word": "心领神会",
            "count": 5778,
            "heat_diff_num": 0,
            "name": "心领神会",
            "value": 0
        }, {
            "word": "无需",
            "count": 5505,
            "heat_diff_num": 0,
            "name": "无需",
            "value": 0
        }, {
            "word": "话语",
            "count": 4406,
            "heat_diff_num": 0,
            "name": "话语",
            "value": 0
        }, {
            "word": "ins",
            "count": 2122,
            "heat_diff_num": 0,
            "name": "ins",
            "value": 0
        }, {
            "word": "油管",
            "count": 1254,
            "heat_diff_num": 0,
            "name": "油管",
            "value": 0
        }, {
            "word": "0409",
            "count": 1251,
            "heat_diff_num": 0,
            "name": "0409",
            "value": 0
        }, {
            "word": "动画",
            "count": 1104,
            "heat_diff_num": 0,
            "name": "动画",
            "value": 0
        }, {
            "word": "备案",
            "count": 844,
            "heat_diff_num": 0,
            "name": "备案",
            "value": 0
        }, {
            "word": "vp",
            "count": 816,
            "heat_diff_num": 0,
            "name": "vp",
            "value": 0
        }, {
            "word": "520",
            "count": 594,
            "heat_diff_num": 0,
            "name": "520",
            "value": 0
        }, {
            "word": "偶像",
            "count": 549,
            "heat_diff_num": 0,
            "name": "偶像",
            "value": 0
        }, {
            "word": "艺人",
            "count": 518,
            "heat_diff_num": 0,
            "name": "艺人",
            "value": 0
        }, {
            "word": "饭局",
            "count": 512,
            "heat_diff_num": 0,
            "name": "饭局",
            "value": 0
        }, {
            "word": "脸书",
            "count": 464,
            "heat_diff_num": 0,
            "name": "脸书",
            "value": 0
        }]
    }]
}