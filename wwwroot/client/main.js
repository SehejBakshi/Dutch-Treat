"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[179],{346:(c,p,s)=>{var n=s(481),t=s(215),l=s(700),g=s(4);class h{constructor(){this.id=0,this.quantity=0,this.unitPrice=0,this.productId=0,this.productCategory="",this.productSize="",this.productTitle="",this.productArtist="",this.productArtId=""}}class Z{constructor(){this.orderId=0,this.orderDate=new Date,this.orderNumber="",this.items=[]}get subtotal(){return this.items.reduce((r,o)=>r+o.unitPrice*o.quantity,0)}}let d=(()=>{class e{constructor(r){this.http=r,this.products=[],this.order=new Z}loadProducts(){return this.http.get("/api/products").pipe((0,g.U)(r=>{this.products=r}))}addToOrder(r){let o;o=this.order.items.find(a=>a.productId===r.id),o?o.quantity++:(o=new h,o.productId=r.id,o.productTitle=r.title,o.productArtId=r.artId,o.productArtist=r.artist,o.productCategory=r.category,o.productSize=r.size,o.unitPrice=r.price,o.quantity=1,this.order.items.push(o))}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(l.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var u=s(895);function m(e,i){if(1&e){const r=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.TgZ(3,"h5"),t._uU(4),t.qZA(),t.TgZ(5,"ul")(6,"li"),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"li"),t._uU(10),t.qZA(),t.TgZ(11,"li"),t._uU(12),t.qZA(),t.TgZ(13,"li"),t._uU(14),t.qZA()(),t.TgZ(15,"button",5),t.NdJ("click",function(){const q=t.CHM(r).$implicit,x=t.oxw();return t.KtG(x.store.addToOrder(q))}),t._uU(16,"Buy"),t.qZA()()()}if(2&e){const r=i.$implicit;t.xp6(2),t.MGl("src","/img/",r.artId,".jpg",t.LSH),t.s9C("alt",r.title),t.xp6(2),t.AsE("",r.category," - ",r.size,""),t.xp6(3),t.hij("Price: ",t.lcZ(8,8,r.price),""),t.xp6(3),t.hij("Artist: ",r.artist,""),t.xp6(2),t.hij("Title: ",r.title,""),t.xp6(2),t.Oqu(r.artDescription)}}let A=(()=>{class e{constructor(r){this.store=r}ngOnInit(){this.store.loadProducts().subscribe(()=>{})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["product-list"]],decls:2,vars:1,consts:[[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"border","bg-light","rounded","p-1"],[1,"img-fluid","product-image",3,"src","alt"],["id","buyButton",1,"btn","btn-success",3,"click"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0),t.YNc(1,m,17,10,"div",1),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngForOf",o.store.products))},dependencies:[u.sg,u.H9],styles:[".product-image[_ngcontent-%COMP%]{border:1px #ddd solid;box-shadow:#0006 2px 2px;margin:2px}.products-props[_ngcontent-%COMP%]{font-size:.9rem}"]}),e})();function _(e,i){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"currency"),t.qZA()()),2&e){const r=i.$implicit;t.xp6(2),t.MGl("src","/img/",r.productArtId,".jpg",t.LSH),t.s9C("alt",r.productArtist),t.xp6(2),t.AsE("",r.productCategory," - ",r.productSize,""),t.xp6(2),t.Oqu(r.quantity),t.xp6(2),t.Oqu(t.lcZ(9,7,r.unitPrice)),t.xp6(3),t.Oqu(t.lcZ(12,9,r.unitPrice*r.quantity))}}let f=(()=>{class e{constructor(r){this.store=r}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cart"]],decls:25,vars:5,consts:[[1,"table","table-condensed","table-striped"],[4,"ngFor","ngForOf"],["colspan","5"],[1,"img-fluid","product-thumb",3,"src","alt"]],template:function(r,o){1&r&&(t.TgZ(0,"h3"),t._uU(1,"Cart"),t.qZA(),t.TgZ(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"table",0)(5,"thead")(6,"tr"),t._UZ(7,"th"),t.TgZ(8,"th"),t._uU(9,"Product"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Quantity"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Price"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Total"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,_,13,11,"tr",1),t.qZA(),t.TgZ(18,"tfoot")(19,"tr")(20,"td",2)(21,"strong"),t._uU(22),t.ALo(23,"currency"),t.qZA()()()()(),t._UZ(24,"hr")),2&r&&(t.xp6(3),t.hij("Count: ",o.store.order.items.length,""),t.xp6(14),t.Q6J("ngForOf",o.store.order.items),t.xp6(5),t.hij("Subtotal: ",t.lcZ(23,3,o.store.order.subtotal),""))},dependencies:[u.sg,u.H9],styles:[".product-thumb[_ngcontent-%COMP%]{max-width:50px}"]}),e})(),T=(()=>{class e{constructor(){this.title="Shop"}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["the-shop"]],decls:7,vars:1,consts:[[1,"row"],[1,"col-9"],[1,"col-3"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3),t.qZA(),t._UZ(4,"product-list"),t.qZA(),t.TgZ(5,"div",2),t._UZ(6,"cart"),t.qZA()()),2&r&&(t.xp6(3),t.Oqu(o.title))},dependencies:[A,f],encapsulation:2}),e})(),y=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[T]}),e.\u0275inj=t.cJS({providers:[d],imports:[n.b2,l.JF]}),e})();(0,t.G48)(),n.q6().bootstrapModule(y).catch(e=>console.error(e))}},c=>{c.O(0,[736],()=>c(c.s=346)),c.O()}]);