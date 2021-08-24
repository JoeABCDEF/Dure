import { workspace, WorkspaceConfiguration } from 'vscode';

const config: WorkspaceConfiguration = workspace.getConfiguration('dure');

export const pathConfig: Record<string, string> = config.get("path") || {};