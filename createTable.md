## 购物车

goodsName,
goodsId,
count,
goodsImg,
descirle,
account,

### npx sequelize-cli model:generate --name uniCar --attributes name:string,love:integer,path:string,isAdd:boolean,love:integer,count:integer,goodsId:integer,imgPath:string,title:string,account:integer,moneyCard:integer,userId:integer

npx sequelize-cli model:generate --name uniCar --attributes goodsName:string,account:integer,goodsImg:string,descirle:string,count:integer,goodsId:integer
npx sequelize-cli model:generate --name uniVersion --attributes goodsName:integer

npx sequelize-cli model:generate --name iframe --attributes iframeUrl:string,headerTitle:string


## 聊天

npx sequelize-cli model:generate --name mobilerecord --attributes content:string,avator:string,nickName:string

npx sequelize-cli db:migrate --env=development
