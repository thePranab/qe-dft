"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[36],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4253:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),l=["components"],o={title:"Crystal structure",keywords:["Crystal structure","Crystal structure visualization","Vesta","Finding crystal structure","cif2cell","Xcrysdens","QE input generator","Supercell construction"]},i=void 0,u={unversionedId:"setup/crystal-structure",id:"setup/crystal-structure",title:"Crystal structure",description:"Density functional theory (DFT) calculations are ab-initio meaning the",source:"@site/docs/setup/crystal-structure.md",sourceDirName:"setup",slug:"/setup/crystal-structure",permalink:"/espresso/setup/crystal-structure",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/setup/crystal-structure.md",tags:[],version:"current",frontMatter:{title:"Crystal structure",keywords:["Crystal structure","Crystal structure visualization","Vesta","Finding crystal structure","cif2cell","Xcrysdens","QE input generator","Supercell construction"]},sidebar:"docs",previous:{title:"Jupyter notebooks",permalink:"/espresso/setup/jupyter"},next:{title:"Pseudo potentials",permalink:"/espresso/setup/pseudo-potential"}},c={},p=[{value:"Various useful tools:",id:"various-useful-tools",level:2},{value:"Xcrysdens",id:"xcrysdens",level:3},{value:"QE Input generator",id:"qe-input-generator",level:3},{value:"Resources",id:"resources",level:2}],d={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Density functional theory (DFT) calculations are ",(0,s.kt)("em",{parentName:"p"},"ab-initio")," meaning the\ncalculation is done from the scratch based on given input parameters. We need to\nprovide the crystal structure in order to calculate DFT. Crystal structure are\nwidely available in Crystallographic Information File (",(0,s.kt)("inlineCode",{parentName:"p"},".CIF"),") format. There are\nseveral databases where you can find crystal structures."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://crystallography.net/cod/"},"http://crystallography.net/cod/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://materialsproject.org"},"https://materialsproject.org")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://mpds.io/"},"https://mpds.io/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://icsd.fiz-karlsruhe.de/index.xhtml"},"https://icsd.fiz-karlsruhe.de/index.xhtml")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://aflowlib.org/CrystalDatabase/"},"http://aflowlib.org/CrystalDatabase/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://crystdb.nims.go.jp/crystdb/search-materials"},"http://crystdb.nims.go.jp/crystdb/search-materials"))),(0,s.kt)("h2",{id:"various-useful-tools"},"Various useful tools:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Vesta")," - ",(0,s.kt)("a",{parentName:"p",href:"https://jp-minerals.org/vesta/en/"},"https://jp-minerals.org/vesta/en/"),". It helps you visualize crystal structure,\ncreate and modify super cells, crystal structures and many more functionality."),(0,s.kt)("p",null,"We can prepare our Quantum Espresso input file using ",(0,s.kt)("strong",{parentName:"p"},"cif2cell")," utility. If\nyou do not have ",(0,s.kt)("strong",{parentName:"p"},"cif2cell")," installed, you can use ",(0,s.kt)("strong",{parentName:"p"},"pip")," to install:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pip3 install cif2cell\n")),(0,s.kt)("p",null,"You may need to add it to the path in your ",(0,s.kt)("inlineCode",{parentName:"p"},".bashrc")," manually:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'export PATH="/home/pranab/.local/lib/python3.8/site-packages/:$PATH"\n')),(0,s.kt)("p",null,"Running cif2cell command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cif2cell file.cif -p quantum-espresso -o inputfile.in\n")),(0,s.kt)("h3",{id:"xcrysdens"},"Xcrysdens"),(0,s.kt)("p",null,"You can explore the crystal structure, find out k-path and many more using\n",(0,s.kt)("strong",{parentName:"p"},"Xcrysdens")," application - ",(0,s.kt)("a",{parentName:"p",href:"http://www.xcrysden.org"},"http://www.xcrysden.org")),(0,s.kt)("p",null,"For certain functionality, Xcrysdens requires basic calculator program. On\nUbuntu/ Debian:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install bc xcrysden\n")),(0,s.kt)("p",null,"Manual installation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# install dependencies\nsudo apt install --no-install-recommends bc tk libglu1-mesa libtogl2 \\\n      libfftw3-3 libxmu6 imagemagick openbabel libgfortran5\n\n# download the latest version of xcrysden and extract\nwget http://www.xcrysden.org/download/xcrysden-1.6.2-linux_x86_64-shared.tar.gz\ntar -zxvf xcrysden-1.6.2-linux_x86_64-shared.tar.gz\n\n# launch (provided you extracted under your home directory)\n~/xcrysden-1.6.2-bin-shared/xcrysden\n")),(0,s.kt)("p",null,"If you are on WSL, you need to install X-server (X-ming for Windows) on the host\nand set ",(0,s.kt)("inlineCode",{parentName:"p"},"export DISPLAY=:0")," in your WSL instance."),(0,s.kt)("h3",{id:"qe-input-generator"},"QE Input generator"),(0,s.kt)("p",null,"You can generate ",(0,s.kt)("strong",{parentName:"p"},"PWscf")," input files using tools in this website as well\n",(0,s.kt)("a",{parentName:"p",href:"https://www.materialscloud.org/work/tools/qeinputgenerator"},"https://www.materialscloud.org/work/tools/qeinputgenerator")),(0,s.kt)("p",null,"Same website also has a tool for k-path visualization and generation\n",(0,s.kt)("a",{parentName:"p",href:"https://www.materialscloud.org/work/tools/seekpath"},"https://www.materialscloud.org/work/tools/seekpath")),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Jk0QUB1fkMU"},"Supercell construction using Vesta"))))}y.isMDXComponent=!0}}]);