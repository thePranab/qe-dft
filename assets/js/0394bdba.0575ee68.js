"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[260],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={title:"Quantum Espresso installation",sidebar_label:"Installation",keywords:["Quantum Espresso installation","Installing Quantum Espresso","PWTK"]},i=void 0,p={unversionedId:"setup/install",id:"setup/install",title:"Quantum Espresso installation",description:"We can install Quantum Espresso in our personal laptops or desktops to run",source:"@site/docs/setup/install.md",sourceDirName:"setup",slug:"/setup/install",permalink:"/espresso/setup/install",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/setup/install.md",tags:[],version:"current",frontMatter:{title:"Quantum Espresso installation",sidebar_label:"Installation",keywords:["Quantum Espresso installation","Installing Quantum Espresso","PWTK"]},sidebar:"docs",previous:{title:"Setup",permalink:"/espresso/category/setup"},next:{title:"High Performance Computing",permalink:"/espresso/setup/hpc"}},u={},c=[{value:"Installing PWTK",id:"installing-pwtk",level:2}],m={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We can install Quantum Espresso in our personal laptops or desktops to run\nrelatively less computationally intensive calculations. If we intend to perform\ncomputationally heavy tasks, we would need access to better computing resources\nwith large number of CPU (or GPU) cores, memory, bandwidth, and disc IO."),(0,o.kt)("p",null,"Throughout this tutorial, I will be using a Ubuntu system for smaller\ncalculations while other computationally intensive calculations will be done in\nHPC clusters."),(0,o.kt)("p",null,"Perhaps the most easiest way to install Quantum Espresso is from the package\nmanager of respective Linux distribution. This should work fine for us and this\nis recommended option. Following commands are for Ubuntu / Debian. First make\nsure your system is up-to-date."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade\n")),(0,o.kt)("p",null,"Install Quantum Espresso from apt repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install --no-install-recommends \\\n    libfftw3-dev \\\n    quantum-espresso\n")),(0,o.kt)("p",null,"If you want to compile from the source yourself, here are the installation steps\nfor latest version of Quantum Espresso (7.1) in a Ubuntu (LTS 22.04) machine. I\nwill be compiling for single processor. First install the recommended libraries\nand dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install --no-install-recommends \\\n    autoconf \\\n    build-essential \\\n    ca-certificates \\\n    gfortran \\\n    libblas3 \\\n    libc6 \\\n    libfftw3-dev \\\n    libgcc-s1 \\\n    liblapack-dev \\\n    wget\n")),(0,o.kt)("p",null,"If you want to compile for parallel processing, you also need to install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install --no-install-recommends \\\n    libopenmpi-dev \\\n    libscalapack-openmpi-dev \\\n    libelpa17  #  use libelpa4 on Ubuntu 20.04\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/QEF/q-e/-/releases"},"Download")," Quantum Espresso (latest\nversion 7.1 at the time of writing):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://gitlab.com/QEF/q-e/-/archive/qe-7.1/q-e-qe-7.1.tar.gz\n")),(0,o.kt)("p",null,"Un-tar the source files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf q-e-qe-7.1.tar.gz\n")),(0,o.kt)("p",null,"Go to the qe directory and issue configure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd q-e-qe-7.1\n./configure\n")),(0,o.kt)("p",null,"Here we can provide various configuration options. Read the manual in oder to\nproperly understand. But in most cases we will be just fine with the defaults,\nit should detect the system configuration automatically, in case you don't get\nwhat you want, try the various configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"flags")," with configure."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that certain programs/utilities bundled with Quantum Espresso might not\nwork correctly in parallel compilation, so we may need serial compilation for\nthose by ",(0,o.kt)("inlineCode",{parentName:"p"},"./configure --disable-parallel")," option in case parallel option is\nautomatically detected.")),(0,o.kt)("p",null,"Finally, compile the source files and create the binary executables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# compile individual packages\nmake pw\n# or compile everything\nmake all\n# we can parallelize e.g., below command uses 4 CPUs\nmake -j4 all\n")),(0,o.kt)("p",null,"Now, the binary files or their symbolic links (shortcuts) would be placed in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," directory. It would be good idea to include the executable path to your\n",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc")," or whatever shell you use) file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# use the correct path if it differs from mine\necho 'export PATH=\"/root/q-e-qe-7.1/bin:$PATH\"' >> ~/.bashrc\n")),(0,o.kt)("p",null,"Finally, you may need to restart your terminal or ",(0,o.kt)("inlineCode",{parentName:"p"},"source .bashrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")),(0,o.kt)("p",null,"You can compile the documentation by going to particular directory (e.g., PW or\nPP) and execute (you need to have LaTeX installed in your system):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make doc\n")),(0,o.kt)("p",null,"If you want docs in PDF format, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"latex")," commands to create them as\nwell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pdflatex filename.tex\n")),(0,o.kt)("p",null,"We are now ready to run Quantum Espresso ",(0,o.kt)("inlineCode",{parentName:"p"},"pw.x")," (or any other program) using\n",(0,o.kt)("inlineCode",{parentName:"p"},"mpirun")," by following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x -inp inputfile > outputfile\n# For parallel version\nmpirun -np 12 pw.x -inp inputfile > outputfile\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"-np 12")," specifies the number of processors. ",(0,o.kt)("inlineCode",{parentName:"p"},"-inp")," stands for input file.\nAlternatively, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"-i"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"-in"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"-input"),", or even standard input\nredirect ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),". But beware some systems may not interpret all the different\noptions, I think safe option is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"-i"),"."),(0,o.kt)("p",null,"Once installation is completed, optionally we can run tests if everything went\nOK. Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"test-suite")," directory and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make run-tests\n")),(0,o.kt)("p",null,"If all is well, we will see ",(0,o.kt)("strong",{parentName:"p"},"Passed")," messages and we are good to go."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that the above installation steps may not be the most optimal way to run\nQuantum Espresso in your computer. There are multiple implementations of same\nlibrary. For example, you can replace openmpi libraries with Intel MKL or MPICH\nimplementations. Please do research yourself or ask help from someone who has\nknowledge about high performance computing.")),(0,o.kt)("h2",{id:"installing-pwtk"},"Installing PWTK"),(0,o.kt)("p",null,"We will install a very hand scripting package PWscf Toolkit (PWTK). First we\nneed to install following dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install tcl tcllib\n")),(0,o.kt)("p",null,"Download the file from - ",(0,o.kt)("a",{parentName:"p",href:"http://pwtk.ijs.si/download/pwtk-2.0.tar.gz"},"http://pwtk.ijs.si/download/pwtk-2.0.tar.gz")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wget "http://pwtk.ijs.si/download/pwtk-2.0.tar.gz"\n')),(0,o.kt)("p",null,"Above command will download and save the file to your current directory. Next we\nneed to just un-tar (no need to compile):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar zxvf pwtk-2.0.tar.gz\n")),(0,o.kt)("p",null,"Add the path (modify below as appropriate) to ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=\"/root/pwtk-2.0:$PATH\"' >> ~/.bashrc\nsource ~/.bashrc\n")))}f.isMDXComponent=!0}}]);