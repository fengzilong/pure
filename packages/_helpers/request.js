/**
 * request.js 
 * @param {string} url  发送请求的url
 * @param {obj} opts 配置对象
 *     @property {boolean} async 是否异步 true: 异步 false: 同步 [默认值: true]
 *     @property {obj} data 传输的数据 [默认值: {}]
 *     @property {string} type 传输的数据类型  [默认值: 'json']
 *     @property {string} method 请求类型 [默认值: 'GET']
 *     @property {boolean} reset 请求是否带上时间戳避免缓存 true: 带时间戳 false: 不带时间戳 [默认值: true]
 *     @property {boolean} progress 上传是否显示进度条 true: 显示 false: 不显示 [默认值: false]
 */
var request = function(url, opts) {
    //初始化opts
    var opts = opts || {
        async: true,
        data: {},
        type: 'json',
        method: 'GET',
        reset: true
    };
    //1.创建XHR对象
    var XHR = createXHR();
    //2.连接服务器
    var url = exchangeURL(url, opts.reset);
    XHR.open(opts.method, url, opts.async);

    if(opts.progress === true) {
        opts.data = exchangeImgData(opts.data);
        XHR.upload.addEventListener('progress',function(evt) {
            if(evt.lengthComputable) {
                var complete = (evt.loaded / evt.total * 100 | 0);
                console.log(evt);
            }
        },false);
        XHR.upload.addEventListener('load',function(evt) {
            console.log(evt);
        },false);
    }
    //3.发送数据
    // opts.data = exchangeData(opts.data);
    XHR.send(opts.data);
    //4.接收返回数据
    XHR.onreadyState = getState.bind(this);
};

/**
 * 创建XHR对象
 */
var createXHR = function() {
    if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }else if(window.ActiveXObject) {
        //IE6.0
        return new ActiveXObject("Microsoft.XMLHttp");
    }else{
        alert('您的浏览器不支持XHR对象，请升级浏览器');
    }
};

/**
 * 转换URL的函数
 * @param {string} url 发送请求的url
 * @param {boolean} reset 请求是否带上时间戳避免缓存 true: 带时间戳 false: 不带时间戳 [默认值: true]
 */
var exchangeURL = function(url, reset) {
    if(reset) {
        return url+'?t='+new Date().getTime();
    }else {
        return url;
    }
};

/**
 * 转换Data的函数
 * @param {obj} data 传输的数据 [默认值: {}]
 */
var exchangeData = function(data) {
    var arr = [];
    for (var i in data) { 
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
    return arr.join('&');
};

/**
 * 转换Data的函数,专门给图片使用
 * @param {obj} data 传输的数据 [默认值: {}]
 */
var exchangeImgData = function(data) {
    imgData = data.split(',')[1];
    imgData = window.atob(imgData);
    var ia = new Uint8Array(imgData.length);
    for (var j = 0; j < imgData.length; j++) {
        ia[j] = imgData.charCodeAt(j);
    };
    // canvas.toDataURL 返回的默认格式就是 image/jpeg
    var blob=new Blob([ia], {type:"image/jpeg"});
    var formData = new FormData();
    formData.append('file', blob);

    return formData; 
};

/**
 * 获取请求返回
 */
var getState = function() {
    if(this.readyState == 4) {
        if(this.status == 200) {
            opts.success(this.responseText);        
        }else {
            // opts.fail();
            alert('请求失败');         
        }
    }
};