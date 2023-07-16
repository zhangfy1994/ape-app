function t(r){return typeof r=="string"?Number.parseInt(r,r.trim().substring(0,2)==="0x"?16:10):typeof r=="bigint"?Number(r):r}export{t as n};
