import{x as C,v as a,y as p,A as w,z as W,aJ as f,F as v,G as T,H as y,J as S,M as b,N as A,L as N,O as E,P as R,aK as M,aI as d,aL as U,aM as k,Q as F,B as o,ar as m,S as I,T as _,U as x,V as L}from"./index.5b003a35.js";import{S as O}from"./erc-721-standard-df1a6708.browser.esm.e67038ae.js";import{P as B}from"./thirdweb-checkout-cc6ad5e7.browser.esm.0e2d2b33.js";class l extends O{constructor(t,r,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,i,n);super(u,e,h),a(this,"abi",void 0),a(this,"owner",void 0),a(this,"encoder",void 0),a(this,"estimator",void 0),a(this,"metadata",void 0),a(this,"app",void 0),a(this,"sales",void 0),a(this,"platformFees",void 0),a(this,"events",void 0),a(this,"roles",void 0),a(this,"interceptor",void 0),a(this,"royalties",void 0),a(this,"claimConditions",void 0),a(this,"revealer",void 0),a(this,"signature",void 0),a(this,"checkout",void 0),a(this,"createBatch",p(async(s,c)=>this.erc721.lazyMint.prepare(s,c))),a(this,"claimTo",p(async(s,c,g)=>this.erc721.claimTo.prepare(s,c,g))),a(this,"claim",p(async(s,c)=>this.erc721.claim.prepare(s,c))),a(this,"burn",p(async s=>this.erc721.burn.prepare(s))),this.abi=w.parse(i||[]),this.metadata=new W(this.contractWrapper,f,this.storage),this.app=new v(this.contractWrapper,this.metadata,this.storage),this.roles=new T(this.contractWrapper,l.contractRoles),this.royalties=new y(this.contractWrapper,this.metadata),this.sales=new S(this.contractWrapper),this.encoder=new b(this.contractWrapper),this.estimator=new A(this.contractWrapper),this.events=new N(this.contractWrapper),this.platformFees=new E(this.contractWrapper),this.interceptor=new R(this.contractWrapper),this.claimConditions=new M(this.contractWrapper,this.metadata,this.storage),this.signature=new d(this.contractWrapper,this.storage),this.revealer=new U(this.contractWrapper,this.storage,k.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new d(this.contractWrapper,this.storage),this.owner=new F(this.contractWrapper),this.checkout=new B(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),r=await this.totalUnclaimedSupply();return t.add(r)}async getAllClaimed(t){const r=o.from((t==null?void 0:t.start)||0).toNumber(),e=o.from((t==null?void 0:t.count)||m).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),r+e);return await Promise.all(Array.from(Array(n).keys()).map(i=>this.get(i.toString())))}async getAllUnclaimed(t){const r=o.from((t==null?void 0:t.start)||0).toNumber(),e=o.from((t==null?void 0:t.count)||m).toNumber(),n=o.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),i=o.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),n.toNumber()+e));return await Promise.all(Array.from(Array(i.sub(n).toNumber()).keys()).map(h=>this.erc721.getTokenMetadata(n.add(h).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(I("transfer"),_)}async getClaimTransaction(t,r,e){return this.erc721.getClaimTransaction(t,r,e)}async prepare(t,r,e){return x.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}a(l,"contractRoles",L);export{l as SignatureDrop};
