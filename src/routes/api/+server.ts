var mandrill = require('node-mandrill')('02960bd14dfadfa25c1dcd3bb6438f83-us12');

import MailChimpAPI from 'MailChimpAPI';

export function GET() {
	console.log('test');

	//send an e-mail to jim rubenstein
	mandrill('/messages/send', {
		message: {
			to: [{ email: 'jonas-focke@mailbox.org', name: 'Jonas Focke' }],
			from_email: 'test-test@test.de',
			subject: 'BAUM',
			text: 'HELLO SAILOR!'
		}
	});

	return {
		status: 200
	};
}
