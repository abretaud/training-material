"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9806],{59806:(e,t,o)=>{o.r(t),o.d(t,{default:()=>T,fileUploadStatus:()=>x});var r=o(12867),n=o(47343),a=o(96801),i=o(11123),s=o(88983),l=o(53979),c=o(64176),d=o(89934),u=o(61345),m=o(99729),p=o(43892),w=o(90375);const h="FileBrowser";var f;!function(e){e.copy="filebrowser:copy",e.copyDownloadLink="filebrowser:copy-download-link",e.createLauncher="filebrowser:create-main-launcher",e.cut="filebrowser:cut",e.del="filebrowser:delete",e.download="filebrowser:download",e.duplicate="filebrowser:duplicate",e.hideBrowser="filebrowser:hide-main",e.goToPath="filebrowser:go-to-path",e.goUp="filebrowser:go-up",e.openPath="filebrowser:open-path",e.openUrl="filebrowser:open-url",e.open="filebrowser:open",e.openBrowserTab="filebrowser:open-browser-tab",e.paste="filebrowser:paste",e.createNewDirectory="filebrowser:create-new-directory",e.createNewFile="filebrowser:create-new-file",e.createNewMarkdownFile="filebrowser:create-new-markdown-file",e.refresh="filebrowser:refresh",e.rename="filebrowser:rename",e.copyShareableLink="filebrowser:share-main",e.copyPath="filebrowser:copy-path",e.showBrowser="filebrowser:activate",e.shutdown="filebrowser:shutdown",e.toggleBrowser="filebrowser:toggle-main",e.toggleNavigateToCurrentDirectory="filebrowser:toggle-navigate-to-current-directory",e.toggleLastModified="filebrowser:toggle-last-modified",e.search="filebrowser:search",e.toggleHiddenFiles="filebrowser:toggle-hidden-files"}(f||(f={}));const g="filebrowser",b={id:"@jupyterlab/filebrowser-extension:browser",requires:[s.IFileBrowserFactory,u.ITranslator],optional:[r.ILayoutRestorer,l.ISettingRegistry,r.ITreePathUpdater,n.ICommandPalette],provides:s.IFileBrowserCommands,autoStart:!0,activate:async(e,t,o,r,i,s,l)=>{const c=o.load("jupyterlab"),d=t.defaultBrowser;r&&r.add(d,g);const u=a.PageConfig.getOption("preferredPath");u&&await d.model.cd(u),function(e,t,o,r,i){const s=o.load("jupyterlab"),{docRegistry:l,commands:c}=e,{defaultBrowser:d,tracker:u}=t;c.addCommand(f.del,{execute:()=>{const e=u.currentWidget;if(e)return e.delete()},icon:m.closeIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Delete"),mnemonic:0}),c.addCommand(f.copy,{execute:()=>{const e=u.currentWidget;if(e)return e.copy()},icon:m.copyIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Copy"),mnemonic:0}),c.addCommand(f.cut,{execute:()=>{const e=u.currentWidget;if(e)return e.cut()},icon:m.cutIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Cut")}),c.addCommand(f.duplicate,{execute:()=>{const e=u.currentWidget;if(e)return e.duplicate()},icon:m.copyIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Duplicate")}),c.addCommand(f.goToPath,{execute:async e=>{var r;const n=e.path||"",a=!(null!==(r=null==e?void 0:e.dontShowBrowser)&&void 0!==r&&r);try{if("directory"!==(await P.navigateToPath(n,t,o)).type&&a){const e=P.getBrowserForPath(n,t);if(e){e.clearSelectedItems();const t=n.split("/"),o=t[t.length-1];o&&await e.selectItemByName(o)}}}catch(e){console.warn(`${f.goToPath} failed to go to: ${n}`,e)}if(a)return c.execute(f.showBrowser,{path:n})}}),c.addCommand(f.goUp,{label:"go up",execute:async()=>{const e=P.getBrowserForPath("",t);if(!e)return;const{model:o}=e;if(await o.restored,o.path!==o.rootPath)try{await o.cd("..")}catch(e){console.warn(`${f.goUp} failed to go to parent directory of ${o.path}`,e)}}}),c.addCommand(f.openPath,{label:e=>e.path?s.__("Open %1",e.path):s.__("Open from Path…"),caption:e=>e.path?s.__("Open %1",e.path):s.__("Open from path"),execute:async e=>{var o;let r;if(r=(null==e?void 0:e.path)?e.path:null!==(o=(await n.InputDialog.getText({label:s.__("Path"),placeholder:"/path/relative/to/jlab/root",title:s.__("Open Path"),okLabel:s.__("Open")})).value)&&void 0!==o?o:void 0,r)try{const o="/"!==r&&r.endsWith("/");o&&(r=r.slice(0,r.length-1));const n=P.getBrowserForPath(r,t),{services:a}=n.model.manager,i=await a.contents.get(r,{content:!1});if(o&&"directory"!==i.type)throw new Error(`Path ${r}/ is not a directory`);if(await c.execute(f.goToPath,{path:r,dontShowBrowser:e.dontShowBrowser}),"directory"===i.type)return;return c.execute("docmanager:open",{path:r})}catch(e){return e.response&&404===e.response.status&&(e.message=s.__("Could not find path: %1",r)),(0,n.showErrorMessage)(s.__("Cannot open"),e)}}}),i&&i.addItem({command:f.openPath,category:s.__("File Operations")}),c.addCommand(f.open,{execute:e=>{const t=e.factory||void 0,o=u.currentWidget;if(!o)return;const{contents:r}=o.model.manager.services;return Promise.all((0,p.toArray)((0,p.map)(o.selectedItems(),(e=>{if("directory"===e.type){const t=r.localPath(e.path);return o.model.cd(`/${t}`)}return c.execute("docmanager:open",{factory:t,path:e.path})}))))},icon:e=>{var t;const o=e.factory||void 0;if(o){const e=l.getFileType(o);return null===(t=null==e?void 0:e.icon)||void 0===t?void 0:t.bindprops({stylesheet:"menuItem"})}return m.folderIcon.bindprops({stylesheet:"menuItem"})},label:e=>e.label||e.factory||s.__("Open"),mnemonic:0}),c.addCommand(f.paste,{execute:()=>{const e=u.currentWidget;if(e)return e.paste()},icon:m.pasteIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Paste"),mnemonic:0}),c.addCommand(f.createNewDirectory,{execute:()=>{const e=u.currentWidget;if(e)return e.createNewDirectory()},icon:m.newFolderIcon.bindprops({stylesheet:"menuItem"}),label:s.__("New Folder")}),c.addCommand(f.createNewFile,{execute:()=>{const e=u.currentWidget;if(e)return e.createNewFile({ext:"txt"})},icon:m.textEditorIcon.bindprops({stylesheet:"menuItem"}),label:s.__("New File")}),c.addCommand(f.createNewMarkdownFile,{execute:()=>{const e=u.currentWidget;if(e)return e.createNewFile({ext:"md"})},icon:m.markdownIcon.bindprops({stylesheet:"menuItem"}),label:s.__("New Markdown File")}),c.addCommand(f.refresh,{execute:e=>{const t=u.currentWidget;if(t)return t.model.refresh()},icon:m.refreshIcon.bindprops({stylesheet:"menuItem"}),caption:s.__("Refresh the file browser."),label:s.__("Refresh File List")}),c.addCommand(f.rename,{execute:e=>{const t=u.currentWidget;if(t)return t.rename()},icon:m.editIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Rename"),mnemonic:0}),c.addCommand(f.copyPath,{execute:()=>{const e=u.currentWidget;if(!e)return;const t=e.selectedItems().next();t&&n.Clipboard.copyToSystem(t.path)},isVisible:()=>!!u.currentWidget&&void 0!==u.currentWidget.selectedItems().next,icon:m.fileIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Copy Path")}),c.addCommand(f.shutdown,{execute:()=>{const e=u.currentWidget;if(e)return e.shutdownKernels()},icon:m.stopIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Shut Down Kernel")}),c.addCommand(f.toggleBrowser,{execute:()=>d.isHidden?c.execute(f.showBrowser,void 0):c.execute(f.hideBrowser,void 0)}),c.addCommand(f.createLauncher,{label:s.__("New Launcher"),icon:e=>e.toolbar?m.addIcon:void 0,execute:e=>{if(c.hasCommand("launcher:create"))return P.createLauncher(c,d,e)}}),r&&c.addCommand(f.toggleNavigateToCurrentDirectory,{label:s.__("Show Active File in File Browser"),isToggled:()=>d.navigateToCurrentDirectory,execute:()=>{const e=!d.navigateToCurrentDirectory;return r.set("@jupyterlab/filebrowser-extension:browser","navigateToCurrentDirectory",e).catch((e=>{console.error("Failed to set navigateToCurrentDirectory setting")}))}}),c.addCommand(f.toggleLastModified,{label:s.__("Show Last Modified Column"),isToggled:()=>d.showLastModifiedColumn,execute:()=>{const e=!d.showLastModifiedColumn;if(r)return r.set("@jupyterlab/filebrowser-extension:browser","showLastModifiedColumn",e).catch((e=>{console.error("Failed to set showLastModifiedColumn setting")}))}}),c.addCommand(f.toggleHiddenFiles,{label:s.__("Show Hidden Files"),isToggled:()=>d.showHiddenFiles,isVisible:()=>"true"===a.PageConfig.getOption("allow_hidden_files"),execute:()=>{const e=!d.showHiddenFiles;if(r)return r.set("@jupyterlab/filebrowser-extension:browser","showHiddenFiles",e).catch((e=>{console.error("Failed to set showHiddenFiles setting")}))}}),c.addCommand(f.search,{label:s.__("Search on File Names"),execute:()=>alert("search")}),i&&i.addItem({command:f.toggleNavigateToCurrentDirectory,category:s.__("File Operations")})}(e,t,o,i,l);const h=()=>{const t=(0,p.find)(e.commands.keyBindings,(e=>e.command===f.toggleBrowser));if(t){const e=t.keys.map(w.CommandRegistry.formatKeystroke).join(", ");d.title.caption=c.__("File Browser (%1)",e)}else d.title.caption=c.__("File Browser")};h(),e.commands.keyBindingChanged.connect((()=>{h()})),Promise.all([e.restored,d.model.restored]).then((()=>{s&&d.model.pathChanged.connect(((e,t)=>{s(t.newValue)})),i&&i.load("@jupyterlab/filebrowser-extension:browser").then((e=>{const t={navigateToCurrentDirectory:!1,showLastModifiedColumn:!0,useFuzzyFilter:!0,showHiddenFiles:!1},o={filterDirectories:!0};function r(e){for(const o in t){const r=e.get(o).composite;t[o]=r,d[o]=r}const r=e.get("filterDirectories").composite;o.filterDirectories=r,d.model.filterDirectories=r}e.changed.connect(r),r(e)}))}))}},y={id:"@jupyterlab/filebrowser-extension:factory",provides:s.IFileBrowserFactory,requires:[i.IDocumentManager,u.ITranslator],optional:[c.IStateDB,r.IRouter,r.JupyterFrontEnd.ITreeResolver],activate:async(e,t,o,r,a,i)=>{const{commands:l}=e,c=new n.WidgetTracker({namespace:g}),d=(e,n={})=>{var a;const i=new s.FilterFileBrowserModel({translator:o,auto:null===(a=n.auto)||void 0===a||a,manager:t,driveName:n.driveName||"",refreshInterval:n.refreshInterval,state:null===n.state?void 0:n.state||r||void 0}),l=n.restore,d=new s.FileBrowser({id:e,model:i,restore:l,translator:o});return c.add(d),d},u=d("filebrowser",{auto:!1,restore:!1});return P.restoreBrowser(u,l,a,i),{createFileBrowser:d,defaultBrowser:u,tracker:c}}},_={id:"@jupyterlab/filebrowser-extension:download",requires:[s.IFileBrowserFactory,u.ITranslator],autoStart:!0,activate:(e,t,o)=>{const r=o.load("jupyterlab"),{commands:a}=e,{tracker:i}=t;a.addCommand(f.download,{execute:()=>{const e=i.currentWidget;if(e)return e.download()},icon:m.downloadIcon.bindprops({stylesheet:"menuItem"}),label:r.__("Download")}),a.addCommand(f.copyDownloadLink,{execute:()=>{const e=i.currentWidget;if(e)return e.model.manager.services.contents.getDownloadUrl(e.selectedItems().next().path).then((e=>{n.Clipboard.copyToSystem(e)}))},icon:m.copyIcon.bindprops({stylesheet:"menuItem"}),label:r.__("Copy Download Link"),mnemonic:0})}},v={id:"@jupyterlab/filebrowser-extension:widget",requires:[i.IDocumentManager,s.IFileBrowserFactory,l.ISettingRegistry,n.IToolbarWidgetRegistry,u.ITranslator,r.ILabShell,s.IFileBrowserCommands],autoStart:!0,activate:(e,t,o,r,a,i,l)=>{const{commands:c}=e,{defaultBrowser:d,tracker:u}=o,p=i.load("jupyterlab");d.node.setAttribute("role","region"),d.node.setAttribute("aria-label",p.__("File Browser Section")),d.title.icon=m.folderIcon,a.registerFactory(h,"uploader",(e=>new s.Uploader({model:e.model,translator:i}))),(0,n.setToolbar)(d,(0,n.createToolbarFactory)(a,r,h,v.id,i)),l.add(d,"left",{rank:100}),c.addCommand(f.showBrowser,{execute:e=>{const t=e.path||"",r=P.getBrowserForPath(t,o);if(r)if(d!==r){const e=["left","right"];for(const t of e){const e=l.widgets(t);let o=e.next();for(;o;){if(o.contains(r))return void l.activateById(o.id);o=e.next()}}}else l.activateById(d.id)}}),c.addCommand(f.hideBrowser,{execute:()=>{const e=u.currentWidget;e&&!e.isHidden&&l.collapseLeft()}}),l.restored.then((e=>{e.fresh&&"single-document"!==l.mode&&c.execute(f.showBrowser,void 0)})),Promise.all([e.restored,d.model.restored]).then((()=>{function e(){l.isEmpty("main")&&c.hasCommand("launcher:create")&&P.createLauncher(c,d)}l.layoutModified.connect((()=>{e()})),l.currentChanged.connect((async(e,r)=>{if(d.navigateToCurrentDirectory&&r.newValue){const{newValue:e}=r,n=t.contextForWidget(e);if(n){const{path:e}=n;try{await P.navigateToPath(e,o,i)}catch(t){console.warn(`${f.goToPath} failed to open: ${e}`,t)}}}})),e()}))}},I={id:"@jupyterlab/filebrowser-extension:share-file",requires:[s.IFileBrowserFactory,u.ITranslator],autoStart:!0,activate:(e,t,o)=>{const r=o.load("jupyterlab"),{commands:i}=e,{tracker:s}=t;i.addCommand(f.copyShareableLink,{execute:()=>{const e=s.currentWidget,t=null==e?void 0:e.selectedItems().next();t&&n.Clipboard.copyToSystem(a.PageConfig.getUrl({workspace:a.PageConfig.defaultWorkspace,treePath:t.path,toShare:!0}))},isVisible:()=>!!s.currentWidget&&1===(0,p.toArray)(s.currentWidget.selectedItems()).length,icon:m.linkIcon.bindprops({stylesheet:"menuItem"}),label:r.__("Copy Shareable Link")})}},C={id:"@jupyterlab/filebrowser-extension:open-with",requires:[s.IFileBrowserFactory],autoStart:!0,activate:(e,t)=>{const{docRegistry:o}=e,{tracker:r}=t;let n=[];e.contextMenu.opened.connect((function(e){var t,a;const i=null!==(a=null===(t=e.menu.items.find((e=>{var t;return"submenu"===e.type&&"jp-contextmenu-open-with"===(null===(t=e.submenu)||void 0===t?void 0:t.id)})))||void 0===t?void 0:t.submenu)&&void 0!==a?a:null;if(!i)return;n.forEach((e=>e.dispose())),n.length=0,i.clearItems();const s=r.currentWidget?P.OpenWith.intersection((0,p.map)(r.currentWidget.selectedItems(),(e=>P.OpenWith.getFactories(o,e)))):new Set;n=[...s].map((e=>i.addItem({args:{factory:e},command:f.open})))}))}},F={id:"@jupyterlab/filebrowser-extension:open-browser-tab",requires:[s.IFileBrowserFactory,u.ITranslator],autoStart:!0,activate:(e,t,o)=>{const{commands:r}=e,n=o.load("jupyterlab"),{tracker:i}=t;r.addCommand(f.openBrowserTab,{execute:e=>{const t=i.currentWidget;if(!t)return;const o=e.mode;return Promise.all((0,p.toArray)((0,p.map)(t.selectedItems(),(e=>{if("single-document"!==o)return r.execute("docmanager:open-browser-tab",{path:e.path});{const t=a.PageConfig.getUrl({mode:"single-document",treePath:e.path}),o=window.open();if(!o)throw new Error("Failed to open new browser tab.");o.opener=null,o.location.href=t}}))))},icon:m.addIcon.bindprops({stylesheet:"menuItem"}),label:e=>"single-document"===e.mode?n.__("Open in Simple Mode"):n.__("Open in New Browser Tab"),mnemonic:0})}},x={id:"@jupyterlab/filebrowser-extension:file-upload-status",autoStart:!0,requires:[s.IFileBrowserFactory,u.ITranslator],optional:[d.IStatusBar],activate:(e,t,o,r)=>{if(!r)return;const n=new s.FileUploadStatus({tracker:t.tracker,translator:o});r.registerStatusItem("@jupyterlab/filebrowser-extension:file-upload-status",{item:n,align:"middle",isActive:()=>!!n.model&&n.model.items.length>0,activeStateChanged:n.model.stateChanged})}},B={id:"@jupyterlab/filebrowser-extension:open-url",autoStart:!0,requires:[s.IFileBrowserFactory,u.ITranslator],optional:[n.ICommandPalette],activate:(e,t,o,r)=>{const{commands:i}=e,s=o.load("jupyterlab"),{defaultBrowser:l}=t,c=f.openUrl;i.addCommand(c,{label:e=>e.url?s.__("Open %1",e.url):s.__("Open from URL…"),caption:e=>e.url?s.__("Open %1",e.url):s.__("Open from URL"),execute:async e=>{var t,o,r;let c=null!==(t=null==e?void 0:e.url)&&void 0!==t?t:"";if(c||(c=null!==(o=(await n.InputDialog.getText({label:s.__("URL"),placeholder:"https://example.com/path/to/file",title:s.__("Open URL"),okLabel:s.__("Open")})).value)&&void 0!==o?o:void 0),!c)return;let d,u="";try{const e=await fetch(c);d=await e.blob(),u=null!==(r=e.headers.get("Content-Type"))&&void 0!==r?r:""}catch(e){return e.response&&200!==e.response.status&&(e.message=s.__("Could not open URL: %1",c)),(0,n.showErrorMessage)(s.__("Cannot fetch"),e)}try{const e=a.PathExt.basename(c),t=new File([d],e,{type:u}),o=await l.model.upload(t);return i.execute("docmanager:open",{path:o.path})}catch(e){return(0,n.showErrorMessage)(s._p("showErrorMessage","Upload Error"),e)}}}),r&&r.addItem({command:c,category:s.__("File Operations")})}};var P;!function(e){e.createLauncher=function(e,t,o){const{model:r}=t;return e.execute("launcher:create",Object.assign({cwd:r.path},o)).then((e=>(r.pathChanged.connect((()=>{e.content&&(e.content.cwd=r.path)}),e),e)))},e.getBrowserForPath=function(e,t){const{defaultBrowser:o,tracker:r}=t,n=o.model.manager.services.contents.driveName(e);if(n){return r.find((e=>e.model.driveName===n))||void console.warn(`${f.goToPath} failed to find filebrowser for path: ${e}`)}return o},e.navigateToPath=async function(t,o,r){const n=r.load("jupyterlab"),i=e.getBrowserForPath(t,o);if(!i)throw new Error(n.__("No browser for path"));const{services:s}=i.model.manager,l=s.contents.localPath(t);await s.ready;const c=await s.contents.get(t,{content:!1}),{model:d}=i;return await d.restored,"directory"===c.type?await d.cd(`/${l}`):await d.cd(`/${a.PathExt.dirname(l)}`),c},e.restoreBrowser=async function(e,t,o,r){const n="jp-mod-restoring";if(e.addClass(n),!o)return await e.model.restore(e.id),await e.model.refresh(),void e.removeClass(n);const a=async()=>{o.routed.disconnect(a);const i=await(null==r?void 0:r.paths);(null==i?void 0:i.file)||(null==i?void 0:i.browser)?(await e.model.restore(e.id,!1),i.file&&await t.execute(f.openPath,{path:i.file,dontShowBrowser:!0}),i.browser&&await t.execute(f.openPath,{path:i.browser,dontShowBrowser:!0})):(await e.model.restore(e.id),await e.model.refresh()),e.removeClass(n)};o.routed.connect(a)}}(P||(P={}));const T=[y,b,I,x,_,v,C,F,B];!function(e){let t;!function(e){e.getFactories=function(e,t){var o;const r=e.preferredWidgetFactories(t.path).map((e=>e.name)),n=null===(o=e.getWidgetFactory("notebook"))||void 0===o?void 0:o.name;return n&&"notebook"===t.type&&-1===r.indexOf(n)&&r.unshift(n),r},e.intersection=function(e){const t=e.next();if(!t)return new Set;const o=new Set(t);return(0,p.reduce)(e,((e,t)=>new Set(t.filter((t=>e.has(t))))),o)}}(t=e.OpenWith||(e.OpenWith={}))}(P||(P={}))}}]);
//# sourceMappingURL=9806.e279e7a.js.map