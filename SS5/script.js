// Mảng: C,R,U,D \\ push(), log(), arr[i] =?, arr.splice(  ,  ,  )

// Phương thức về mảng: indexOf(), find(), includes(), map(), filter()
// Duyệt mảng: for thuần, for in, for of, ...

// VD map:

let arr=[1,2,3,4]
arr.map = (item => item + 2)
console.log( 
   arr
)

// Filter tương tự (thay hành động = điều kiện)
// Constructor: thuộc tính
// Super: kế thừa thuộc tính


//CHECKPOINT 1

//Trắc Nghiệm:

//Câu 1: B
//Câu 2: D
//Câu 3: B
//Câu 4: A
//Câu 5: B
//Câu 6: D
//Câu 7: D
//Câu 8: B

//Tự Luận:

//Câu 9:

let m = [1,2,3,4,5,6,"hh","9",80,100];
m.splice(6 , 2);
mSquared = m.map(item => item * item);

console.log(mSquared)

//Câu 10:

const text = [
    {name: "High knowledge, high return"}
]
console.log(
    text.map(item => item.name).join(",")
);

//Câu 12

class shape{
    constructor(_CD, _CR){
    this.CD = _CD;
    this.CR = _CR;
}
}

class hinhtamgiac extends shape{
    constructor(_CĐáy, _CCao){
    super(_CD, _CR);
    this.CĐáy = _CD;
    this.CCao = _CR;
}
}
dtht() {
    return 3.14 * this.bkht * this.bkht
  }

  let hinhtamgiac1 = new hinhtamgiac(2,3)
  console.log(HinhTron1.dtht());



class hinhchunhat extends shape{
    constructor(_CD, _CR){
    super(_CD, _CR);
    this.CD = _CD;
    this.CR = _CR;
}
}
  cvht() {
    return 2 * 3.14 * this.bkht
  }

let HinhTron1 = new HinhTron(5)
console.log(HinhTron1.dtht());