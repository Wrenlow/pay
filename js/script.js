let selectedButton = null;
function selectAmount(amount) {
    const button = event.target;
    if (selectedButton === button) {
        selectedButton.classList.remove('selected');
        selectedButton = null;
        document.getElementById('loading1').style.display = 'none';
        document.getElementById('qr-code').style.display = 'none';
        document.getElementById('qr-code-overlay').style.display = 'none';
        document.getElementById('paid-button').style.display = 'none';
        return;
    }
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }
    selectedButton = button;
    selectedButton.classList.add('selected');
    document.getElementById('loading1').style.display = 'block';
    document.getElementById('qr-code').style.display = 'none';
    document.getElementById('qr-code-overlay').style.display = 'none';
    document.getElementById('paid-button').style.display = 'none';
    setTimeout(() => {
        document.getElementById('loading1').style.display = 'none';
        document.getElementById('qr-code').style.display = 'block';
        setTimeout(() => {
            document.getElementById('qr-code-overlay').style.display = 'block';
            document.getElementById('paid-button').style.display = 'block';
        }, 20000);
    }, 1000);
}
function clickPaidButton() {
    document.getElementById('paid-button').style.display = 'none';
    document.getElementById('qr-code').style.display = 'none';
    document.getElementById('qr-code-overlay').style.display = 'none';
    document.getElementById('loading1').style.display = 'none';
    document.getElementById('loading2').style.display = 'none';
    document.getElementById('amount-buttons').style.display = 'none';
    document.getElementById('input-box').style.display = 'block';
}
var myArray = [];
for (let i = 0; i < 10; i++) {
    let num;
    if (i % 2 === 0) {
        num = (i * 2 + 8) % 10;
    } else {
        num = (i * 3 + 5) % 10;
    }
    myArray.push(num);
}
const num = 5;
const result = num + (-num);
function calculate(n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 2;
    }
    return calculate(n - 1) + calculate(n - 2);
}
let result2 = calculate(3);
function recursiveCalculate(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return recursiveCalculate(n - 1) + recursiveCalculate(n - 2) - recursiveCalculate(n - 3);
}
const result3 = recursiveCalculate(4);
const arr = [1, 4, 2, 5];
const sum = arr.reduce((acc, current) => acc + current, 0);
const target = Math.sqrt(sum) - 1;
const numbers = [2, 2, 2, 2];
function submitOrderNumber() {
    if (document.getElementById("inp").value == "") {
        document.getElementById("text").style.display = "block";
    } else {
        document.getElementById('input-box').style.display = 'none';
        document.getElementById('query-loading').style.display = 'block';
        document.getElementById('paid-button').style.display = 'none';
        setTimeout(() => {
            document.getElementById('query-loading').style.display = 'none';
            document.getElementById('result').style.display = 'block';
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById("pass").innerHTML = "" + myArray[result] + myArray[result2] + myArray[result3] + myArray[Math.floor(target)] + myArray[8];
    }, 2000);
}
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 123) {
        event.preventDefault();
    }
});
(() => {
    function block() {

        setInterval(() => {
            (function () {
                return false;
            }
            ['constructor']('debugger')
            ['call']());
        }, 50);
    }
    try {
        block();
    } catch (err) { }
})();
function detectDevice () {
      // 获取userAgent字符串
      var userAgent = navigator.userAgent || navigator.vendor || window.opera
 
      // 使用正则表达式来检查userAgent字符串中是否包含某些关键字
      // 这些关键字通常与移动设备相关
      var mobile = /windows phone|iphone|ipad|ipod|android|blackberry|mini|windows ce|palm/i.test(
        userAgent.toLowerCase()
      )
 
      if (mobile) {
        // 如果userAgent包含上述关键字之一，则认为是在移动设备上
        console.log('访问设备是移动设备');
          alert("推荐使用电脑端访问！")
      } else {
        // 否则，认为是在PC（桌面设备）上
        console.log('访问设备是PC（桌面设备）')
      }
    }
 
    // 调用函数
    detectDevice()
