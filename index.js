function init() {
    //問題文の配列
    const textList= [
        'nike'  ,
        'mizuno',
        'adidas',
        'puma'  ,
        'asics'
    ];
    //問題文の要素を取得
    const questionTextElement = document.getElementById("questionText");  
    const inputText           = typingForm.inputText.value;
    const resultText          = document.getElementById("resultText");
    console.log(questionText);

    if(inputText == ''){
        resultText.innerHTML = '文字を入力してください';
    }else if(inputText == questionTextElement.innerHTML){
        resultText.innerHTML = '正解';
    }else {
        resultText.innerHTML = '残念';
    }

    //配列のインデックスを乱数で取得
    const arrayIndex = Math.floor(Math.random() * textList.length);
    console.log(arrayIndex);
    //要素のinnerTextに配列の文字列を入れる
    questionTextElement.innerHTML= textList[arrayIndex];
    document.typingForm.reset();

}