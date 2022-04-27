//use cyrpto in browser better than Math.random
//https://developer.mozilla.org/en-US/docs/Web/API/Crypto
function getRandomValues(bits) {
  var str = null;
  var elems = Math.ceil(bits / 32); //round up to integer with bits divided by 32

  while (!str) {
    //construct random str using cyrpto
    //crypto better than Math.random : https://github.com/2627500295/blog/blob/master/%E6%96%87%E7%AB%A0/%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%BC%80%E5%8F%91%E8%AF%AD%E8%A8%80/TypeScript/%E4%BD%BF%E7%94%A8%20window.crypto.getRandomValues%20%E5%8F%96%E4%BB%A3%E4%B8%8D%E5%AE%89%E5%85%A8%E7%9A%84%20Math.random.md
    //uint32array : https://vimsky.com/zh-tw/examples/usage/javascript-uint32array-from-method.html
    //getRandomValues in crypto : https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
    str = construct(bits, window.crypto.getRandomValues(new Uint32Array(elems)), 10, 32);
  }

  return str;
}