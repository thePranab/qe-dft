"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[9083],{2595:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"setup/crystal-structure","title":"Crystal structure","description":"Structure databases","source":"@site/docs/setup/crystal-structure.md","sourceDirName":"setup","slug":"/setup/crystal-structure","permalink":"/espresso/setup/crystal-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/espresso/blob/main/docs/setup/crystal-structure.md","tags":[],"version":"current","frontMatter":{"title":"Crystal structure","keywords":["Crystal structure","Crystal structure visualization","Vesta","Finding crystal structure","cif2cell","Xcrysdens","QE input generator","Supercell construction"]},"sidebar":"docs","previous":{"title":"Jupyter notebooks","permalink":"/espresso/setup/jupyter"},"next":{"title":"Pseudo potentials","permalink":"/espresso/setup/pseudo-potential"}}');var n=t(4848),i=t(8453);const l={title:"Crystal structure",keywords:["Crystal structure","Crystal structure visualization","Vesta","Finding crystal structure","cif2cell","Xcrysdens","QE input generator","Supercell construction"]},c=void 0,a={},d=[{value:"Structure databases",id:"structure-databases",level:2},{value:"Useful tools:",id:"useful-tools",level:2},{value:"Xcrysdens",id:"xcrysdens",level:3},{value:"QE Input generator",id:"qe-input-generator",level:3},{value:"Resources",id:"resources",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"structure-databases",children:"Structure databases"}),"\n",(0,n.jsxs)(s.p,{children:["Density functional theory (DFT) calculations are ",(0,n.jsx)(s.em,{children:"ab-initio"})," meaning the\ncalculation is done from the scratch based on given input parameters. We need to\nprovide the crystal structure in order to calculate DFT. Crystal structures are\nwidely available in Crystallographic Information File (",(0,n.jsx)(s.code,{children:".CIF"}),") format. There are\nseveral databases where you can look for crystal structures."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"http://crystallography.net/cod/",children:"http://crystallography.net/cod/"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://materialsproject.org",children:"https://materialsproject.org"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://mpds.io/",children:"https://mpds.io/"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://icsd.fiz-karlsruhe.de/index.xhtml",children:"https://icsd.fiz-karlsruhe.de/index.xhtml"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"http://aflowlib.org/CrystalDatabase/",children:"http://aflowlib.org/CrystalDatabase/"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"http://crystdb.nims.go.jp/crystdb/search-materials",children:"http://crystdb.nims.go.jp/crystdb/search-materials"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In Quantum Espresso, the structure information is provided by ",(0,n.jsx)(s.code,{children:"ibrav"})," number,\nand corresponding ",(0,n.jsx)(s.code,{children:"celldm"})," values or lattice constants and cosines of angle\nbetween the axes. It is also possible to set ",(0,n.jsx)(s.code,{children:"ibrav=0"})," and provide lattice\nvectors in ",(0,n.jsx)(s.code,{children:"CELL_PARAMETERS"}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.p,{children:["When set ",(0,n.jsx)(s.code,{children:"ibrav=0"}),", the lattice vectors must be provided with sufficiently large\nnumber of decimal accuracy, otherwise symmetry detection may fail and strange\nproblems may arrise."]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ibrav"})," numbers for different lattice types:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.code,{children:"ibrav"})}),(0,n.jsx)(s.th,{children:"Lattice type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Simple cubic"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Face centered cubic"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3,-3"}),(0,n.jsx)(s.td,{children:"Body centered cubic"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Hexagonal"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"5"}),(0,n.jsx)(s.td,{children:"Trigonal with c as 3-fold axis"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-5"}),(0,n.jsx)(s.td,{children:"Trigonal with <111> as 3-fold axis"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"6"}),(0,n.jsx)(s.td,{children:"Simple tetragonal"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"7"}),(0,n.jsx)(s.td,{children:"Centered tetragonal"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"8"}),(0,n.jsx)(s.td,{children:"Simple orthorhombic"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"9,-9,91"}),(0,n.jsx)(s.td,{children:"One-face centered orthorhombic"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"10"}),(0,n.jsx)(s.td,{children:"Face centered orthorhombic"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11"}),(0,n.jsx)(s.td,{children:"Body centered orthorhombic"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"12"}),(0,n.jsx)(s.td,{children:"Simple monoclinic, c unique"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-12"}),(0,n.jsx)(s.td,{children:"Simple monoclinic, b unique"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"13"}),(0,n.jsx)(s.td,{children:"One base centered monoclinic, c unique"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-13"}),(0,n.jsx)(s.td,{children:"One base centered monoclinic, b unique"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"14"}),(0,n.jsx)(s.td,{children:"Triclinic"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"useful-tools",children:"Useful tools:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Vesta"})," - ",(0,n.jsx)(s.a,{href:"https://jp-minerals.org/vesta/en/",children:"https://jp-minerals.org/vesta/en/"}),". It helps you visualize crystal structure,\ncreate and modify supercells, crystal structures, and many other useful\nfunctionalities."]}),"\n",(0,n.jsxs)(s.p,{children:["We can prepare our Quantum Espresso input file using ",(0,n.jsx)(s.strong,{children:"cif2cell"})," utility. If\nyou do not have ",(0,n.jsx)(s.strong,{children:"cif2cell"})," installed, you can use ",(0,n.jsx)(s.strong,{children:"pip"})," to install:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo pip3 install cif2cell\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You may need to add it to the path in your ",(0,n.jsx)(s.code,{children:".bashrc"})," manually:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'export PATH="/home/pranab/.local/lib/python3.8/site-packages/:$PATH"\n'})}),"\n",(0,n.jsx)(s.p,{children:"Running cif2cell command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cif2cell file.cif -p quantum-espresso -o inputfile.in\n"})}),"\n",(0,n.jsx)(s.h3,{id:"xcrysdens",children:"Xcrysdens"}),"\n",(0,n.jsxs)(s.p,{children:["You can explore the crystal structure, find out k-path and many more using\n",(0,n.jsx)(s.strong,{children:"Xcrysdens"})," application - ",(0,n.jsx)(s.a,{href:"http://www.xcrysden.org",children:"http://www.xcrysden.org"})]}),"\n",(0,n.jsx)(s.p,{children:"For certain functionality, Xcrysdens requires basic calculator program. On\nUbuntu/ Debian:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo apt update\nsudo apt install bc xcrysden\n"})}),"\n",(0,n.jsx)(s.p,{children:"Manual installation:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# install dependencies\nsudo apt install --no-install-recommends bc tk libglu1-mesa libtogl2 \\\n      libfftw3-3 libxmu6 imagemagick openbabel libgfortran5\n\n# download the latest version of xcrysden and extract\nwget http://www.xcrysden.org/download/xcrysden-1.6.2-linux_x86_64-shared.tar.gz\ntar -zxvf xcrysden-1.6.2-linux_x86_64-shared.tar.gz\n\n# launch (provided you extracted under your home directory)\n~/xcrysden-1.6.2-bin-shared/xcrysden\n"})}),"\n",(0,n.jsxs)(s.p,{children:["If you are on WSL, you need to install X-server (X-ming for Windows) on the host\nand set ",(0,n.jsx)(s.code,{children:"export DISPLAY=:0"})," in your WSL instance."]}),"\n",(0,n.jsx)(s.h3,{id:"qe-input-generator",children:"QE Input generator"}),"\n",(0,n.jsxs)(s.p,{children:["You can generate ",(0,n.jsx)(s.strong,{children:"PWscf"})," input files using tools in this website as well\n",(0,n.jsx)(s.a,{href:"https://www.materialscloud.org/work/tools/qeinputgenerator",children:"https://www.materialscloud.org/work/tools/qeinputgenerator"})]}),"\n",(0,n.jsxs)(s.p,{children:["The same website also has a tool for k-path visualization and generation\n",(0,n.jsx)(s.a,{href:"https://www.materialscloud.org/work/tools/seekpath",children:"https://www.materialscloud.org/work/tools/seekpath"})]}),"\n",(0,n.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.youtube.com/watch?v=Jk0QUB1fkMU",children:"Supercell construction using Vesta"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>c});var r=t(6540);const n={},i=r.createContext(n);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);