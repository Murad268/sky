export class skyTech {
   onlyUnique(array) {
		return [...new Set(array)];
	}

	onlyUniqueWithoutR(array) {
		const unique = [];
		const seen = new Set();
		for (const item of array) {
			if (!seen.has(item)) {
				seen.add(item);
				unique.push(item);
			} else if (unique.includes(item)) {
				const index = unique.indexOf(item);
				unique.splice(index, 1);
			}
		}
		return unique;
	}

	proccArrayElements(arr, process) {
		if (!Array.isArray(arr)) {
			throw new Error('Input is not an array');
		}
		let sum = process === 'plus' ? 0 : process === 'power' ? 1 : undefined;

		if (sum === undefined) {
			return 'process not found';
		}

		for (const num of arr) {
			if (typeof num !== 'number') {
				throw new Error('Array contains non-numeric elements');
			}
			if (process === 'plus') {
				sum += num;
			} else if (process === 'power') {
				sum *= num;
			}
		}
		return sum;
	}

	proccBigArrayElements(arr, process) {
		function throwError(message) {
			return { error: true, message: message };
		}
		const flatArr = arr.flat(Infinity);
		let sum = process === 'plus' ? 0 : process === 'power' ? 1 : undefined;

		if (sum === undefined) {
			return 'process not found';
		}

		for (const num of flatArr) {
			if (typeof num !== 'number') {
				return throwError('Array contains non-numeric elements');
			}
			if (process === 'plus') {
				sum += num;
			} else if (process === 'power') {
				sum *= num;
			}
		}
		return sum;
	}
}
