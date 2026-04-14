window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});{
  "url": "https://server.lightway.net.cn:8185",
  "name": "应用名称",
  "platform": "android",
  "inject": {
    "disableClickInterceptor": true  // 先禁用点击劫持
  },
  "android": {
    "targetSdkVersion": 33,
    "minSdkVersion": 21,
    "permissions": [
      "android.permission.INTERNET",
      "android.permission.ACCESS_NETWORK_STATE"
    ],
    "webView": {
      // 关键设置：允许存储访问
      "domStorageEnabled": true,
      "databaseEnabled": true,
      "allowFileAccess": true,
      "allowContentAccess": true,
      
      // 解决沙箱问题
      "allowUniversalAccessFromFileURLs": true,
      "allowFileAccessFromFileURLs": true,
      
      // JavaScript 设置
      "javaScriptEnabled": true,
      "javaScriptCanOpenWindowsAutomatically": true,
      
      // 混合内容
      "mixedContentMode": 1  // 0=不允许，1=允许，2=总是允许
    },
    
    // 重要：禁用沙箱或添加必要权限
    "disableSandbox": true,
    
    // 或者使用自定义 WebView 配置
    "customWebViewConfig": true
  }
}
