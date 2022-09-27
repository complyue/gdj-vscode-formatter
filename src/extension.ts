import * as vscode from 'vscode'

import { formatGoDuckLines } from './gdj-fmt'

export function activate(_context: vscode.ExtensionContext) {

	vscode.languages.registerDocumentRangeFormattingEditProvider('gdj', {
		provideDocumentRangeFormattingEdits(
			document: vscode.TextDocument, range: vscode.Range,
			_options: vscode.FormattingOptions, _token: vscode.CancellationToken,
		): vscode.ProviderResult<vscode.TextEdit[]> {
			return formatGoDuckLines(document, range)
		}
	})

}

export function deactivate() { }
