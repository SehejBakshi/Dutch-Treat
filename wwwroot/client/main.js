"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[179],{55:(l,Z,u)=>{var g=u(481),t=u(256),h=u(529),d=u(773);let A=(()=>{class r{constructor(){this.title="Shop"}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["the-shop"]],decls:5,vars:1,consts:[[1,"row"],[1,"col-12"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3),t.qZA(),t._UZ(4,"router-outlet"),t.qZA()()),2&e&&(t.xp6(3),t.Oqu(o.title))},dependencies:[d.lC],encapsulation:2}),r})();var m=u(4);class T{constructor(){this.id=0,this.quantity=0,this.unitPrice=0,this.productId=0,this.productCategory="",this.productSize="",this.productTitle="",this.productArtist="",this.productArtId=""}}class _{constructor(){this.orderNumber=Math.random().toString(36).substr(2,5),this.orderId=0,this.orderDate=new Date,this.orderNumber=Math.random().toString(36).substr(2,5),this.items=[]}get subtotal(){return this.items.reduce((e,o)=>e+o.unitPrice*o.quantity,0)}}let p=(()=>{class r{constructor(e){this.http=e,this.products=[],this.order=new _,this.token="",this.expiration=new Date}loadProducts(){return this.http.get("/api/products").pipe((0,m.U)(e=>{this.products=e}))}get loginRequired(){return 0===this.token.length||this.expiration<new Date}login(e){return this.http.post("/account/createtoken",e).pipe((0,m.U)(o=>{this.token=o.token,this.expiration=o.expiration}))}checkout(){const e=(new h.WM).set("Authorization",`Bearer ${this.token}`);return this.http.post("/api/orders",this.order,{headers:e}).pipe((0,m.U)(()=>{this.order=new _}))}addToOrder(e){let o;o=this.order.items.find(i=>i.productId===e.id),o?o.quantity++:(o=new T,o.productId=e.id,o.productTitle=e.title,o.productArtId=e.artId,o.productArtist=e.artist,o.productCategory=e.category,o.productSize=e.size,o.unitPrice=e.price,o.quantity=1,this.order.items.push(o))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(h.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})();var c=u(895);function q(r,n){if(1&r&&(t.TgZ(0,"div",9),t._uU(1),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Oqu(e.errorMessage)}}function b(r,n){if(1&r&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"currency"),t.qZA()()),2&r){const e=n.$implicit;t.xp6(2),t.MGl("src","/img/",e.productArtId,".jpg",t.LSH),t.xp6(2),t.HOy("",e.productCategory,"(",e.productSize,") - ",e.productArtist,": ",e.productTitle,""),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.Oqu(t.Dn7(9,8,e.unitPrice,"USD",!0)),t.xp6(3),t.Oqu(t.Dn7(12,12,e.unitPrice*e.quantity,"USD",!0))}}let v=(()=>{class r{constructor(e,o){this.store=e,this.router=o,this.errorMessage=""}onCheckout(){this.errorMessage="",this.store.checkout().subscribe(()=>{this.router.navigate(["/"])},e=>{this.errorMessage=`Failed to checkout: ${e}`})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(p),t.Y36(d.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["checkout"]],decls:29,vars:12,consts:[[1,"row"],["class","alert alert-danger",4,"ngIf"],[1,"table","table-bordered","table-hover"],[4,"ngFor","ngForOf"],[1,"col-md-4","col-md-offset-8","text-right"],[1,"table","table-condensed"],[1,"text-right"],[1,"btn","btn-success",3,"click"],["routerLink","/",1,"btn","btn-info"],[1,"alert","alert-danger"],["alt","o.productTitle",1,"img-thumbnail","checkout-thumb",3,"src"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Confirm Order"),t.qZA(),t.YNc(3,q,2,1,"div",1),t.TgZ(4,"table",2),t.YNc(5,b,13,16,"tr",3),t.qZA(),t.TgZ(6,"div",4)(7,"table",5)(8,"tr")(9,"td",6),t._uU(10,"Subtotal"),t.qZA(),t.TgZ(11,"td",6),t._uU(12),t.ALo(13,"currency"),t.qZA()(),t.TgZ(14,"tr")(15,"td",6),t._uU(16,"Shipping"),t.qZA(),t.TgZ(17,"td",6),t._uU(18,"$ 0.00"),t.qZA()(),t.TgZ(19,"tr")(20,"td",6),t._uU(21,"Total:"),t.qZA(),t.TgZ(22,"td",6),t._uU(23),t.ALo(24,"currency"),t.qZA()()(),t.TgZ(25,"button",7),t.NdJ("click",function(){return o.onCheckout()}),t._uU(26,"Complete Purchase"),t.qZA(),t.TgZ(27,"a",8),t._uU(28,"Cancel"),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.errorMessage),t.xp6(2),t.Q6J("ngForOf",o.store.order.items),t.xp6(7),t.Oqu(t.Dn7(13,4,o.store.order.subtotal,"USD",!0)),t.xp6(11),t.Oqu(t.Dn7(24,8,o.store.order.subtotal,"USD",!0)))},dependencies:[c.sg,c.O5,d.yS,c.H9],styles:[".checkout-thumb[_ngcontent-%COMP%]{max-width:100px}"]}),r})();var a=u(433);function x(r,n){if(1&r&&(t.TgZ(0,"div",14),t._uU(1),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Oqu(e.errorMessage)}}function U(r,n){1&r&&(t.TgZ(0,"div",15),t._uU(1,"Required"),t.qZA())}function y(r,n){1&r&&(t.TgZ(0,"div",15),t._uU(1,"Required"),t.qZA())}let C=(()=>{class r{constructor(e,o){this.store=e,this.router=o,this.creds={username:"",password:""},this.errorMessage=""}onLogin(){this.store.login(this.creds).subscribe(()=>{this.router.navigate(this.store.order.items.length>0?["checkout"]:[""])},e=>{this.errorMessage="Failed to login"})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(p),t.Y36(d.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["login-page"]],decls:20,vars:6,consts:[[1,"row"],[1,"col-md-4","col-md-offset-4"],["class","alert alert-danger",4,"ngIf"],[3,"submit"],[1,"form-group"],["for","username"],["type","text","name","username","required","",1,"form-control",3,"ngModel","ngModelChange"],["username","ngModel"],["class","text-danger",4,"ngIf"],["for","password"],["type","password","name","password","required","",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit","value","Login",1,"btn","btn-success",3,"disabled"],["href","#",1,"btn","btn-default"],[1,"alert","alert-danger"],[1,"text-danger"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,x,2,1,"div",2),t.TgZ(3,"form",3),t.NdJ("submit",function(){return o.onLogin()}),t.TgZ(4,"div",4)(5,"label",5),t._uU(6,"Username"),t.qZA(),t.TgZ(7,"input",6,7),t.NdJ("ngModelChange",function(s){return o.creds.username=s}),t.qZA(),t.YNc(9,U,2,0,"div",8),t.qZA(),t.TgZ(10,"div",4)(11,"label",9),t._uU(12,"Password"),t.qZA(),t.TgZ(13,"input",10,11),t.NdJ("ngModelChange",function(s){return o.creds.password=s}),t.qZA(),t.YNc(15,y,2,0,"div",8),t.qZA(),t.TgZ(16,"div",4),t._UZ(17,"input",12),t.TgZ(18,"a",13),t._uU(19,"Cancel"),t.qZA()()()()()),2&e){const i=t.MAs(8),s=t.MAs(14);t.xp6(2),t.Q6J("ngIf",o.errorMessage),t.xp6(5),t.Q6J("ngModel",o.creds.username),t.xp6(2),t.Q6J("ngIf",i.touched&&i.invalid&&i.errors),t.xp6(4),t.Q6J("ngModel",o.creds.password),t.xp6(2),t.Q6J("ngIf",s.touched&&s.invalid&&s.errors),t.xp6(2),t.Q6J("disabled",i.invalid||s.invalid)}},dependencies:[c.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.On,a.F],encapsulation:2}),r})();function w(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.TgZ(3,"h5"),t._uU(4),t.qZA(),t.TgZ(5,"ul")(6,"li"),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"li"),t._uU(10),t.qZA(),t.TgZ(11,"li"),t._uU(12),t.qZA(),t.TgZ(13,"li"),t._uU(14),t.qZA()(),t.TgZ(15,"button",5),t.NdJ("click",function(){const s=t.CHM(e).$implicit,J=t.oxw();return t.KtG(J.store.addToOrder(s))}),t._uU(16,"Buy"),t.qZA()()()}if(2&r){const e=n.$implicit;t.xp6(2),t.MGl("src","/img/",e.artId,".jpg",t.LSH),t.s9C("alt",e.title),t.xp6(2),t.AsE("",e.category," - ",e.size,""),t.xp6(3),t.hij("Price: ",t.lcZ(8,8,e.price),""),t.xp6(3),t.hij("Artist: ",e.artist,""),t.xp6(2),t.hij("Title: ",e.title,""),t.xp6(2),t.Oqu(e.artDescription)}}let M=(()=>{class r{constructor(e){this.store=e}ngOnInit(){this.store.loadProducts().subscribe(()=>{})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(p))},r.\u0275cmp=t.Xpm({type:r,selectors:[["product-list"]],decls:2,vars:1,consts:[[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"border","bg-light","rounded","p-1"],[1,"img-fluid","product-image",3,"src","alt"],["id","buyButton",1,"btn","btn-success",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,w,17,10,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.store.products))},dependencies:[c.sg,c.H9],styles:[".product-image[_ngcontent-%COMP%]{border:1px #ddd solid;box-shadow:#0006 2px 2px;margin:2px}.products-props[_ngcontent-%COMP%]{font-size:.9rem}"]}),r})();function P(r,n){if(1&r&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"currency"),t.qZA()()),2&r){const e=n.$implicit;t.xp6(2),t.MGl("src","/img/",e.productArtId,".jpg",t.LSH),t.s9C("alt",e.productArtist),t.xp6(2),t.AsE("",e.productCategory," - ",e.productSize,""),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.Oqu(t.lcZ(9,7,e.unitPrice)),t.xp6(3),t.Oqu(t.lcZ(12,9,e.unitPrice*e.quantity))}}function k(r,n){1&r&&(t.TgZ(0,"a",5),t._uU(1,"Checkout"),t.qZA())}let L=(()=>{class r{constructor(e){this.store=e}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(p))},r.\u0275cmp=t.Xpm({type:r,selectors:[["cart"]],decls:26,vars:6,consts:[[1,"table","table-condensed","table-striped"],[4,"ngFor","ngForOf"],["colspan","5"],["class","btn btn-success","routerLink","checkout",4,"ngIf"],[1,"img-fluid","product-thumb",3,"src","alt"],["routerLink","checkout",1,"btn","btn-success"]],template:function(e,o){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Cart"),t.qZA(),t.TgZ(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"table",0)(5,"thead")(6,"tr"),t._UZ(7,"th"),t.TgZ(8,"th"),t._uU(9,"Product"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Quantity"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Price"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Total"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,P,13,11,"tr",1),t.qZA(),t.TgZ(18,"tfoot")(19,"tr")(20,"td",2)(21,"strong"),t._uU(22),t.ALo(23,"currency"),t.qZA()()()()(),t.YNc(24,k,2,0,"a",3),t._UZ(25,"hr")),2&e&&(t.xp6(3),t.hij("Count: ",o.store.order.items.length,""),t.xp6(14),t.Q6J("ngForOf",o.store.order.items),t.xp6(5),t.hij("Subtotal: ",t.lcZ(23,4,o.store.order.subtotal),""),t.xp6(2),t.Q6J("ngIf",o.store.order.items.length>0))},dependencies:[c.sg,c.O5,d.yS,c.H9],styles:[".product-thumb[_ngcontent-%COMP%]{max-width:50px}"]}),r})(),O=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["shop-page"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-9"],[1,"col-3"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"product-list"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"cart"),t.qZA()())},dependencies:[M,L],encapsulation:2}),r})(),f=(()=>{class r{constructor(e,o){this.store=e,this.router=o}canActivate(e,o){return!this.store.loginRequired||(this.router.navigate(["login"]),!1)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(p),t.LFG(d.F0))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})();const S=d.Bz.forRoot([{path:"",component:O},{path:"checkout",component:v,canActivate:[f]},{path:"login",component:C},{path:"**",redirectTo:"/"}],{useHash:!1});let I=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r,bootstrap:[A]}),r.\u0275inj=t.cJS({providers:[p,f],imports:[g.b2,h.JF,S,a.u5]}),r})();(0,t.G48)(),g.q6().bootstrapModule(I).catch(r=>console.error(r))}},l=>{l.O(0,[736],()=>l(l.s=55)),l.O()}]);