function selectText() {
    //問題文の配列
    const textList= [
        'nike'  ,
        'mizuno',
        'adidas',
        'puma'  ,
        'asics'
    ];
    //配列のインデックスを乱数で取得
    const arrayIndex = Math.floor(Math.random() * textList.length);
    //問題文の要素を取得
    const questionText = document.getElementById("questionText");
    //要素のinnerTextに配列の文字列を入れる
    questionText.innerHTML= textList[arrayIndex]; 
}