"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[4172],{6738:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"hands-on/GaAs","title":"Bandstructure of GaAs","description":"Now that we have calculated the bandstructure of silicon (semiconductor) and","source":"@site/docs/hands-on/GaAs.md","sourceDirName":"hands-on","slug":"/hands-on/GaAs","permalink":"/espresso/hands-on/GaAs","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/GaAs.md","tags":[],"version":"current","frontMatter":{"title":"Bandstructure of GaAs","sidebar_label":"GaAs"},"sidebar":"docs","previous":{"title":"Graphene","permalink":"/espresso/hands-on/graphene"},"next":{"title":"Fe (magnetic)","permalink":"/espresso/hands-on/fe"}}');var a=s(4848),o=s(8453);const r={title:"Bandstructure of GaAs",sidebar_label:"GaAs"},i=void 0,c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Now that we have calculated the bandstructure of silicon (semiconductor) and\naluminum (metal), let us proceed with a compound which has two different atoms.\nWe follow the steps like before:"}),"\n",(0,a.jsx)(n.p,{children:"First check the lattice constant with cell relaxation according to our chosen\npseudo potential. We use that lattice constant in our next steps.  Our lattice\nconstant = 10.6867 * 0.508176602 / 0.5 = 10.861462."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pw.x < pw.relax.GaAs.in > pw.relax.GaAs.out\n"})}),"\n",(0,a.jsx)(n.p,{children:"Perform self consistent field calculation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pw.x < pw.scf.GaAs.in > pw.scf.GaAs.out\n"})}),"\n",(0,a.jsx)(n.p,{children:"Give denser k-points and perform non-self consistent calculation. This step is\nonly necessary if you need to obtain density of states."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pw.x < pw.nscf.GaAs.in > pw.nscf.GaAs.out\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Perform ",(0,a.jsx)(n.code,{children:"bands"})," calculation"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pw.x < pw.bands.GaAs.in > pw.bands.GaAs.out\n"})}),"\n",(0,a.jsx)(n.p,{children:"Post process the data and plot the bandstructure."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bands.x < pp.bands.GaAs.in > pp.bands.GaAs.out\n"})}),"\n",(0,a.jsx)(n.p,{children:"If everything goes well, you will get the bandstructure as below:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"GaAs-bands",src:s(557).A+"",width:"1073",height:"653"})}),"\n",(0,a.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,a.jsx)(n.p,{children:"Sometimes a calculation with the same inputs converges in one computer, while\nfails in another due to library configuration or even due to floating point\napproximations. The final output numbers will always vary slightly for different\nmachines, or even among different runs in the same machine. Also check the\nQuantum Espresso version for reproducibility."})}),"\n",(0,a.jsxs)(n.p,{children:["Also see the bandstructure of GaAs with ",(0,a.jsx)(n.a,{href:"soc#soc-calculation-for-gaas",children:"SOC"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},557:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/GaAs-bands-b658e9b11ba890636e2709eb390ef959.webp"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(6540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);