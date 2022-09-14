const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
 
  if (arrayOfString == null || undefined){
    return undefined
  }else{
    let maxlength = arrayOfString[0].length  // เก็บค่า ตัวเเรกถึงตัวสุดท้ายในอเร
    let test = [] // สร้าง อเรตัวนึงไว้เก็บค่า ตัวที่/
    for (let i = 0; i < arrayOfString.length; i++)  { // เช็คจำนวนในอเร
      if(arrayOfString[i].length>maxlength){
        maxlength = arrayOfString[i].length

      return console.log(arrayOfString.length)
      }
      // เช็คตัวที่มีค่าจำนวนมากสุด
    }
    for(i = 0; i < arrayOfString.length; i++){
      if(arrayOfString[i].length == maxlength){
        test.push(arrayOfString[i])
      }
      // เช็คว่าจำนวนเท่ากันมั้ยถ้าเท่ากัน เทค่าใส่ อเรเทส  ==   'test','ests'   test =  ['test','ests']
    }
    return test

   
   
   }
  


  // }


  

// console.log(getMaxLengthString(['hello', 'hi', 'hey']))
// console.log(getMaxLengthString(['hello']))

// console.log(getMaxLengthString(['hi']))
// console.log(getMaxLengthString(null))
// console.log(getMaxLengthString(undefined) )
module.exports = getMaxLengthString
