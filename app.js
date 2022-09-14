

// function getMaxLengthString(arrayOfString) {
//   //code here
//   let test = [] 
//   if (arrayOfString == null || undefined){
//     return undefined
//   }else{
//     let maxlength = arrayOfString[0].length  // เก็บค่า ตัวเเรกถึงตัวสุดท้ายในอเร
//     // สร้าง อเรตัวนึงไว้เก็บค่า ตัวที่/
//     for (let i = 0; i < arrayOfString.length; i++)  { // เช็คจำนวนในอเร
//       if(arrayOfString[i].length>maxlength){
//         maxlength = arrayOfString[i].length
//       return arrayOfString.length
//       }
//       // เช็คตัวที่มีค่าจำนวนมากสุด
//     }
//     for(i = 0; i < arrayOfString.length; i++){
//       if(arrayOfString[i].length == maxlength){
//         test.push(arrayOfString[i])
//       }
//       // เช็คว่าจำนวนเท่ากันมั้ยถ้าเท่ากัน เทค่าใส่ อเรเทส  ==   'test','ests'   test =  ['test','ests']
//     }
 
//   }
//   return test

// }

// console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']));
// getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']);

const getMaxLengthString = (arrayOfString)=>{
    let mymaximum = 0;
    let result=[];

    arrayOfString.forEach(item => {
        if (item.length >= mymaximum){
            mymaximum = item.length
        }
    });

    arrayOfString.forEach(item=>{
        if (item.length >= mymaximum){
            result.push(item)
        }
    })

    return result;
}

getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning'])