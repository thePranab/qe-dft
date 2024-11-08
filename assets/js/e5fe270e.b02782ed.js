"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[306],{9147:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"hands-on/wannier","title":"Wannier method","description":"Obtain bandstructure of Silicon","source":"@site/docs/hands-on/wannier.mdx","sourceDirName":"hands-on","slug":"/hands-on/wannier","permalink":"/espresso/hands-on/wannier","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/wannier.mdx","tags":[],"version":"current","frontMatter":{"title":"Wannier method"},"sidebar":"docs","previous":{"title":"Phonon dispersion","permalink":"/espresso/hands-on/phonon"},"next":{"title":"Molecular Dynamics (PW)","permalink":"/espresso/hands-on/molecular-dynamics-pw"}}');var r=s(4848),o=s(8453);const a={title:"Wannier method"},c=void 0,t={},l=[{value:"Obtain bandstructure of Silicon",id:"obtain-bandstructure-of-silicon",level:2},{value:"Resources",id:"resources",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"obtain-bandstructure-of-silicon",children:"Obtain bandstructure of Silicon"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Perform ",(0,r.jsx)(e.code,{children:"scf"})," calculation using Quantum Espresso ",(0,r.jsx)(e.code,{children:"pw.x"})]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'QE_PATH="/workspaces/q-e-qe-7.2/bin"\r\nmpirun -np 4 ${QE_PATH}/pw.x -i pw.scf.silicon.in > pw.scf.silicon.out\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:["Perform ",(0,r.jsx)(e.code,{children:"nscf"})," calculation using ",(0,r.jsx)(e.code,{children:"pw.x"}),". Instead of automatic k-grid, we need\r\nto provide explicit list of k-points. Such explicit list of k-points can be\r\ngenerated using perl script included in the Wannier package under utility."]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'WANNIER_PATH="/workspaces/wannier90-3.1.0"\r\n# directly append the k-points to the input file\r\n${WANNIER_PATH}/utility/kmesh.pl 4 4 4 >> pw.nscf.silicon.in\n'})}),"\n",(0,r.jsxs)(e.p,{children:["Run ",(0,r.jsx)(e.code,{children:"nscf"})," calculation:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 ${QE_PATH}/pw.x -i pw.nscf.silicon.in > pw.nscf.silicon.out\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsxs)(e.li,{children:["Prepare input file for wannier90 (",(0,r.jsx)(e.code,{children:"silicon.win"}),"). Here we need the k-points\r\nlist without the weights:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"${WANNIER_PATH}/utility/kmesh.pl 4 4 4 wan\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"4",children:["\n",(0,r.jsx)(e.li,{children:"Generate nnkp input:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# we can just provide the seedname or seedname.win\r\n${WANNIER_PATH}/wannier90.x -pp silicon\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"5",children:["\n",(0,r.jsxs)(e.li,{children:["Create input file for ",(0,r.jsx)(e.code,{children:"pw2wan"}),", and generate initial projections:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 ${WANNIER_PATH}/pw2wannier90.x -i pw2wan.silicon.in > pw2\r\nwan.silicon.out\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"6",children:["\n",(0,r.jsx)(e.li,{children:"Run wannier calculation:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 ${WANNIER_PATH}/wannier90.x silicon\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"silicon-wannier-bands",src:s(3145).A+"",width:"1054",height:"644"})}),"\n",(0,r.jsx)(e.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://sites.google.com/view/hubbard-koopmans/program",children:"https://sites.google.com/view/hubbard-koopmans/program"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},3145:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/silicon-wannier-bands-d78d19c1d79381aa7d7a3dfefaff458a.webp"},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>c});var i=s(6540);const r={},o=i.createContext(r);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);