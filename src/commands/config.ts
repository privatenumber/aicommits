import { command } from 'cleye';

export const config = command({
	name: 'config',

	description: 'Set configuration',

	parameters: ['<get / set>' ,'<key=value...>'],
}, (argv) => {
	console.log(argv._);


});
