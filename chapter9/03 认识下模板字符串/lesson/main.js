// 高级版的字符串的字面量写法
// 保留换行符 可以跨行定义字符串
// 可以使用标识符  ${} 只要是表达式都可以 
// ${} 可以使用多个
// 插值
// 将插入的表达式求值后 转成字符串的数据格式 然后和其他字符串拼接


// \ 转义符 只转义跟在它后面的那个符号 让符号只是符号
// const abc = "666\"\""
// const str = `
// 好奇代码的
//   sssss ${new Date()}
//   ${1 + 2 + '7777'}
// 三木`

// console.log(abc)
function sayHello(arg1, ...args){
  console.log(arg1,args);

}
const a = 666
const b = 777
// sayHello(1,2,3)
sayHello`123 + ${b} + 567 + ${a}`

// 函数的第一个参数 会接收到一个数组
// 插值和反撇号之间的字符串 插值和插值之间的字符串
// 反撇号与插值之间没有字符串 就会产生一个空字符串

// 后续参数 依次接收到的就是插值的值

// 模板字符串  ES6

