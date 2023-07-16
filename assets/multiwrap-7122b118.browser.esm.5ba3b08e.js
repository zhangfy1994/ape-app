import{x as C,v as n,y as g,A as T,z as y,aC as I,F as E,G as R,M as $,N as b,L as S,H as P,Q as F,ak as L,al as M,a4 as q,ae as A,U as u,aD as O,aE as U,a2 as m}from"./index.5b003a35.js";import{S as x}from"./erc-721-standard-df1a6708.browser.esm.e67038ae.js";import{h as z}from"./hasERC20Allowance-881cc009.browser.esm.263c4d5d.js";class l extends x{constructor(a,e,s){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},t=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(a,e,t,o);super(c,s,r),n(this,"abi",void 0),n(this,"encoder",void 0),n(this,"estimator",void 0),n(this,"metadata",void 0),n(this,"app",void 0),n(this,"events",void 0),n(this,"roles",void 0),n(this,"royalties",void 0),n(this,"owner",void 0),n(this,"wrap",g(async(h,i,d)=>{const f=await U(i,this.storage),W=await m(d||await this.contractWrapper.getSignerAddress()),v=await this.toTokenStructList(h);return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"wrap",args:[v,f,W],parse:p=>{const w=this.contractWrapper.parseLogs("TokensWrapped",p==null?void 0:p.logs);if(w.length===0)throw new Error("TokensWrapped event not found");const k=w[0].args.tokenIdOfWrappedToken;return{id:k,receipt:p,data:()=>this.get(k)}}})})),n(this,"unwrap",g(async(h,i)=>{const d=await m(i||await this.contractWrapper.getSignerAddress());return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"unwrap",args:[h,d]})})),this.abi=T.parse(t||[]),this.metadata=new y(this.contractWrapper,I,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new R(this.contractWrapper,l.contractRoles),this.encoder=new $(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new S(this.contractWrapper),this.royalties=new P(this.contractWrapper,this.metadata),this.owner=new F(this.contractWrapper)}async getWrappedContents(a){const e=await this.contractWrapper.readContract.getWrappedContents(a),s=[],o=[],t=[];for(const r of e)switch(r.tokenType){case 0:{const c=await L(this.contractWrapper.getProvider(),r.assetContract);s.push({contractAddress:r.assetContract,quantity:M(r.totalAmount,c.decimals)});break}case 1:{o.push({contractAddress:r.assetContract,tokenId:r.tokenId});break}case 2:{t.push({contractAddress:r.assetContract,tokenId:r.tokenId,quantity:r.totalAmount.toString()});break}}return{erc20Tokens:s,erc721Tokens:o,erc1155Tokens:t}}async toTokenStructList(a){const e=[],s=this.contractWrapper.getProvider(),o=await this.contractWrapper.getSignerAddress();if(a.erc20Tokens)for(const t of a.erc20Tokens){const r=await q(s,t.quantity,t.contractAddress);if(!await z(this.contractWrapper,t.contractAddress,r))throw new Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${t.quantity});

`);e.push({assetContract:t.contractAddress,totalAmount:r,tokenId:0,tokenType:0})}if(a.erc721Tokens)for(const t of a.erc721Tokens){if(!await A(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,o))throw new Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});

`);e.push({assetContract:t.contractAddress,totalAmount:0,tokenId:t.tokenId,tokenType:1})}if(a.erc1155Tokens)for(const t of a.erc1155Tokens){if(!await A(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,o))throw new Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);e.push({assetContract:t.contractAddress,totalAmount:t.quantity,tokenId:t.tokenId,tokenType:2})}return e}async prepare(a,e,s){return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:a,args:e,overrides:s})}async call(a,e,s){return this.contractWrapper.call(a,e,s)}}n(l,"contractRoles",O);export{l as Multiwrap};
