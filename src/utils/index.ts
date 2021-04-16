import Graph from './graph'

export const createModelSync = (words: string[], n: number): Graph => {
	const D = new Map<string, string[]>();
	words.forEach((word) => {
		if (word.length === n) {
			for (let j = 0; j < n; j++) {
				const string = replaceAt(word, j, '_');
				if (!D.get(string)) D.set(string, [word]);
				else D.get(string).push(word);
			}
		}
	});
	console.log('D ', D.size);

	const ADT = new Graph();
	D.forEach((k) => {
		k.forEach((l: string) => {
			k.forEach((m: string) => {
				if (l !== m) ADT.append(l, m, 1);
			});
		});
	});

	return ADT;
};

export const createModel = (words: string[], n: number): Promise<Graph> =>
	new Promise((resolve) => {
		const model = createModelSync(words, n);
		resolve(model);
	});


// Utility function to replace a character of a string at a specific index
const replaceAt = (string: string, index: number, replacement: string) => {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}