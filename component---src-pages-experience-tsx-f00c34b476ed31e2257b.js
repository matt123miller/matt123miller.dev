"use strict";(self.webpackChunkmatt123miller_github_io=self.webpackChunkmatt123miller_github_io||[]).push([[265],{6716:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.center;return a.createElement("div",{className:"separator-icon "+(t&&"mx-auto")})}},162:function(e,t,n){var a=n(7294),r=n(6716);t.Z=function(e){var t=e.title,n=e.center,l=e.subtitle;return a.createElement("div",{className:"flex flex-col w-full"},l&&a.createElement("h4",{className:"text-xs w-full text-left "+(n&&"text-center")},l),a.createElement("h2",{className:"uppercase mb-4 text-lg font-bold w-full text-left "+(n&&"text-center")},t),a.createElement(r.Z,{center:n}))}},5389:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.content;return a.createElement("div",{className:"format-html text-content-container",dangerouslySetInnerHTML:{__html:t}})}},1406:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),r=n(2604),l=n(1503),c=n(5444),m=function(e){var t=e.title,n=e.subtitle,r=e.content,l=e.startDate,c=e.endDate;return a.createElement("div",{className:"timeline sm:flex-row"},a.createElement("span",{className:"point"}),a.createElement("div",{className:"w-full sm:w-1/3"},a.createElement("h2",{className:"font-semibold"},t),a.createElement("hr",{className:"hidden sm:block sm:mr-4"}),a.createElement("p",null,n),a.createElement("p",null,l," - ",c),a.createElement("hr",{className:"block sm:hidden sm:mr-4"})),a.createElement("div",{className:"w-full sm:w-2/3 mt-4 sm:mt-0"},r))},s=n(4224),i=n(162),o=n(5389),u=function(){var e=(0,c.useStaticQuery)("4033427577"),t=e.markdownRemark,n=e.allMarkdownRemark,r=t.frontmatter,l=n.edges;return a.createElement(s.Z,{section:!0},a.createElement(i.Z,{title:r.title}),l.map((function(e){var t=e.node,n=t.id,r=t.html,l=t.frontmatter,c=l.company,s=l.position,i=l.startDate,u=l.endDate;return a.createElement(m,{key:n,title:c,subtitle:s,content:a.createElement(o.Z,{content:r}),startDate:i,endDate:u})})))},f=function(){var e=(0,c.useStaticQuery)("2252611511"),t=e.markdownRemark,n=e.allMarkdownRemark,r=t.frontmatter,l=n.edges;return a.createElement(s.Z,{section:!0},a.createElement(i.Z,{title:r.title}),l.map((function(e){var t=e.node,n=t.id,r=t.html,l=t.frontmatter,c=l.university,s=l.degree,i=l.startDate,u=l.endDate;return a.createElement(m,{key:n,title:c,subtitle:s,content:a.createElement(o.Z,{content:r}),startDate:i,endDate:u})})))},d=function(){return a.createElement(r.Z,null,a.createElement(l.Z,{title:"My Work"}),a.createElement(u,null),a.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-experience-tsx-f00c34b476ed31e2257b.js.map