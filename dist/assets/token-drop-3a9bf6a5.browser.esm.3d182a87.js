import{y as C,x as t,z as i,A as w,D as W,b0 as f,G as y,H as v,N as T,O as R,M as b,K as A,P as E,Q as O,aL as S,a3 as c,T as D,U as F,V as d,b1 as V}from"./index.e7001f22.js";import{S as P}from"./erc-20-standard-588ba353.browser.esm.15a5dbb6.js";class p extends P{constructor(a,r,n){var o;let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},h=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(a,r,h,l);super(u,n,g),o=this,t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"sales",void 0),t(this,"platformFees",void 0),t(this,"events",void 0),t(this,"claimConditions",void 0),t(this,"interceptor",void 0),t(this,"claim",i(async function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return o.claimTo.prepare(await o.contractWrapper.getSignerAddress(),e,s)})),t(this,"claimTo",i(async function(e,s){let m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return o.erc20.claimTo.prepare(e,s,{checkERC20Allowance:m})})),t(this,"delegateTo",i(async e=>d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await c(e)]}))),t(this,"burnTokens",i(async e=>this.erc20.burn.prepare(e))),t(this,"burnFrom",i(async(e,s)=>this.erc20.burnFrom.prepare(e,s))),this.abi=w.parse(h||[]),this.metadata=new W(this.contractWrapper,f,this.storage),this.app=new y(this.contractWrapper,this.metadata,this.storage),this.roles=new v(this.contractWrapper,p.contractRoles),this.encoder=new T(this.contractWrapper),this.estimator=new R(this.contractWrapper),this.events=new b(this.contractWrapper),this.sales=new A(this.contractWrapper),this.platformFees=new E(this.contractWrapper),this.interceptor=new O(this.contractWrapper),this.claimConditions=new S(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(a){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(await c(a)))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(a){return await this.contractWrapper.readContract.delegates(await c(a))}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(D("transfer"),F)}async prepare(a,r,n){return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:r,overrides:n})}async call(a,r,n){return this.contractWrapper.call(a,r,n)}}t(p,"contractRoles",V);export{p as TokenDrop};
