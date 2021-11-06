# Stock_Calculator
股票計算機  
https://gabigon88.github.io/Stock_Calculator
## 說明
我一直都有個疑問，網路上很容易就可以找到股票計算機  
例如: https://stocksell.0123456789.tw/  
或是各家證券的手機app上也都有損益計算機  

但功能上一直都沒有一個我想要的需求  
那就是 **計算股價要到多少時，我才能解套?**  

買股票有 券商手續費  
賣掉則有 券商手續費+證交稅  
假如買一支股票，結果發現那檔不如預期，想要出掉  
如果要不虧錢，賣價一定要高於買價  
但那最低值是多少? 目前市面上卻完全找不到類似的計算機  
這件事長久一來一直困擾著我  

想想自從畢業後就沒什麼寫web了  
索性當作練習html、javascript、bootstrap  
自己寫一個解套計算機XD  

## 後記
1.我網頁所使用的icon圖來源  
https://www.flaticon.com/free-icon/potato_1135548?term=potato&page=1&position=12&page=1&position=12&related_id=1135548&origin=search  
有確認過圖片授權，可用於商業和個人項目  

2.在設計時頁面時，預想使用cookie儲存user的券商手續費，每次進入頁面時會自動帶入，這樣就不用每次都要重選自己的手續費  
但寫code時發現，onload()一直沒辦法如期完成 各欄位的set_value，查了之後發現原來跟js import擺放的位置有關  
算是遇到蠻特別的一個問題，不常寫js應該不會注意，留作紀錄  
https://stackoverflow.com/questions/13486094/is-this-how-you-incorporate-an-onload-event  