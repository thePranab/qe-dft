"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[904],{5972:function(n,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return h}});var t=a(7462),l=a(3366),s=(a(7294),a(3905)),i=a(814),o="&CONTROL \n  calculation= 'vc-relax', \n  prefix= 'al', \n  outdir= './tmp/' \n  pseudo_dir = './'\n  etot_conv_thr= 1e-6, \n  forc_conv_thr= 1e-5\n/\n\n&SYSTEM \n  ibrav=  2, \n  celldm(1)= 7.652, \n  nat=  1,\n  ntyp= 1,\n  ecutwfc = 50, \n  ecutrho= 500,  \n  occupations= 'smearing', \n  smearing= 'gaussian', \n  degauss= 0.01\n/\n\n&ELECTRONS\n  conv_thr= 1e-8\n/\n\n&IONS \n/\n\n&CELL \n  cell_dofree= 'ibrav'\n/\n\nATOMIC_SPECIES\n  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS (alat)\n  Al 0.00 0.00 0.00\n\nK_POINTS (automatic)\n  10 10 10 0 0 0 \n",r="&CONTROL \n  calculation= 'scf', \n  restart_mode= 'from_scratch', \n  prefix= 'al', \n  outdir= './tmp/', \n  pseudo_dir= './' \n/ \n\n&SYSTEM \n  ibrav= 2, \n  celldm(1) = 7.63075, \n  nat= 1, \n  ntyp= 1, \n  ecutwfc= 50, \n  ecutrho= 500, \n  occupations= 'smearing',\n  smearing= 'gaussian',\n  degauss= 0.01\n/ \n\n&ELECTRONS\n  conv_thr= 1e-8\n/\n\nATOMIC_SPECIES\n  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS (alat)\n  Al 0.00 0.00 0.00\n\nK_POINTS (automatic)\n  10 10 10 0 0 0\n\n",c="&CONTROL \n  calculation= 'nscf', \n  restart_mode= 'from_scratch', \n  prefix= 'al', \n  outdir= './tmp/', \n  pseudo_dir= './' \n/ \n\n&SYSTEM \n  ibrav= 2, \n  celldm(1) = 7.63075, \n  nat= 1, \n  ntyp= 1, \n  ecutwfc= 50, \n  ecutrho= 500, \n  occupations= 'smearing',\n  smearing= 'gaussian',\n  degauss= 0.01\n/ \n\n&ELECTRONS\n  conv_thr= 1e-8\n/\n\nATOMIC_SPECIES\n  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS (alat)\n  Al 0.00 0.00 0.00\n\nK_POINTS (automatic)\n  40 40 40 0 0 0\n\n",u="&DOS\n  prefix= 'al',\n  outdir= './tmp/',\n  fildos= 'al_dos.dat',\n  emin= -10,\n  emax= 35\n/\n",p="&CONTROL\n  calculation= 'bands',\n  restart_mode= 'from_scratch',\n  prefix= 'al',\n  outdir= './tmp/',\n  pseudo_dir= './'\n/\n\n&SYSTEM\n  ibrav= 2,\n  celldm(1) = 7.63075,\n  nat= 1,\n  ntyp= 1,\n  ecutwfc= 50,\n  ecutrho= 500,\n  occupations= 'smearing',\n  smearing= 'gaussian',\n  degauss= 0.01\n/\n\n&ELECTRONS\n  conv_thr= 1e-8\n/\n\nATOMIC_SPECIES\n  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS (alat)\n  Al 0.00 0.00 0.00\n\nK_POINTS {crystal_b}\n5\n  00.000 0.500 00.000 20  !L\n  00.000 0.000 00.000 30  !G\n  -0.500 0.000 -0.500 10  !X\n  -0.375 0.250 -0.375 30  !U\n  00.000 0.000 00.000 20  !G\n",d="&BANDS\n  prefix = 'al'\n  outdir = './tmp/'\n  filband = 'al_bands.dat'\n/\n",m=["components"],f={title:"DOS and bandstructure for Aluminum (metal)",sidebar_label:"Al (metal)"},g=void 0,b={unversionedId:"hands-on/aluminum",id:"hands-on/aluminum",title:"DOS and bandstructure for Aluminum (metal)",description:"Variable cell relaxation",source:"@site/docs/hands-on/aluminum.mdx",sourceDirName:"hands-on",slug:"/hands-on/aluminum",permalink:"/espresso/hands-on/aluminum",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/aluminum.mdx",tags:[],version:"current",frontMatter:{title:"DOS and bandstructure for Aluminum (metal)",sidebar_label:"Al (metal)"},sidebar:"docs",previous:{title:"Bandstructure",permalink:"/espresso/hands-on/bands"},next:{title:"P-DOS",permalink:"/espresso/hands-on/pdos"}},k={},h=[{value:"Variable cell relaxation",id:"variable-cell-relaxation",level:2},{value:"Self consistent field (SCF) calculation",id:"self-consistent-field-scf-calculation",level:2},{value:"Non-self consistent field calculation",id:"non-self-consistent-field-calculation",level:2},{value:"Density of states",id:"density-of-states",level:2},{value:"Bandstructure calculation",id:"bandstructure-calculation",level:2},{value:"Importance of smearing in convergence",id:"importance-of-smearing-in-convergence",level:2}],_={toc:h},N="wrapper";function v(n){var e=n.components,f=(0,l.Z)(n,m);return(0,s.kt)(N,(0,t.Z)({},_,f,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"variable-cell-relaxation"},"Variable cell relaxation"),(0,s.kt)("p",null,"First we are going to relax the cell and choose appropriate lattice constant for\nour chosen pseudo potential. In case of metals, it is important to provide\nsmearing parameters in the input file."),(0,s.kt)(i.Z,{language:"bash",title:"src/al/al_vc_relax.in",showLineNumbers:!0,mdxType:"CodeBlock"},o),(0,s.kt)("p",null,"We run ",(0,s.kt)("inlineCode",{parentName:"p"},"pw.x")," to perform variable cell relaxation calculation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < al_vc_relax.in > al_vc_relax.out\n")),(0,s.kt)("p",null,"Now you may open the output file in ",(0,s.kt)("strong",{parentName:"p"},"vi")," editor and invoke search by pressing\n",(0,s.kt)("inlineCode",{parentName:"p"},"/")," and type ",(0,s.kt)("em",{parentName:"p"},"Final enthalpy")," You will find the final lattice parameters below\nit."),(0,s.kt)("h2",{id:"self-consistent-field-scf-calculation"},"Self consistent field (SCF) calculation"),(0,s.kt)("p",null,"We obtain relaxed lattice constant = 7.652 * 0.498611683 / 0.5 = 7.63075 Bohr.\nWe will use this value for our next step, self consistent calculation."),(0,s.kt)(i.Z,{language:"bash",title:"src/al/al_scf.in",showLineNumbers:!0,mdxType:"CodeBlock"},r),(0,s.kt)("p",null,"We run our self consistent calculation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < al_scf.in > al_scf.out\n")),(0,s.kt)("h2",{id:"non-self-consistent-field-calculation"},"Non-self consistent field calculation"),(0,s.kt)("p",null,"Inspect the output file, and let's proceed to next step non-self consistent\ncalculation:"),(0,s.kt)(i.Z,{language:"bash",title:"src/al/al_nscf.in",showLineNumbers:!0,mdxType:"CodeBlock"},c),(0,s.kt)("p",null,"Note the changes in input file. The calculation changed to ",(0,s.kt)("inlineCode",{parentName:"p"},"nscf")," and we are now\nusing a higher number of k-points grid."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < al_nscf.in > al_nscf.out\n")),(0,s.kt)("h2",{id:"density-of-states"},"Density of states"),(0,s.kt)("p",null,"Next we go ahead with our density of states calculation:"),(0,s.kt)(i.Z,{language:"bash",title:"src/al/al_dos.in",showLineNumbers:!0,mdxType:"CodeBlock"},u),(0,s.kt)("p",null,"We run ",(0,s.kt)("inlineCode",{parentName:"p"},"dos.x")," with DOS inputs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dos.x < al_dos.in > al_dos.out\n")),(0,s.kt)("p",null,"Note from our ",(0,s.kt)("inlineCode",{parentName:"p"},"al_nscf.out")," that our Fermi energy is at 7.9421 eV. We plot our\ndensity of states:"),(0,s.kt)("picture",null,(0,s.kt)("source",{type:"image/webp",srcSet:a(5615).Z}),(0,s.kt)("img",{src:a(960).Z,alt:"al-dos"})),(0,s.kt)("h2",{id:"bandstructure-calculation"},"Bandstructure calculation"),(0,s.kt)("p",null,"We prepare the input file the same as the case of our previous example silicon:"),(0,s.kt)(i.Z,{language:"bash",title:"src/al/al_bands.in",showLineNumbers:!0,mdxType:"CodeBlock"},p),(0,s.kt)("p",null,"Followed by run ",(0,s.kt)("inlineCode",{parentName:"p"},"pw.x"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < al_bands.in > al_bands.out\n")),(0,s.kt)("p",null,"Now we proceed with post-processing:"),(0,s.kt)(i.Z,{language:"bash",title:"src/al/al_bands_pp.in",showLineNumbers:!0,mdxType:"CodeBlock"},d),(0,s.kt)("p",null,"And run ",(0,s.kt)("inlineCode",{parentName:"p"},"bands.x"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bands.x < al_bands_pp.in > al_bands_pp.out\n")),(0,s.kt)("p",null,"We obtain the following bandstructure:"),(0,s.kt)("picture",null,(0,s.kt)("source",{type:"image/webp",srcSet:a(4153).Z}),(0,s.kt)("img",{src:a(2842).Z,alt:"al-bands"})),(0,s.kt)("h2",{id:"importance-of-smearing-in-convergence"},"Importance of smearing in convergence"),(0,s.kt)("p",null,"Here we will test the convergence using PWTK against number of k-points, three\ndifferent smearing functions (Gauss, Methfessel-Paxton, and Marzari-Vanderbilt),\nand for various smearing values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwtk al.degauss.pwtk\n")),(0,s.kt)("picture",null,(0,s.kt)("source",{type:"image/webp",srcSet:a(3632).Z}),(0,s.kt)("img",{src:a(2940).Z,alt:"al-smearing"})),(0,s.kt)("p",null,"We see that the ",(0,s.kt)("inlineCode",{parentName:"p"},"m-v")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"m-p")," broadening allow for faster and smother\nconvergence while depending less on ",(0,s.kt)("inlineCode",{parentName:"p"},"degauss")," value than Gaussian broadening.\nThe number suffix next to the legend labels are number of uniform k-points in\nMonkhorst-Plank grid."))}v.isMDXComponent=!0},2842:function(n,e,a){e.Z=a.p+"assets/images/al-bands-80a59f979dc76cc93a8a3f0098e552db.png"},4153:function(n,e,a){e.Z=a.p+"assets/images/al-bands-263ee17f888fd759e02a3ccd0fb26952.webp"},960:function(n,e,a){e.Z=a.p+"assets/images/al-dos-1a1a20854f28a36239168339111e6b9e.png"},5615:function(n,e,a){e.Z=a.p+"assets/images/al-dos-2de0749d0dfd3663a87c46f12a56f226.webp"},2940:function(n,e,a){e.Z=a.p+"assets/images/al-smearing-5ed252d6a01bf986d7bbebf6226b6feb.png"},3632:function(n,e,a){e.Z=a.p+"assets/images/al-smearing-b0cd82054a83bde2e60e5d7f57866f10.webp"}}]);