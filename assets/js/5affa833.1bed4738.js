"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[3536],{1081:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"hands-on/scf","title":"Self consistent field calculation for silicon","description":"We need to provide various important parameters for the self consistent","source":"@site/docs/hands-on/scf.mdx","sourceDirName":"hands-on","slug":"/hands-on/scf","permalink":"/espresso/hands-on/scf","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/scf.mdx","tags":[],"version":"current","frontMatter":{"title":"Self consistent field calculation for silicon","sidebar_label":"SCF calculation","keywords":["SCF calculation","Self consistent field calculation","Self consistent calculation","SCF calculation using Quantum Espresso","Silicon bandstructure","Quantum Espresso input"]},"sidebar":"docs","previous":{"title":"Hands-on","permalink":"/espresso/category/hands-on"},"next":{"title":"Convergence testing","permalink":"/espresso/hands-on/convergence"}}');var t=s(4848),o=s(8453),r=s(1432);const a="&CONTROL\n! we want to perform self consistent field calculation\n  calculation = 'scf',\n\n! prefix is reference to the output files\n  prefix = 'silicon',\n\n! output directory. Note that it is deprecated.\n  outdir = './tmp/'\n\n! directory for the pseudo potential directory\n  pseudo_dir = '../pseudos/'\n\n! verbosity high will give more details on the output file\n  verbosity = 'high'\n/\n\n&SYSTEM\n! Bravais lattice index, which is 2 for FCC structure\n  ibrav =  2,\n\n! Lattice constant in BOHR\n  celldm(1) = 10.26,\n\n! number of atoms in an unit cell\n  nat =  2,\n\n! number of different types of atom in the cell\n  ntyp = 1,\n\n! kinetic energy cutoff for wavefunction in Ry\n  ecutwfc = 30\n\n! number of bands to calculate\n  nbnd = 8\n/\n\n&ELECTRONS\n! Mixing factor used in the self-consistent method\n  mixing_beta = 0.6\n/\n\nATOMIC_SPECIES\n  Si 28.086 Si.pz-vbc.UPF\n\nATOMIC_POSITIONS (alat)\n  Si 0.0 0.0 0.0\n  Si 0.25 0.25 0.25\n\nK_POINTS (automatic)\n  6 6 6 0 0 0\n",c={title:"Self consistent field calculation for silicon",sidebar_label:"SCF calculation",keywords:["SCF calculation","Self consistent field calculation","Self consistent calculation","SCF calculation using Quantum Espresso","Silicon bandstructure","Quantum Espresso input"]},l=void 0,d={},h=[{value:"Resources",id:"resources",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["We need to provide various important parameters for the self consistent\ncalculation (solves the Kohn-Sham equation self-consistently) via an input file.\nIn QE input files, there are ",(0,t.jsx)(n.code,{children:"NAMELISTS"})," and ",(0,t.jsx)(n.code,{children:"INPUT_CARDS"}),". ",(0,t.jsx)(n.code,{children:"NAMELISTS"}),"\nvariables have default values, and new values can be provided as required for a\nspecific calculation. The variables can be declared in any specific order. On\nthe other hand, the variables in the ",(0,t.jsx)(n.code,{children:"INPUT_CARDS"})," has always to be specified\nand in specific order. Logically independent ",(0,t.jsx)(n.code,{children:"INPUT_CARDS"})," may be organized in\nany order."]}),"\n",(0,t.jsxs)(n.p,{children:["There are three mandatory ",(0,t.jsx)(n.code,{children:"NAMELISTS"})," in ",(0,t.jsx)(n.code,{children:"PWscf"}),": (1) ",(0,t.jsx)(n.code,{children:"&CONTROL"}),": specifies the\nflux of computation, (2) ",(0,t.jsx)(n.code,{children:"&SYSTEM"}),": specifies the system, and (3) ",(0,t.jsx)(n.code,{children:"&ELECTRONS"}),":\nspecifies the algorithms used to solve the Kohn-Sham equation. There are two\nother ",(0,t.jsx)(n.code,{children:"NAMELISTS"}),": ",(0,t.jsx)(n.code,{children:"&IONS"})," and ",(0,t.jsx)(n.code,{children:"&CELLS"}),", which need to be specified depending on\nthe calculation."]}),"\n",(0,t.jsxs)(n.p,{children:["Three ",(0,t.jsx)(n.code,{children:"INPUT_CARDS"}),": ",(0,t.jsx)(n.code,{children:"ATOMIC_SPECIES"}),", ",(0,t.jsx)(n.code,{children:"ATOMIC_POSITIONS"}),", and ",(0,t.jsx)(n.code,{children:"K_POINTS"})," in\n",(0,t.jsx)(n.code,{children:"PWscf"})," are mandatory. There are few others that must be provided in certain\ncalculations."]}),"\n",(0,t.jsxs)(n.p,{children:["Below is our input file ",(0,t.jsx)(n.a,{href:"https://github.com/pranabdas/espresso/tree/main/src/silicon",children:"pw.scf.silicon.in"})," for silicon in\nstandard diamond (FCC) structure. Note that Quantum ESPRESSO uses primitive unit\ncell when ",(0,t.jsx)(n.code,{children:"CELL_PARAMETERS"})," are not provided. One can use any other type of cell\ne.g., conventional unit cell or supercell by specifying corresponding\n",(0,t.jsx)(n.code,{children:"CELL_PARAMETERS"})," and ",(0,t.jsx)(n.code,{children:"ATOMIC_POSITIONS"}),".The input files are typically named\nwith ",(0,t.jsx)(n.code,{children:".in"})," prefix, while output files are named with ",(0,t.jsx)(n.code,{children:".out"})," prefix for their\neasier identification. The input parameters are organized in ",(0,t.jsx)(n.code,{children:"&namelists"}),"\nfollowed by their fields or cards. The ",(0,t.jsx)(n.code,{children:"&control"}),", ",(0,t.jsx)(n.code,{children:"&system"}),", and ",(0,t.jsx)(n.code,{children:"&electrons"}),"\nnamelists are required. There are also optional ",(0,t.jsx)(n.code,{children:"&cell"})," and ",(0,t.jsx)(n.code,{children:"&ions"}),", you must\nprovide them if your calculation require them. Most parameters in the\n",(0,t.jsx)(n.code,{children:"namelists"})," have default values (which may or may not suit your needs), however\nsome variables you must always provide. Comment lines can be added with lines\nstarting with a ",(0,t.jsx)(n.code,{children:"!"})," like in FORTRAN. Also, parameter names are not\ncase-sensitive as in FORTRAN, i.e., ",(0,t.jsx)(n.code,{children:"&control"})," and ",(0,t.jsx)(n.code,{children:"&CONTROL"})," are the same."]}),"\n","\n",(0,t.jsx)(r.A,{language:"bash",title:"src/silicon/pw.scf.silicon.in",showLineNumbers:!0,children:a}),"\n",(0,t.jsxs)(n.p,{children:["I am using the pseudo potential file (",(0,t.jsx)(n.code,{children:"Si.pz-vbc.UPF"}),") downloaded from ",(0,t.jsx)(n.a,{href:"https://www.quantum-espresso.org/pseudopotentials",children:"Quantum\nEspresso Website"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You must read the ",(0,t.jsx)(n.strong,{children:"PWscf user manual"})," for in-depth understanding. Check the\n",(0,t.jsx)(n.code,{children:"qe-x.x/PW/Doc/"})," folder under your installation directory. Also see\n",(0,t.jsx)(n.code,{children:"INPUT_PW.html"})," describing various input parameters. PW stands for plane waves."]}),"\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"pw.x"})," in self consistent mode for silicon."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pw.x < pw.scf.silicon.in > pw.scf.silicon.out\n# For parallel execution\nmpirun -np 4 pw.x -inp pw.scf.silicon.in > pw.scf.silicon.out\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["I have added the Quantum ESPRESSO executable directory to the ",(0,t.jsx)(n.code,{children:"PATH"})," environment\nvariable in bash/zsh profile, otherwise we have to type the full path of ",(0,t.jsx)(n.code,{children:"pw.x"}),"\nexecutable location."]})}),"\n",(0,t.jsxs)(n.p,{children:["Now let's look at the output file ",(0,t.jsx)(n.code,{children:"pw.scf.silicon.out"})," and see how the\nconvergence is reached:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"grep -e 'total energy' -e estimate pw.scf.silicon.out\n"})}),"\n",(0,t.jsx)(n.p,{children:"and you should see something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"     total energy              =     -15.85014573 Ry\n     Harris-Foulkes estimate   =     -15.86899637 Ry\n     estimated scf accuracy    <       0.06093037 Ry\n     total energy              =     -15.85194177 Ry\n     Harris-Foulkes estimate   =     -15.85292281 Ry\n     estimated scf accuracy    <       0.00462014 Ry\n     total energy              =     -15.85218359 Ry\n     Harris-Foulkes estimate   =     -15.85220235 Ry\n     estimated scf accuracy    <       0.00011293 Ry\n!    total energy              =     -15.85219789 Ry\n     Harris-Foulkes estimate   =     -15.85219831 Ry\n     estimated scf accuracy    <       0.00000099 Ry\n     The total energy is the sum of the following terms:\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is important to note that the absolute value of DFT total energy is not with\nrespect to the vacuum reference, and depends on the chosen pseudopotential. The\nmeaningful measure is the difference in total energy, where various offsets\ncancel out."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In the above calculation, if you check the output file ",(0,t.jsx)(n.code,{children:"pw.scf.silicon.out"}),", you\nwill find: highest occupied, lowest unoccupied level (eV): 6.2117 6.8442.\nTherefore, the bandgap is 0.6325 eV, which is an underestimation of actual\nbandgap (1.12 eV)."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Tips on convergence",type:"tip",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Reduce ",(0,t.jsx)(n.code,{children:"mixing_beta"})," value, especially if there is an oscillation around the\nconvergence energy."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If it is a metallic system, use smearing and degauss. In this case, the SCF\naccuracy gradually goes down then suddenly increases (due to slight change in\nFermi energy highest occupied/ lowest unoccupied levels change)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Increase energy and charge density cutoffs (make sure they are sufficient)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Certain pseudo potential files have issues, you may try with pseudo\npotentials from different libraries."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Suggested values for the ",(0,t.jsx)(n.code,{children:"conv_thr"}),": for energy and eigenvalues (scf\ncalculation) 1.0d-7, for forces (relax calculation) 1.0d-8, for stress (vc-relax\ncalculation) 1.0d-9 Ry. For certain calculation convergence might be very slow\nfor the first iteration, one can start the calculation with a higher threshold,\nafter few iterations reduce it and restart the calculation."]}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"There are several other important information is printed on the output file.\nExchange correlation used in the calculation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Exchange-correlation= SLA  PZ   NOGX NOGC\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"SLA"})," \u2192 Slater exchange; ",(0,t.jsx)(n.code,{children:"PZ"})," \u2192 Perdew-Zunger parametrization of the LDA;\n",(0,t.jsx)(n.code,{children:"NOGX"})," and ",(0,t.jsx)(n.code,{children:"NOGC"})," indicates that density gradients are not taken into account."]}),"\n",(0,t.jsx)(n.p,{children:"We can see the total number of plane waves (1067) uses in our calculation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Parallelization info\n--------------------\nsticks:   dense  smooth     PW     G-vecs:    dense   smooth      PW\nMin         108     108     34                 1489     1489     266\nMax         109     109     35                 1492     1492     267\nSum         433     433    139                 5961     5961    1067\n"})}),"\n",(0,t.jsx)(n.p,{children:"Number of Kohn-Sham states:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"number of electrons       =         8.00\nnumber of Kohn-Sham states=            8\n"})}),"\n",(0,t.jsx)(n.p,{children:"In our calculation we have specified the number of bands = 8. Otherwise, there\nwould be 4 bands for 8 electrons in case of non spin-polarized systems."}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.quantum-espresso.org/Doc/pw_user_guide/",children:"https://www.quantum-espresso.org/Doc/pw_user_guide/"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.materialscloud.org/work/tools/qeinputgenerator",children:"Quantum Espresso Input Generator"})," (can help creating QE input files)"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);