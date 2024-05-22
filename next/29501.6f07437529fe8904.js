(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29501],{29501:(e,o,t)=>{t.r(o),t.d(o,{default:()=>u});var s=t(85483),n=t(35548),i=t(70288),a=t(34962);const u=(()=>{var e;class o{constructor(){this.jestConfigJs=t.e(32033).then(t.t.bind(t,32033,17)),this.packageJson=t.e(91173).then(t.t.bind(t,91173,17)),this.setupJestJs=t.e(83380).then(t.t.bind(t,83380,17))}}return(e=o).ɵfac=function(o){return new(o||e)},e.ɵcmp=n.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[n.jDz],decls:67,vars:3,consts:[["header","Jest"],[1,"tui-list"],[1,"tui-list__item"],["filename","jest.config.js",3,"code"],["filename","package.json",3,"code"],["filename","setup-jest.js",3,"code"]],template:function(e,o){1&e&&(n.TgZ(0,"tui-doc-page",0)(1,"p"),n._uU(2," If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js emulator. "),n.qZA(),n.TgZ(3,"p"),n._uU(4," Taiga UI uses "),n.TgZ(5,"code"),n._uU(6,"@ng-web-apis/common"),n.qZA(),n._uU(7," to avoid accessing global variables like "),n.TgZ(8,"code"),n._uU(9,"window"),n.qZA(),n._uU(10," or "),n.TgZ(11,"code"),n._uU(12,"navigator"),n.qZA(),n._uU(13," directly. Which requires Server Side Rendering (SSR) with the help of its sister library "),n.TgZ(14,"code"),n._uU(15,"@ng-web-apis/universal"),n.qZA(),n._uU(16," for Jest to run properly. "),n.qZA(),n.TgZ(17,"p"),n._uU(18," Otherwise, you're gonna face errors like "),n.TgZ(19,"code"),n._uU(20,"ReferenceError: IntersectionObserver is not defined"),n.qZA()(),n.TgZ(21,"h2"),n._uU(22," Using "),n.TgZ(23,"code"),n._uU(24,"@angular-builders/jest"),n.qZA(),n._uU(25," or "),n.TgZ(26,"code"),n._uU(27,"jest-preset-angular"),n.qZA()(),n.TgZ(28,"p"),n._uU(29,"If you're using one of these libraries. You can follow the following steps :"),n.qZA(),n.TgZ(30,"ol",1)(31,"li",2),n._uU(32," Install "),n.TgZ(33,"code"),n._uU(34,"npm i @ng-web-apis/universal --save-dev"),n.qZA(),n._uU(35," (install it as a devDependency only if you will use it for Jest, otherwise install it as a regular dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x. "),n.qZA(),n.TgZ(36,"li",2),n._uU(37," Add a "),n.TgZ(38,"code"),n._uU(39,"setupFilesAfterEnv"),n.qZA(),n._uU(40," property to your "),n.TgZ(41,"code"),n._uU(42,"jest.config.js"),n.qZA(),n._uU(43," or "),n.TgZ(44,"code"),n._uU(45,"package.json"),n.qZA(),n._uU(46," jest configuration (depending on where your configuration is) with the path to "),n.TgZ(47,"code"),n._uU(48,"setup-jest.js"),n.qZA(),n._uU(49," if you have not already. "),n._UZ(50,"tui-doc-code",3),n._uU(51," or "),n._UZ(52,"tui-doc-code",4),n.qZA(),n.TgZ(53,"li",2),n._uU(54," Create the file "),n.TgZ(55,"code"),n._uU(56,"setup-jest.js"),n.qZA(),n._uU(57," (wherever you want as long as it's at the path referenced above) if you have not already. For example here at the root of the project. "),n.qZA(),n.TgZ(58,"li",2),n._uU(59," Add the following line to the "),n.TgZ(60,"code"),n._uU(61,"setup-jest.js"),n.qZA(),n._uU(62," : "),n.TgZ(63,"code"),n._uU(64,"import '@ng-web-apis/universal/mocks';"),n.qZA(),n._uU(65," . "),n._UZ(66,"tui-doc-code",5),n.qZA()()()),2&e&&(n.xp6(50),n.Q6J("code",o.jestConfigJs),n.xp6(2),n.Q6J("code",o.packageJson),n.xp6(14),n.Q6J("code",o.setupJestJs))},dependencies:[s.kG,i.c,a.q],encapsulation:2,changeDetection:0}),o})()}}]);