(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[74269],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23442:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),l={title:"\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b"},i={unversionedId:"core-concepts/application",id:"version-v1.1/core-concepts/application",isDocsHomePage:!1,title:"\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b",description:"KubeVela \u80cc\u540e\u7684\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\u662f Open Application Model\uff0c\u7b80\u79f0 OAM \uff0c\u5176\u6838\u5fc3\u662f\u5c06\u5e94\u7528\u90e8\u7f72\u6240\u9700\u7684\u6240\u6709\u7ec4\u4ef6\u548c\u5404\u9879\u8fd0\u7ef4\u52a8\u4f5c\uff0c\u63cf\u8ff0\u4e3a\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u4e0e\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u201c\u90e8\u7f72\u8ba1\u5212\u201d\uff0c\u8fdb\u800c\u5b9e\u73b0\u5728\u6df7\u5408\u73af\u5883\u4e2d\u8fdb\u884c\u6807\u51c6\u5316\u548c\u9ad8\u6548\u7387\u7684\u5e94\u7528\u4ea4\u4ed8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/core-concepts/application.md",sourceDirName:"core-concepts",slug:"/core-concepts/application",permalink:"/zh/docs/core-concepts/application",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/core-concepts/application.md",version:"v1.1",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1634366790,formattedLastUpdatedAt:"2021/10/16",frontMatter:{title:"\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b"},sidebar:"version-v1.1/docs",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/core-concepts/architecture"},next:{title:"Jenkins CI/CD",permalink:"/zh/docs/case-studies/jenkins-cicd"}},p=[{value:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff08Application\uff09",id:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff08application\uff09",children:[]},{value:"\u7ec4\u4ef6\uff08Components\uff09",id:"\u7ec4\u4ef6\uff08components\uff09",children:[]},{value:"\u8fd0\u7ef4\u7279\u5f81\uff08Traits\uff09",id:"\u8fd0\u7ef4\u7279\u5f81\uff08traits\uff09",children:[]},{value:"\u5e94\u7528\u7b56\u7565\uff08Policy)",id:"\u5e94\u7528\u7b56\u7565\uff08policy",children:[]},{value:"\u5de5\u4f5c\u6d41\uff08Workflow\uff09",id:"\u5de5\u4f5c\u6d41\uff08workflow\uff09",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:p};function s(e){var n=e.components,l=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"KubeVela \u80cc\u540e\u7684\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\u662f ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/oam/oam-model"},"Open Application Model"),"\uff0c\u7b80\u79f0 OAM \uff0c\u5176\u6838\u5fc3\u662f\u5c06\u5e94\u7528\u90e8\u7f72\u6240\u9700\u7684\u6240\u6709\u7ec4\u4ef6\u548c\u5404\u9879\u8fd0\u7ef4\u52a8\u4f5c\uff0c\u63cf\u8ff0\u4e3a\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u4e0e\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u201c\u90e8\u7f72\u8ba1\u5212\u201d\uff0c\u8fdb\u800c\u5b9e\u73b0\u5728\u6df7\u5408\u73af\u5883\u4e2d\u8fdb\u884c\u6807\u51c6\u5316\u548c\u9ad8\u6548\u7387\u7684\u5e94\u7528\u4ea4\u4ed8\u3002"),(0,o.kt)("h2",{id:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff08application\uff09"},"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff08Application\uff09"),(0,o.kt)("p",null,"KubeVela \u901a\u8fc7\u58f0\u660e\u5f0f YAML \u6587\u4ef6\u7684\u65b9\u5f0f\u6765\u63cf\u8ff0\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u3002\u4e00\u4e2a\u5178\u578b\u7684\u6837\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # \u6bd4\u5982\u6211\u4eec\u5e0c\u671b\u90e8\u7f72\u4e00\u4e2a\u5b9e\u73b0\u524d\u7aef\u4e1a\u52a1\u7684 Web Service \u7c7b\u578b\u7ec4\u4ef6\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: cpuscaler         # \u7ed9\u7ec4\u4ef6\u8bbe\u7f6e\u4e00\u4e2a\u53ef\u4ee5\u52a8\u6001\u8c03\u8282 CPU \u4f7f\u7528\u7387\u7684 cpuscaler \u7c7b\u578b\u8fd0\u7ef4\u7279\u5f81\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar           # \u5f80\u8fd0\u884c\u65f6\u96c6\u7fa4\u90e8\u7f72\u4e4b\u524d\uff0c\u6ce8\u5165\u4e00\u4e2a\u505a\u8f85\u52a9\u5de5\u4f5c\u7684 sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n  policies:\n    - name: demo-policy\n      type: env-binding\n      properties:\n        envs:\n          - name: test\n            placement:\n              clusterSelector:\n                name: cluster-test\n          - name: prod\n            placement:\n              clusterSelector:\n                name: cluster-prod\n  workflow:\n    steps:\n        # \u6b65\u9aa4\u540d\u79f0\n      - name: deploy-test-env\n        # \u6307\u5b9a\u6b65\u9aa4\u7c7b\u578b\n        type: deploy2env\n        properties:\n          # \u6307\u5b9a\u7b56\u7565\u540d\u79f0\n          policy: demo-policy\n          # \u6307\u5b9a\u90e8\u7f72\u7684\u73af\u5883\u540d\u79f0\n          env: test    \n      - name: manual-approval\n        # \u5de5\u4f5c\u6d41\u5185\u7f6e suspend \u7c7b\u578b\u7684\u4efb\u52a1\uff0c\u7528\u4e8e\u6682\u505c\u5de5\u4f5c\u6d41\n        type: suspend\n      - name: deploy-prod-env\n        type: deploy2env\n        properties:\n          policy: demo-policy\n          env: prod    \n')),(0,o.kt)("p",null,"\u5728\u4f7f\u7528\u65f6\uff0c\u4e00\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7531\u7ec4\u4ef6\u3001\u8fd0\u7ef4\u7279\u5f81\u3001\u7b56\u7565\u3001\u5de5\u4f5c\u6d41\u7b49\u591a\u4e2a\u6a21\u5757\u7ec4\u88c5\u800c\u6210\u3002"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\uff08components\uff09"},"\u7ec4\u4ef6\uff08Components\uff09"),(0,o.kt)("p",null,"\u4e00\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u53ef\u4ee5\u5305\u542b\u5f88\u591a\u5f85\u90e8\u7f72\u7ec4\u4ef6\u3002KubeVela \u5185\u7f6e\u4e86\u5e38\u7528\u7684\u7ec4\u4ef6\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"../install#3-%E5%AE%89%E8%A3%85-kubevela-cli"},"KubeVela CLI")," \u547d\u4ee4\u67e5\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela components \n")),(0,o.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME        NAMESPACE   WORKLOAD                                DESCRIPTION                                                 \nalibaba-rds default     configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object        \ntask        vela-system jobs.batch                              Describes jobs that run code or a script to completion.     \nwebservice  vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                that have a stable network endpoint to receive external     \n                                                                network traffic from customers.                             \nworker      vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                that running at backend. They do NOT have network endpoint  \n                                                                to receive external network traffic.                        \n\n")),(0,o.kt)("h2",{id:"\u8fd0\u7ef4\u7279\u5f81\uff08traits\uff09"},"\u8fd0\u7ef4\u7279\u5f81\uff08Traits\uff09"),(0,o.kt)("p",null,"\u8fd0\u7ef4\u7279\u5f81\u662f\u53ef\u4ee5\u968f\u65f6\u7ed1\u5b9a\u7ed9\u5f85\u90e8\u7f72\u7ec4\u4ef6\u7684\u3001\u6a21\u5757\u5316\u7684\u8fd0\u7ef4\u80fd\u529b\u3002KubeVela \u4e5f\u5185\u7f6e\u4e86\u5e38\u7528\u7684\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"../install#3-%E5%AE%89%E8%A3%85-kubevela-cli"},"KubeVela CLI")," \u547d\u4ee4\u67e5\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela traits \n")),(0,o.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION                                          \nannotations vela-system deployments.apps                    true            Add annotations for your Workload.                   \ncpuscaler   vela-system webservice,worker                   false           Automatically scale the component based on CPU usage.\ningress     vela-system webservice,worker                   false           Enable public web traffic for the component.         \nlabels      vela-system deployments.apps                    true            Add labels for your Workload.                        \nscaler      vela-system webservice,worker                   false           Manually scale the component.                        \nsidecar     vela-system deployments.apps                    true            Inject a sidecar container to the component.   \n")),(0,o.kt)("h2",{id:"\u5e94\u7528\u7b56\u7565\uff08policy"},"\u5e94\u7528\u7b56\u7565\uff08Policy)"),(0,o.kt)("p",null,"\u5e94\u7528\u7b56\u7565\uff08Policy\uff09\u8d1f\u8d23\u5b9a\u4e49\u6307\u5b9a\u5e94\u7528\u4ea4\u4ed8\u8fc7\u7a0b\u4e2d\u7684\u7b56\u7565\uff0c\u6bd4\u5982\u8d28\u91cf\u4fdd\u8bc1\u7b56\u7565\u3001\u5b89\u5168\u7ec4\u7b56\u7565\u3001\u9632\u706b\u5899\u89c4\u5219\u3001SLO \u76ee\u6807\u3001\u653e\u7f6e\u7b56\u7565\u7b49\u7b49\u3002"),(0,o.kt)("h2",{id:"\u5de5\u4f5c\u6d41\uff08workflow\uff09"},"\u5de5\u4f5c\u6d41\uff08Workflow\uff09"),(0,o.kt)("p",null,"\u5de5\u4f5c\u6d41\u5141\u8bb8\u7528\u6237\u5c06\u7ec4\u4ef6\u3001\u8fd0\u7ef4\u7279\u5f81\u3001\u5177\u4f53\u7684\u4ea4\u4ed8\u52a8\u4f5c\u7b49\u4e00\u7cfb\u5217\u5143\u7d20\u7ec4\u88c5\u6210\u4e3a\u4e00\u4e2a\u5b8c\u6574\u7684\u3001\u9762\u5411\u8fc7\u7a0b\u7684\u6709\u5411\u65e0\u73af\u56fe\uff08DAG\uff09\u3002\u5178\u578b\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5305\u62ec\u6682\u505c\u3001\u4eba\u5de5\u5ba1\u6838\u3001\u7b49\u5f85\u3001\u6570\u636e\u4f20\u9012\u3001\u591a\u73af\u5883/\u591a\u96c6\u7fa4\u53d1\u5e03\u3001A/B \u6d4b\u8bd5\u7b49\u7b49\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:t(51702).Z})),(0,o.kt)("p",null,"\u6bcf\u4e00\u4e2a\u7b56\u7565\u548c\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5728 KubeVela \u4e2d\u90fd\u662f\u4e00\u4e2a\u5b8c\u5168\u53ef\u63d2\u62d4\u7684\u72ec\u7acb\u529f\u80fd\u6a21\u5757\uff0cKubeVela \u5141\u8bb8\u4f60\u901a\u8fc7 CUE \u8bed\u8a00\u81ea\u7531\u7684\u5b9a\u4e49\u548c\u521b\u5efa\u5c5e\u4e8e\u81ea\u5df1\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4\u6765\u7ec4\u6210\u81ea\u5df1\u7684\u4ea4\u4ed8\u8ba1\u5212\u3002"),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("p",null,"\u540e\u7eed\u6b65\u9aa4:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u52a0\u5165 KubeVela \u4e2d\u6587\u793e\u533a\u9489\u9489\u7fa4\uff0c\u7fa4\u53f7\uff1a23310022\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9605\u8bfb",(0,o.kt)("a",{parentName:"li",href:"../end-user/components/helm"},(0,o.kt)("strong",{parentName:"a"},"\u7528\u6237\u624b\u518c")),"\uff0c\u4ece Helm \u7ec4\u4ef6\u5f00\u59cb\u4e86\u89e3\u5982\u4f55\u6784\u5efa\u4f60\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9605\u8bfb",(0,o.kt)("a",{parentName:"li",href:"../platform-engineers/oam/oam-model"},(0,o.kt)("strong",{parentName:"a"},"\u7ba1\u7406\u5458\u624b\u518c")),"\u4e86\u89e3\u5f00\u653e\u5e94\u7528\u6a21\u578b\u7684\u7ec6\u8282\u3002")))}s.isMDXComponent=!0},51702:function(e,n,t){"use strict";n.Z=t.p+"assets/images/workflow-e0a579e6870f49f8772beea717e72efb.png"}}]);