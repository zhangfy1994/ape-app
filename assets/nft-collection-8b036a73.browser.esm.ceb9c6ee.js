import{x as m,v as t,y as n,A as u,z as l,aH as g,F as W,G as C,H as v,J as w,M as y,N as T,L as f,O as R,P as S,aI as b,Q as E,S as A,T as F,U as B,V as M}from"./index.5b003a35.js";import{S as O}from"./erc-721-standard-df1a6708.browser.esm.e67038ae.js";class o extends O{constructor(r,e,s){let p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new m(r,e,c,p);super(d,s,h),t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"events",void 0),t(this,"sales",void 0),t(this,"platformFees",void 0),t(this,"royalties",void 0),t(this,"owner",void 0),t(this,"signature",void 0),t(this,"interceptor",void 0),t(this,"mint",n(async a=>this.erc721.mint.prepare(a))),t(this,"mintTo",n(async(a,i)=>this.erc721.mintTo.prepare(a,i))),t(this,"mintBatch",n(async a=>this.erc721.mintBatch.prepare(a))),t(this,"mintBatchTo",n(async(a,i)=>this.erc721.mintBatchTo.prepare(a,i))),t(this,"burn",n(a=>this.erc721.burn.prepare(a))),this.abi=u.parse(c||[]),this.metadata=new l(this.contractWrapper,g,this.storage),this.app=new W(this.contractWrapper,this.metadata,this.storage),this.roles=new C(this.contractWrapper,o.contractRoles),this.royalties=new v(this.contractWrapper,this.metadata),this.sales=new w(this.contractWrapper),this.encoder=new y(this.contractWrapper),this.estimator=new T(this.contractWrapper),this.events=new f(this.contractWrapper),this.platformFees=new R(this.contractWrapper),this.interceptor=new S(this.contractWrapper),this.signature=new b(this.contractWrapper,this.storage),this.owner=new E(this.contractWrapper)}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.readContract.address}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(A("transfer"),F)}async getMintTransaction(r,e){return this.erc721.getMintTransaction(r,e)}async prepare(r,e,s){return B.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:s})}async call(r,e,s){return this.contractWrapper.call(r,e,s)}}t(o,"contractRoles",M);export{o as NFTCollection};