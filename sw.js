/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/06/15/软件推荐/index.html","9741e940dd695d264ffafa36dae6601e"],["/2020/06/20/hello word/index.html","8177fbaccc9ebf3353b5eaf28d0b6583"],["/2020/06/22/guitar-learn/index.html","8a57d529cd47c2ec21a30684a1da87ac"],["/2020/06/24/Typora/index.html","c974c490fd3cc7c43a99465f1100b71d"],["/2020/06/26/Linux basic/index.html","6e551420ab423131a37485211e48eea9"],["/2020/06/29/butterfly优化/index.html","d2f2e4dc4f88b3a26a091e480c210a66"],["/2020/07/06/HTML/index.html","5d1ca639d2bb6497ad8cc6383a2a666c"],["/2020/07/07/my-qqmusic-mv/index.html","964646d0c48c3ca8856844d25dc36897"],["/2020/07/15/github项目/index.html","3df5816f47a19a3ea2337a6f7b1f570f"],["/2020/07/22/AndroidStudio/index.html","f5eaa6670d8af961b28225997751e7eb"],["/2020/07/26/工具制造/index.html","09d4b6bd851b5d08d408158cea39a436"],["/2020/07/26/谷歌插件/index.html","455167f4e021fba31010b0df7db90cab"],["/2020/07/29/优雅部署/index.html","e63387a8247636cfcd6e0dbf00356271"],["/2020/07/29/必备词汇/index.html","f7f084f2ea6dfa490be231a35b787ad0"],["/2020/08/01/电子技术操作与工艺实习/index.html","bddf0505cf3b431bd9cf4df4d02ee992"],["/2020/08/04/《一位吉他手的日记》/index.html","1abf383f44a71d66f7caf7d09d84684b"],["/2020/08/04/网页优化/index.html","877510dd14df1c05d656fd9f974f331a"],["/2020/08/09/ps/index.html","b4b595f374021e4ba62bc0b686e95d46"],["/2020/08/09/vue/index.html","fc82ef5a96e0c007d3602ebab0ca0284"],["/2020/08/10/Node-js/index.html","ecf19836da88ec2a5e3b7c9c348f3adb"],["/2020/08/11/bat文件/index.html","73a6875f622b919d861ea21f54cae34c"],["/2020/08/18/wget/index.html","28550ae8996ce4cbf663facdf9e8bbef"],["/2020/09/24/电路重点/index.html","1153723dacd482c317366c1c104e6f1c"],["/2020/10/20/单片机/index.html","64ee23bf0f7bc5cf32e16094ff920f18"],["/2020/11/13/考研高数/index.html","6fc6ef9e4d7eb75eda32a74cda307b85"],["/2020/12/14/自动控制原理笔记/index.html","95d2fe6b188ac356c07e5696fb30ab4b"],["/2021/02/18/双系统初体验2021年春节/index.html","0b35b7ed3001bb4104b609301b54e5ed"],["/404/index.html","3e76136a10b920e8028eb0e1de1ac1ed"],["/404/js/404.js","cf994da682d7dedc5b7391cdb1a92305"],["/Gallery/hacker/index.html","1875e6444f70c3e2564db8ce9433b11f"],["/Gallery/index.html","17b22ab1fbf4566d193dd39ba88a5559"],["/Gallery/qinshimingyue/index.html","4a9fe7ced8ca0b7356a1c9c9f159199f"],["/Gallery/xiaokang/index.html","145c3a36935fde900a027c10d9d92342"],["/Gallery/二次元/index.html","fe4a631f278a0af152ade5031ce6bc48"],["/about/index.html","a7598c3de49e0e603fea6c206287477a"],["/api/index.html","e58f154d33c63d45371838b50f7016d1"],["/archives/2020/06/index.html","971bdcd43dfec752de9b564e8914bbeb"],["/archives/2020/07/index.html","610f1c85751ed29ca7db04437d46b947"],["/archives/2020/08/index.html","92c1c666ff877e2dcdde076befb5587a"],["/archives/2020/09/index.html","0611ef9ff4138f9fde60381ffc760a73"],["/archives/2020/10/index.html","fd2ef477dfe6ea9b6a6a260820a925a5"],["/archives/2020/11/index.html","a8b162ac2945b5d36d1223fcbd56e65c"],["/archives/2020/12/index.html","2a55d92374a64f90fd251d500810f423"],["/archives/2020/index.html","f7dab9cc902a44e4119c3c50dd52e66b"],["/archives/2020/page/2/index.html","b173aeea5482ef2dd92577d6a2bc1465"],["/archives/2020/page/3/index.html","4cc8dc5ea3a6bbdce053cfde1a8253ca"],["/archives/2021/02/index.html","d3532b2c6ee0fe5de49a8b04b46f934a"],["/archives/2021/index.html","4c2f4b592ccb327718a4f72b9761c4cc"],["/archives/index.html","a5b0a222d70cf52857826432527afa16"],["/archives/page/2/index.html","edb16f896d9ac127c867cfdda312b627"],["/archives/page/3/index.html","ef8723155dd1715dcaa1796f39221004"],["/artitalk/index.html","b158f9e96e1f9a0cf79cb5237dca8cb9"],["/baidu_verify_UJo3F1rrsf.html","11c7a9ba91fe17cedd4a69c08168b369"],["/butterflyChange/css/kali.css","8485019bd41e562fc151bb5df1e20ee3"],["/butterflyChange/fonts/GreatVibes-Regular.ttf","5bf06596a053153248631d74f9fc4e28"],["/butterflyChange/fonts/站酷快乐体2016修订版.ttf","0aceab97af2cd21dc57f76aceb1b1722"],["/butterflyChange/fonts/站酷文艺体.ttf","e7cbdb104483959fceaa167cfa9cb77e"],["/butterflyChange/js/APlayer.min.js","d7f7a59543ba6e82364f9dea0bd33082"],["/butterflyChange/js/Meting.min.js","f26983e13395ca7da7bb81383ab46403"],["/butterflyChange/js/kali.js","252ef1ee1ee4ff98f489449e1581c103"],["/categories/dos命令/index.html","6ca6371cd90ff9b43fc82ae6a409af4c"],["/categories/github/index.html","74071eff739337d75685cd5b1a01fc00"],["/categories/hexo博客/index.html","79f051b4f69a52907097ace5e0482a8d"],["/categories/index.html","b35a4ba7371475bbfcda88a8c061b0e6"],["/categories/linux/index.html","b9d1b73b41ea9117fe844601e6ad6e34"],["/categories/markdown语法/index.html","0e4f475feaee33a0ca84c92d84ed01c0"],["/categories/ps/index.html","44963451bfc2b8d521ea100a0f5523e9"],["/categories/resume/index.html","61161046bae8fa6e5315de809d359bd0"],["/categories/持续部署/index.html","ec4dc6e94d7f8192e4168b4988f96ae2"],["/categories/插件/index.html","1627bb7ea15ef10f5453847b70235cd5"],["/categories/电工常备/index.html","c11908db0ec493ae2c8b789818eea53d"],["/categories/电气/index.html","bd401f4966f7635718061da7d5291c23"],["/categories/系统/index.html","87949ae4b81ab90ad22b99d72778a7c0"],["/categories/自控/index.html","d9a312d47d91904d1337a738c0a5a1a6"],["/categories/软件-神器/index.html","4aa65b55119ad6c158d960b97f6a05a1"],["/categories/面试笔记/HTML/index.html","289472f732c5a81da22214f35de03aa8"],["/categories/面试笔记/index.html","a9f037398513062cc79a4860653540c2"],["/categories/音乐-吉他/index.html","3802516addffcd34f17ae1925c0ceb0c"],["/css/index.css","1f3ebb519cc5580e4289660e9951cd45"],["/css/var.css","725704ebb9596c6958111623bd2bc565"],["/images/001-Windows下多个盘为节点的目录分支.png","c5acc013f0a2adcd3e0da5624cae7e4c"],["/images/001_OS作为接口的示意图.png","226a0e5396a000ef731e8b8e41835a3d"],["/images/001_SSH示意图.png","8cf30dbf96fe4129054c29c301ccc521"],["/images/001_Windows下的多个盘.png","8fecadf9c01459838cf50e3a7ddcd019"],["/images/001_ubuntu设置软件源.png","a9445dee75e17ce15079d6940a32c248"],["/images/001_大型机.png","4164aebe36cb372a619be4c90170db5e"],["/images/001_文件软硬链接示意图.png","6f9c47e12b54c236f9f8944a01b9d735"],["/images/001_组示意图.png","3814d47546ed45a2923ab0daa5218e40"],["/images/002_SCP示意图.png","8e6e3fd2504fc507cc37eb8b5185b1d9"],["/images/002_Ubuntu文件目录.png","581bf6b845913d67df5425aef1080e0e"],["/images/002_unix之父.png","eea7548969d9aea4e855a99f8b1d0475"],["/images/002_机房照片.jpg","68c405dfe00fc649ae0878a01b112082"],["/images/002_权限示意图.png","1759f172209c991e78b61c625257dc2a"],["/images/003-Linux的树形示意图.png","a1c0772f55f137c7992eebe05761ba9f"],["/images/003_SSH 免密码示意图.png","25936f44f56402a5dbce4819ba8d22f5"],["/images/003_su和exit示意图.png","1675dd470ee3839d932e9f2c68a5c523"],["/images/003_unix家谱.jpg","cb869b72739a749fa411eabae4fe2472"],["/images/003_镜像服务器示意图.png","cdcbf71425e8c370235269c52d71b985"],["/images/004_文件权限示意图.png","4a088de27a6cc8988db329f7dc1c1041"],["/images/004_林纳斯.jpg","f8844df53b0c70994db8adda9a3719ab"],["/images/005_ubuntu_qq.jpg","bb5031ab92987544ef159b5f4546be35"],["/images/14928325424356.jpg","7153af81a180a8e4bfd62d2cf4d04c11"],["/images/14928327078409.jpg","8b207551d1fb005da93e8e5e0286332e"],["/images/14928329271228.jpg","c6cc4a89ad1495f31205914e4612c2e3"],["/images/kali.png","f6001a28f9cb9a7cc47d52df2d342aff"],["/images/剑客.jpg","768063f93be3125f5dfc1e600b768944"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","42e54362534c08eef673fc73828ff31d"],["/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/link/index.html","46d805f47c8080e41e025af9afb13117"],["/messageboard/index.html","f02d51a73eb53a3e15aba56d1cb32519"],["/music/index.html","c72e0d6d2a82b8647040e5228c79af18"],["/page/2/index.html","edb915b4c1e31e7f54c173855b4b7b41"],["/page/3/index.html","9a5af0a9b47e1fcf472c4c225b568bfa"],["/pwa/144.png","4ff77345dfd0a18cb9f73ce7458f95d3"],["/pwa/198.png","70359a77dfa8fefd7727a8b5bc629528"],["/pwa/512.png","c62cca708eba346933a77afe14c106fa"],["/pwa/apple-touch-icon.png","008781d0646310ee92c697ce1882a96c"],["/pwa/safari-pinned-tab.svg","6c8d5bd7572c08eb82ba7261463c5eb6"],["/sw-register.js","9f9a10191fcb347427812cd12450d536"],["/tags/C51/index.html","70f929116a18b9fc0c5c36f9cfec07b6"],["/tags/HTML/index.html","de9a9e4d3942ca12cedd8ae65e4d44f5"],["/tags/Node-js/index.html","bfabc2e38ec2b8a30d2d48555692e5ff"],["/tags/Typora-编辑器-markdown/index.html","bb1ad9f18ed1c843ba16d9a85ab0bd10"],["/tags/bat/index.html","462a10fd834d436d2ea6c2d254032dc9"],["/tags/hexo-主题优化-butterfly2-3/index.html","c20d79f6668fb82319751d9c34f48475"],["/tags/index.html","2862e29a341f380ccf0407afc1a2508f"],["/tags/kali-何必在乎我是谁cover李宗盛-超清/index.html","87bec168bf2693a69e2ada0a12317952"],["/tags/linux-Ubuntu/index.html","f3878a7916cc8dcb22abc6b90db400fc"],["/tags/linux/index.html","784908fabaa423e03ebda9b4316fff66"],["/tags/ps技巧/index.html","f9f5f165304a8eb0d0d2659d93b420b1"],["/tags/vue-netlify/index.html","a0ba1afcb07a188b5a91fc3dbbd3d768"],["/tags/wget-curl-linux/index.html","92b42dc3b3a4969c4a544d2dd5ff4662"],["/tags/你好！/index.html","04b8194397025ca77729ae7beb55c6d9"],["/tags/单词/index.html","626bf4a801445f9e80b8c0181126cbea"],["/tags/安卓-开发-java/index.html","3b73b0cced2654eeb65e71ab4e49c7aa"],["/tags/张宇-武忠祥-高数-考研/index.html","90235f293d909628fb28825511847bb7"],["/tags/插件-谷歌/index.html","f7cefa25082e7ccfbc6581bc5dc950a7"],["/tags/炸弹-图床/index.html","e215a0aa33ccfdc227a5ee7e9e1482c2"],["/tags/特效/index.html","ab2d8aa22baccd435ed24d00b26cdecd"],["/tags/电子工艺/index.html","725eb6d6c019dbdca4046d6aae45ce6f"],["/tags/电路-词汇/index.html","f2896a12f088a4df1c40973c631d072f"],["/tags/自控-板书/index.html","09a6ff808f0286c27960a2e0c46a0f83"],["/tags/计算机-github/index.html","9a4f395e65e00f4bba8c6d5eacabca64"],["/tags/计算机-常识-软件/index.html","d17d5076338ccfa0fd71b4c0c2519367"],["/tags/面试/index.html","09a8beb3be5c8706f420651709c55e00"],["/tags/音乐-吉他/index.html","f7a8d24367a500d0d877cba1dd62b544"],["/tags/音乐-吉他手/index.html","237adfda32d10d54e591e5f16dded1d9"],["/个人主页/404.html","3e76136a10b920e8028eb0e1de1ac1ed"],["/个人主页/apple-touch-icon.png","8fe7b42feb7c4d6e05a99e17fb58f44e"],["/个人主页/assets/css/iconfont.css","c19ba4225d68a5b40921cb42c436b2e7"],["/个人主页/assets/css/vno.css","89bf6c57424a1fe149af8dc313dc28e8"],["/个人主页/assets/css/youziku.css","aef580d78cd1516a101cdb8e856ec4b8"],["/个人主页/assets/js/fetch.min.js","ad897729bd45a9f58c1470c8c5cb2586"],["/个人主页/assets/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/个人主页/assets/js/main.js","9ace73113214f0bc1251a43011400d45"],["/个人主页/css/snow.css","f3ccbfee2f8b61d327a41c42809977c3"],["/个人主页/index.html","2d90b0acfb6e66b2b089f1b88d5c7bc3"],["/个人主页/js/j.js","cf994da682d7dedc5b7391cdb1a92305"],["/个人主页/js/snow.js","3e66a28c5e44245307da0bf514730af1"],["/百度一下/css/style.css","2430227f91c9214acf188e38a2f33f9a"],["/百度一下/img/arrow.png","3827ccd99125adc9eb7624fb423e71cb"],["/百度一下/img/baidu_logo.png","d9c8750bed0b3c7d089fa7d55720d6cf"],["/百度一下/img/hand.png","0b2e66002f135da2499c4d10bcf39421"],["/百度一下/index.html","7ce0a841226ab127b1db8b800ea34e2d"],["/百度一下/js/base64.min.js","27d2a8f719fb69c08dba85b6ddb36b11"],["/百度一下/js/clipboard.min.js","af8ab36589315582ccdd82f22e84bffb"],["/百度一下/js/jquery.min.js","1d35678c5edbb639ab7aa5cce0856f57"],["/百度一下/js/script.js","aa8093180d64c3d39f60e74657f11075"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
