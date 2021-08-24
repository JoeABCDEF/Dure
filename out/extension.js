"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode_1 = require("vscode");
const configuration_1 = require("./configuration");
// import path from "path"
// ,
// 		"snippets": [
// 			{
// 				"language": "cpp",
// 				"path": "./snippets/snippets.json"
// 			}
// 		]
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate({ subscriptions }) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "dure" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    // let disposable = vscode.commands.registerCommand('dure.helloWorld', () => {
    // 	// The code you place here will be executed every time your command is executed
    // 	// Display a message box to the user
    // 	vscode.window.showInformationMessage('Hello World from CodeReplace!');
    // });
    const previewWelcome = vscode_1.commands.registerCommand('dure.welcome', () => {
        // console.log(commands.executeCommand('git.showOutput'));
        // console.log(commands.executeCommand('git.fetch'));
        // commands.executeCommand("git.addRemote")
        // 	.then((result) => {
        // 		console.log(result);
        // 	});
        // window.showInformationMessage('This is the message', {
        // 	modal: true,
        // 	detail: 'This is the detail. Rendered less prominent, but with more space for, well, details.'
        // });
        let pathKeys = Object.keys(configuration_1.pathConfig);
        vscode_1.window.showQuickPick(pathKeys.map(key => ({
            label: key,
            description: "current source",
            detail: "current source",
        })), {
            title: "选择源仓库",
            placeHolder: "用于同步代码的仓库",
            ignoreFocusOut: true,
            canPickMany: false,
            onDidSelectItem(key) {
                console.dir(key);
            }
        });
    });
    class SyncFile extends vscode_1.TreeItem {
        // iconPath = {
        // 	light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        // 	dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
        // };
        constructor(label, collapsibleState, iconPath, command, contextValue) {
            super({ label, highlights: [[0, label.length]] }, collapsibleState);
            this.label = label;
            this.collapsibleState = collapsibleState;
            this.iconPath = iconPath;
            this.command = command;
            this.contextValue = contextValue;
            this.tooltip = label;
            this.description = label;
            this.contextValue = contextValue;
            this.iconPath = iconPath;
            this.command = command;
        }
    }
    let bool = () => Math.random() > 0.5;
    let generatorRandomTestData = (index, icon = "circle-large-outline") => new SyncFile(`测试${Math.ceil(Math.random() * 1000)}`, bool() ? 1 : 0, new vscode_1.ThemeIcon(icon), { title: "asd", command: "dure.addSyncFile", arguments: [index] }, `${bool() ? 1 : 0}`);
    let _fileData = () => Array.from({ length: 0 }, (el, i) => generatorRandomTestData(i));
    let generateData = _fileData();
    // 	{ name: `测试${Math.ceil(Math.random() * 1000)}`, index: 1, icon: "circle-large-outline" },
    class FileTreeData {
        constructor() {
            this._onDidChangeTreeData = new vscode_1.EventEmitter();
            this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        }
        refresh() {
            // let treeItem = new TreeItem({ label: "撒大声地", highlights: [[0, 6]] }, 1);
            // treeItem.iconPath = new ThemeIcon('pass-filled');
            // // treeItem.iconPath = Uri.joinPath(Uri.parse(".."), 'resources/sync.svg');
            // // treeItem.contextValue = "asdasdas";
            // treeItem.command = {
            // 	title: "+++++++++",
            // 	command: "dure.addSyncFile",
            // 	arguments: [this.refresh]
            // };
            // this.onDidChangeTreeData((value) => {
            // 	console.dir(value);
            // 	console.dir('^^^^^^^^^^^^^^^^^^^');
            // 	return treeItem;
            // });
            this._onDidChangeTreeData.fire();
        }
        getChildren(el) {
            console.log(el);
            console.log("0000000000000000000000");
            // return Array.from({ length: 6 }, (el, i) => ({ name: `测试${Math.ceil(Math.random() * 1000)}`, index: 1, icon: "circle-large-outline" }));
            return !el ? generateData : [];
        }
        getTreeItem(item) {
            // console.dir(item);
            // console.dir('99999999999999');
            // let treeItem = new TreeItem({ label: item.name, highlights: [[0, item.name.length]] }, item.index);
            // treeItem.iconPath = new ThemeIcon(item.icon);
            // // treeItem.iconPath = Uri.joinPath(Uri.parse(".."), 'resources/sync.svg');
            // // treeItem.contextValue = "asdasdas";
            // treeItem.contextValue = item.index;
            // treeItem.tooltip = "asfasfasfa";
            // treeItem.command = {
            // 	title: "asd",
            // 	command: "dure.addSyncFile",
            // 	arguments: [this.refresh]
            // };
            return item;
        }
    }
    let treeData = new FileTreeData();
    treeData.onDidChangeTreeData((data) => {
        console.dir('09090909090');
        console.dir(data);
    });
    vscode_1.window.registerTreeDataProvider("sync-files", treeData);
    vscode_1.commands.registerCommand('dure.addSyncFile', (index) => {
        console.dir('--------------');
        // console.dir(el);
        // console.dir(el2);
        // el.label = { label: "asdasd" };
        // el.iconPath = new ThemeIcon('pass-filled');
        // pass
        // _fileData[3].name = "啊实打实地方";
        // _fileData[3].icon = "pass-filled";
        // refresh();
        generateData.splice(index, 1, generatorRandomTestData(index, "pass-filled"));
        treeData.refresh();
        console.dir("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    });
    // commands.registerCommand('dure.addSyncFile', (treeData, el: TreeItem, el2) => {
    // 	treeData.fi
    // });
    const test = vscode_1.commands.registerCommand('dure.test', () => {
        // console.dir(Uri.joinPath(Uri.parse(".."), 'resources/sync.svg'));
        // console.dir(Uri.parse('..'));
        // console.dir(__dirname);
        // console.dir(__filename);
        let treeData = {
            onDidChangeTreeData: new vscode_1.EventEmitter().event,
            getChildren(el) {
                // console.log(el);
                console.log("0000000000000000000000");
                return Array.from({ length: 6 }, (el, i) => ({ name: `测试${Math.ceil(Math.random() * 1000)}`, index: 1, icon: "circle-large-outline" }));
            },
            getTreeItem(el) {
                // console.dir(el);
                console.dir('99999999999999');
                let treeItem = new vscode_1.TreeItem({ label: `测试${Math.ceil(Math.random() * 1000)}`, highlights: [[0, el.name.length]] }, el.index);
                treeItem.iconPath = new vscode_1.ThemeIcon("circle-large-outline");
                // treeItem.iconPath = Uri.joinPath(Uri.parse(".."), 'resources/sync.svg');
                // treeItem.contextValue = "asdasdas";
                treeItem.tooltip = "asfasfasfa";
                treeItem.command = {
                    title: "asd",
                    command: "dure.addSyncFile",
                    arguments: [this.onDidChangeTreeData, treeItem, "asdasd"]
                };
                treeItem.accessibilityInformation = {
                    label: "asdasdas"
                };
                return treeItem;
            },
            getParent(el) {
                console.dir("**************");
            },
            // resolveTreeItem(item) {
            // 	item.iconPath = new ThemeIcon('pass-filled');
            // 	console.log('+++++++++++++++');
            // 	console.log(item);
            // 	return item;
            // }
        };
        // treeData.onDidChangeTreeData(() => { });
        let tree = vscode_1.window.createTreeView("sync-files", {
            showCollapseAll: true,
            canSelectMany: true,
            treeDataProvider: treeData
        });
        tree.onDidChangeSelection((el) => {
            console.dir('onDidChangeSelection');
            console.dir(el);
        }, null);
        tree.onDidExpandElement((el) => {
            console.dir('onDidExpandElement');
            console.dir(el);
        });
        tree.onDidCollapseElement((el) => {
            console.dir('onDidCollapseElement');
            console.dir(el);
        });
    });
    subscriptions.push(test);
    subscriptions.push(previewWelcome);
    // window.withProgress({
    // 	location: ProgressLocation.Notification,
    // 	title: "I am long running!",
    // 	cancellable: true
    // }, (progress, token) => {
    // 	token.onCancellationRequested(() => {
    // 		console.log("User canceled the long running operation");
    // 	});
    // 	progress.report({ increment: 0 });
    // 	setTimeout(() => {
    // 		progress.report({ increment: 10, message: "I am long running! - still going..." });
    // 	}, 1000);
    // 	setTimeout(() => {
    // 		progress.report({ increment: 40, message: "I am long running! - still going even more..." });
    // 	}, 2000);
    // 	setTimeout(() => {
    // 		progress.report({ increment: 50, message: "I am long running! - almost there..." });
    // 	}, 3000);
    // 	const p = new Promise<void>(resolve => {
    // 		setTimeout(() => {
    // 			resolve();
    // 		}, 5000);
    // 	});
    // 	return p;
    // });
    // console.log('*****************');
    // console.log(workspace.workspaceFolders);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map